import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    return (
        <Wrapper>
            <NavLink to="/">
                <h1>Logo</h1>
            </NavLink>

            <ul>
                <li>
                    <NavLink to="/stores">Stores</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  background-color: aqua;
  height: 50px;
  display: flex;
  align-items: center;

  ul {
    position: relative;
    margin-left: auto;
    width: 200px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
  }

  a {
    color: initial;
    text-decoration: none;
  }
`

export default Header;