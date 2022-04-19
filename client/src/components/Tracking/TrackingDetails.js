import styled from "styled-components";
import {useParams} from "react-router-dom";

const TrackingDetails = () => {
    const {orderId} = useParams();
    return (
        <Wrapper>
            <h1>Tracking Order# {orderId}</h1>
            <div></div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  & div {
    background-color: aqua;
  }
`
export default TrackingDetails;