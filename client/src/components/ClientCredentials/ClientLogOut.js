import {signOut} from "firebase/auth";
import {auth} from "../Firebase";
import styled from "styled-components";

const ClientLogOut = () => {
    const handleLogout = async () => {
        await signOut(auth);
    }
    return (
        <Wrapper onClick={() => handleLogout()}>Log Out</Wrapper>
    )
}

const Wrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`
export default ClientLogOut;