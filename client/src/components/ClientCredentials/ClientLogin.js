import styled from "styled-components";
import {NavLink} from "react-router-dom";

const ClientLogin = () => {
    return (
        <Wrapper>
            <h1>User Login</h1>
            <form>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Log In</button>
            </form>
            <label htmlFor="signup">Don't have an account?</label>
            <p>
                Create one <NavLink id="signup" to="/signup">here!</NavLink>
            </p>
            <label htmlFor="merchant">Are you a merchant?</label>
            <p>
                Use the merchant portal <NavLink id="merchant" to="/login/merchant">here!</NavLink>
            </p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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

export default ClientLogin;