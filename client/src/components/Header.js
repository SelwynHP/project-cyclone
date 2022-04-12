import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    return (
        <Wrapper>
            <h1>{"Logo"}</h1>
            <ul>
                <li>
                    <NavLink to="/error"></NavLink>
                </li>
                <li>
                    <NavLink to="/login"></NavLink>
                </li>
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  background-color: aqua;
  height: 100px;
  display: flex;
`

export default Header;