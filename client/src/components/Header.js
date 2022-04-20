import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {useContext} from "react";
import {UserContext} from "./UserContext";
import Logo from "./Logo";

const Header = () => {
    const {loginState} = useContext(UserContext);
    return (
        <Wrapper>
            <Logo/>
            <ul>
                <li>
                    <NavLink to="/stores">Stores</NavLink>
                </li>
                <li>
                    {loginState ?
                        <NavLink to="/profile/client">Account</NavLink> :
                        <NavLink to="/login">Login</NavLink>
                    }
                </li>
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  background-color: var(--dark-sea-green);
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
    padding: 10px;
    border-radius: 5px 15px;
    background-color: var(--hunter-green);
    color: var(--lemon-glacier);
    font-weight: bold;
    text-decoration: none;
  }
`

export default Header;