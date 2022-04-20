import styled from "styled-components";
import {useParams} from "react-router-dom";

const TrackingStats = ({time}) => {
    const {orderId} = useParams();
    const {duration} = time;
    return (
        <Wrapper>
            <h2>Tracking - Order#{orderId}</h2>
            <h3>From Apple</h3>
            <h3>Estimated Delivery Time - {duration.text}</h3>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  //background-color: aqua;
  text-align: center;
  width: 30%;
  min-width: 100px;
  max-width: 400px;
  height: 100%;

  & h2 {
    font-size: 30px;
    font-weight: bold;
    margin: 10px 0;
  }

  & h3 {
    font-size: 20px;
  }
`
export default TrackingStats;