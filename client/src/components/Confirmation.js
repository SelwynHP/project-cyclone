import {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {UserContext} from "./UserContext";
import Loader from "./Loader";

const Confirmation = () => {
    const {loginState} = useContext(UserContext);
    const [item, setItem] = useState(null);
    const [total, setTotal] = useState(0);
    const {itemId} = useParams();
    const deliveryFees = 2.99;
    let taxes;
    useEffect(() => {
        fetch(`/api/item/${itemId}`)
            .then(res => res.json())
            .then(data => {
                taxes = data.itemDetails.price * 0.15;
                setTotal(data.itemDetails.price + deliveryFees + taxes);
                setItem(data.itemDetails)
            })
            .catch(err => {
                console.log(err.message);
            })
    }, [])
    return (
        <Wrapper>
            {(item && loginState) &&
                <div>
                    <h1>Order# d8f12191-35fb-4c3e-8f51-eddd144ee2d2</h1>
                    <img src={item.imageSrc} alt={`${item.name}`}/>
                    <p>{item.description}</p>
                    <h3>Subtotal: ${item.price}</h3>
                    <h3>Delivery Fees: ${deliveryFees}</h3>
                    <h3>Taxes: ${deliveryFees}</h3>
                    <h3>Total: ${total.toFixed(2)}</h3>
                </div>
            }
            {!loginState &&
                <Loader/>}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  text-align: center;

  h1 {
    font-weight: bold;
  }

  & div {
    margin: 15px auto;
    display: flex;
    flex-direction: column;
    background-color: var(--dark-sea-green);
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 400px;
    border-radius: 20px;
  }

  img {
    border-radius: 50%;
    max-width: 50%;
  }
`

export default Confirmation;