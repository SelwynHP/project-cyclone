import styled from "styled-components";

const Item = ({item}) => {
    const handleBuyNow = () => {

    }
    const handleAddToCart = () => {
        
    }
    return (
        <Wrapper>
            <img src={item.imageSrc} alt={`${item.name}`}/>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
            <AddToCart>Add to Cart</AddToCart>
            <BuyNow>Buy Now</BuyNow>
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

  img {
    border-radius: 50%;
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