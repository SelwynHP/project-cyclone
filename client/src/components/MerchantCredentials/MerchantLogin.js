import {NavLink} from "react-router-dom";
import styled from "styled-components";

const MerchantLogin = () => {
    return (
        <Wrapper>
            <h1>Merchant Login</h1>
            <form>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Log In</button>
            </form>
            <label htmlFor="merchant-signup">Don't have a merchant account?</label>
            <p>
                Create one <NavLink id="merchant-signup" to="/signup/merchant">here!</NavLink>
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
export default MerchantLogin;