import TrackingList from "./TrackingList";
import {useContext} from "react";
import {UserContext} from "../UserContext";
import styled from "styled-components";
import ClientLogin from "../ClientCredentials/ClientLogin";

const Tracking = () => {
    const {loginState} = useContext(UserContext);
    return (
        <Wrapper>
            {loginState ?
                <TrackingList/> :
                <ClientLogin type="login"/>
            }
        </Wrapper>
    )
}
const Wrapper = styled.div`

`
export default Tracking;