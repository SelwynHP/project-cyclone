import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Merchant = ({store}) => {
    const location = `/stores/${store.companyHandle}`;
    const nav = useNavigate();
    const handleClick = () => {
        nav(location);
    }
    return (
        <Wrapper onClick={() => handleClick()}>
            <img src={store?.companyLogo} alt="a company logo"/>
            <h1>{store.companyName}</h1>
            <p>{store?.companySlogan}</p>
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

  h1 {
    font-size: 30px;
    font-weight: bold;
    margin: 10px 0;
  }

  p {
    font-style: italic;
  }

  &:hover {
    cursor: pointer;
  }
`

export default Merchant;