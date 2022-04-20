import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Item = ({item}) => {
    const nav = useNavigate();
    const handleBuyNow = () => {
        nav(`/confirmation/${item._id}`);
    }
    const handleAddToCart = () => {

    }
    return (
        <Wrapper>
            <h2>{item.name}</h2>
            <img src={item.imageSrc} alt={`${item.name}`}/>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
            <AddToCart>Add to Cart</AddToCart>
            <BuyNow onClick={() => handleBuyNow()}>Buy Now</BuyNow>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--dark-sea-green);
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 400px;
  border-radius: 20px;

  h2 {
    margin: 5px 0;
  }

  img {
    border-radius: 10px;
    max-width: 50%;
  }

  & button {
    width: 50%;
  }
`
const AddToCart = styled.button`
  margin-bottom: 5px;
`
const BuyNow = styled.button`
  margin-top: 0;
`
export default Item;