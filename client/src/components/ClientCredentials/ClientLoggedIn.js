import styled from "styled-components";
import {signOut} from "firebase/auth";
import {auth} from "../Firebase";

const ClientLoggedIn = () => {
    const handleLogout = async () => {
        await signOut(auth);
    }
    return (
        <Wrapper>
            <h1>You are logged in!</h1>
            <button onClick={() => handleLogout()}>Log out</button>
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
    margin: 15px 0;
  }

  button {
    background-color: var(--dark-purple);
    color: var(--english-red);

    &:hover {
      cursor: pointer;
    }
  }
`

export default ClientLoggedIn;