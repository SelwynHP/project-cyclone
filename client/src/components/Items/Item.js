import styled from "styled-components";

const Item = ({item}) => {
    console.log(item);
    return (
        <Wrapper>
            <img src={item.imageSrc} alt={`${item.name}`}/>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
            <button>Add to Cart</button>
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
`
export default Item;