import {signOut} from "firebase/auth";
import {auth} from "../Firebase";
import styled from "styled-components";

const ClientLogOut = () => {
    const handleLogout = async () => {
        await signOut(auth);
    }
    return (
        <>
            <Logout onClick={() => handleLogout()}>Log Out</Logout>
        </>
    )
}

const Logout = styled.button`
  background-color: var(--dark-purple);
  color: var(--english-red);

  &:hover {
    cursor: pointer;
  }
`
export default ClientLogOut;