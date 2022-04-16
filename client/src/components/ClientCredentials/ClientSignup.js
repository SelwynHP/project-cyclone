import styled from "styled-components";
import {useContext} from "react";
import {UserContext} from "../UserContext";
import ClientSignUpForm from "./ClientSignUpForm";
import ClientLoggedIn from "./ClientLoggedIn";

const ClientSignup = () => {
    const {loginState} = useContext(UserContext);
    return (
        <Wrapper>
            {loginState ?
                <ClientLoggedIn/> :
                <ClientSignUpForm/>}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2em;
  }

  form {
    margin: auto;
    border: 1px solid #8888;
    padding: 30px;
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`

export default ClientSignup;