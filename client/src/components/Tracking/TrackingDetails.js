import {GoogleMap, LoadScript} from '@react-google-maps/api';

const TrackingDetails = () => {
    const containerStyle = {
        width: '800px',
        height: '400px'
    };

    const center = {
        lat: 45.508888,
        lng: -73.561668
    };

    console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    )
}
export default TrackingDetails;