import styled from "styled-components";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../Firebase";

const ClientSignUpForm = () => {
    const handleSignUp = async (ev) => {
        ev.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        await createUserWithEmailAndPassword(auth, email, password);
    }
    return (
        <Wrapper>
            <h1>SignUp</h1>
            <form>
                <input id="email" type="text" placeholder="Email"/>
                <input id="password" type="password" placeholder="Password"/>
                {/*<input id="firstname" type="text" placeholder="First Name" />*/}
                {/*<input id="lastname" type="text" placeholder="Last Name" />*/}
                {/*<input id="telephone" type="text" placeholder="Telephone" />*/}
                {/*<label>Billing Address</label>*/}
                {/*<input id="bStreetNumber" type="text" placeholder="Street Number" />*/}
                {/*<input id="bStreetName" type="text" placeholder="Street Name" />*/}
                {/*<input id="bPostalCode" type="text" placeholder="Postal Code" />*/}
                {/*<input id="bCity" type="text" placeholder="City" />*/}
                {/*<label>Shipping Address</label>*/}
                {/*<input id="sStreetNumber" type="text" placeholder="Street Number" />*/}
                {/*<input id="sStreetName" type="text" placeholder="Street Name" />*/}
                {/*<input id="sPostalCode" type="text" placeholder="Postal Code" />*/}
                {/*<input id="sCity" type="text" placeholder="City" />*/}

                <button onClick={(ev) => handleSignUp(ev)}>Sign Up</button>
            </form>
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

export default ClientSignUpForm;