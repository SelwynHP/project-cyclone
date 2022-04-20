import {useNavigate} from "react-router-dom";
import cyclone from "../assets/hurricane.png";
import styled from "styled-components";

const Logo = () => {
    const nav = useNavigate();
    const handleClick = () => {
        nav("/");
    }
    return (
        <Wrapper onClick={() => handleClick()}>
            <img src={cyclone} alt="company logo"/>
            <h1>Cyclone</h1>
        </Wrapper>
    )
}
const Wrapper = styled.button`
  display: flex;
  height: 90%;
  margin-left: 15px;
  border-radius: 5px 15px;
  font-family: cursive;
  font-size: 25px;
  background-color: var(--hunter-green);
  justify-content: space-between;
  gap: 5px;
  align-items: center;

  img {
    height: 100%;
  }
`
export default Logo;