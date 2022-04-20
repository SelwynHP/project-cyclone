import {DirectionsRenderer, GoogleMap, LoadScript} from '@react-google-maps/api';
import {getGeocode, getLatLng} from "use-places-autocomplete";
import styled from "styled-components";
import {useCallback, useContext, useRef, useState} from "react";
import TrackingStats from "./TrackingStats";
import ClientLogin from "../ClientCredentials/ClientLogin";
import {UserContext} from "../UserContext";

const TrackingDetails = () => {
    const {loginState} = useContext(UserContext);
    const [directions, setDirections] = useState();
    const mapRef = useRef();

    const testPickup = "Complexe Desjardins, Montreal, Quebec";
    const testDropoff = "Ikea Montreal, Montreal, Quebec";

    const getDirections = async (pickup, dropoff) => {
        if (pickup && dropoff) {
            const service = new window.google.maps.DirectionsService();
            console.log(service);
            service.route(
                {
                    origin: pickup,
                    destination: dropoff,
                    travelMode: window.google.maps.TravelMode.DRIVING
                },
                (result, status) => {
                    if (status === "OK" && result) {
                        console.log(result);
                        setDirections(result);
                    }
                })
        }
    }
    const getPosition = async (place) => {
        const results = await getGeocode({address: place});
        const {lat, lng} = await getLatLng(results[0]);
        return {lat, lng};
    }
    const mapOnLoad = useCallback((map) => (mapRef.current = map), []);
    const onLoad = async (pickup, dropoff) => {
        const posPickup = await getPosition(pickup);
        const posDropoff = await getPosition(dropoff);
        await getDirections(posPickup, posDropoff);
        // mapRef.current?.panTo(pickup);
    }

    const containerStyle = {
        width: '100%',
        height: '100%'
    };
    const center = {
        lat: 45.508888,
        lng: -73.561668
    };
    const options = {
        disableDefaultUI: true,
        clickableIcons: false
    }

    return (
        <Wrapper>
            {(directions && loginState) &&
                <TrackingStats time={directions.routes[0].legs[0]}/>
            }
            {loginState ?
                <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                            onLoad={() => onLoad(testPickup, testDropoff)}>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={12}
                        options={options}
                        onLoad={mapOnLoad}
                    >
                        { /* Child components, such as markers, info windows, etc. */}
                        {directions && <DirectionsRenderer directions={directions}/>}
                    </GoogleMap>
                </LoadScript> :
                <ClientLogin type="login"/>
            }
        </Wrapper>
    )
}
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`
export default TrackingDetails;