import styled from "styled-components";
import {useContext} from "react";
import ClientLoggedIn from "./ClientLoggedIn";
import ClientLoginForm from "./ClientLoginForm";
import {UserContext} from "../UserContext";

const ClientLogin = ({type}) => {
    const {loginState} = useContext(UserContext);

    return (
        <Wrapper>
            {loginState ?
                <ClientLoggedIn/> :
                <ClientLoginForm type={type}/>}
        </Wrapper>
    )
}

const Wrapper = styled.div`

`

export default ClientLogin;