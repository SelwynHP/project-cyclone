import {orders} from "../../data";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const TrackingList = () => {
    const nav = useNavigate();
    const handleClick = (orderId) => {
        nav(`/tracking/${orderId}`);
    }
    return (
        <Wrapper>
            <h1>Order Tracking</h1>
            {orders &&
                orders.map(order => {
                    return <div key={order.orderId} onClick={() => handleClick(order.orderId)}>
                        <span>Order# {order.orderId}</span>
                        <span>Merchant: {order.merchant}</span>
                        <span>${order.total}</span>
                    </div>
                })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  margin: 15px auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 30px;
  }

  & > div {
    text-align: center;
    width: 100%;
    padding: 10px;
    border-radius: 5px 15px;
    background-color: var(--dark-sea-green);
    display: flex;
    justify-content: space-around;

    &:hover {
      cursor: pointer;
    }
  }
`
export default TrackingList;