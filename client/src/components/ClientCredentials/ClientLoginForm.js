import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {auth} from "../Firebase";
import {useState} from "react";
import {firebaseErrorCodes, formErrorCodes} from "../../validation/error-codes";
import FormError from "../FormError";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

const ClientLoginForm = ({type}) => {
    const formType = {
        "login": {
            "formTitle": "Login",
            "buttonTitle": "Login",
            "buttonFunction": signInWithEmailAndPassword,
        },
        "signup": {
            "formTitle": "Signup",
            "buttonTitle": "Signup",
            "buttonFunction": createUserWithEmailAndPassword,
        }
    }
    const [error, setError] = useState(null);

    const handleLogin = async (ev) => {
        ev.preventDefault(); //Prevent page reloading
        //Retrieve values
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        //Validation
        if (!email) {
            setError(formErrorCodes["email"])
        } else if (!password) {
            setError(formErrorCodes["password"])
        }
        //Login
        if (email && password) {
            try {
                await formType[type].buttonFunction(auth, email, password);
            } catch
                (err) {
                setError(firebaseErrorCodes[err.code] ?? firebaseErrorCodes["unknown"]);
            }
        }
    }

    return (
        <Wrapper>
            <h1>{formType[type].formTitle}</h1>
            <form>
                <input id="email" type="text" placeholder="Email"/>
                <input id="password" type="password" placeholder="Password"/>
                <button onClick={(ev) => handleLogin(ev)}>{formType[type].buttonTitle}</button>
                {error &&
                    <FormError error={error}/>}
            </form>
            {type === "login" &&
                <>
                    <label htmlFor="signup">Don't have an account?</label>
                    <p>
                        Create one <NavLink id="signup" to="/signup">here!</NavLink>
                    </p>
                </>
            }
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

export default ClientLoginForm;