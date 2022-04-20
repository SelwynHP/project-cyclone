import styled from "styled-components";
import ClientLogOut from "./ClientCredentials/ClientLogOut";
import {useContext} from "react";
import {UserContext} from "./UserContext";
import ClientLogin from "./ClientCredentials/ClientLogin";
import {NavLink} from "react-router-dom";

const ClientAccount = () => {
    const {loginState} = useContext(UserContext);
    return (
        <Wrapper>
            {loginState &&
                <SideBar>
                    <NavLink to="/tracking">Tracking</NavLink>
                    <NavLink to="/profile/client">Update Password</NavLink>
                </SideBar>
            }
            {loginState ?
                <>
                    <h1>User Credentials</h1>
                    <form>
                        <input id="firstName" type="text" placeholder="First Name"/>
                        <input id="lastName" type="text" placeholder="Last Name"/>
                        <input id="email" type="email" placeholder="Email Address"/>
                        <input id="telephone" type="tel" placeholder="Telephone Number"/>
                        <input id="bAddress" type="text" placeholder="Billing Address"/>
                        <input id="sAddress" type="text" placeholder="Shipping Address"/>
                        <input id="notes" type="text" placeholder="Delivery Notes"/>
                        <button>Update Information</button>
                    </form>
                    <ClientLogOut/>
                </> :
                <ClientLogin type="login"/>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;

  h1 {
    font-size: 23px;
    font-weight: bold;
  }
`

const SideBar = styled.div`
  width: 30%;
  height: 95vh;
  position: absolute;
  top: 60px;
  left: 0;
  background-color: var(--dark-sea-green);
  box-shadow: 10px -5px var(--dark-purple);

  & > a {
    display: flex;
    justify-content: center;
    background-color: var(--hunter-green);
    padding: 30px;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }
  }
`

export default ClientAccount;