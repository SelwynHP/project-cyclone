import styled from "styled-components";
import {useContext} from "react";
import ClientLoggedIn from "./ClientLoggedIn";
import ClientLoginForm from "./ClientLoginForm";
import {UserContext} from "../UserContext";

const ClientLogin = () => {
    const {loginState} = useContext(UserContext);

    return (
        <Wrapper>
            {loginState ?
                <ClientLoggedIn/> :
                <ClientLoginForm/>}
        </Wrapper>
    )
}

const Wrapper = styled.div`

`

export default ClientLogin;