import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {formType, ValidateNewMerchant} from "../../validation/validation-utils";
import {auth} from "../Firebase";
import {deleteUser} from "firebase/auth";
import FormError from "../FormError";
import {useState} from "react";

const MerchantLogin = ({type}) => {
    const [error, setError] = useState(null);
    const handleMerchantSignup = async () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const merchant = {
            email: email,
            merchantName: document.getElementById("merchant-name").value,
            telephone: document.getElementById("telephone").value,
            bAddress: document.getElementById("billing-address").value,
            sAddress: document.getElementById("shipping-address").value,
            pNotes: document.getElementById("pickup-notes").value
        }

        if (ValidateNewMerchant(merchant)) {
            await formType[type].buttonFunction(auth, email, password)
                .then(() => {
                    return fetch("/api/create-merchant", {
                        method: "POST",
                        body: JSON.stringify(merchant),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                        .then(res => res.json())
                        .then(data => {
                            return data;
                        })
                        .catch(err => {
                            console.log(err.message);
                            deleteUser(auth.currentUser);
                        })
                })
                .catch(err => {
                    setError(err.message);
                })
        }
    }
    return (
        <Wrapper>
            <h1>{formType[type].formTitle}</h1>
            <form>
                <input id="email" type="text" placeholder="Email"/>
                <input id="password" type="password" placeholder="Password"/>
                {type === "mSignup" &&
                    <>
                        <input id="merchant-name" type="text" placeholder="Company Name"/>
                        <input id="telephone" type="text" placeholder="Telephone"/>
                        <input id="billing-address" type="text" placeholder="Billing Address"/>
                        <input id="shipping-address" type="text" placeholder="Shipping Address"/>
                        <input id="pickup-notes" type="text" placeholder="Pickup notes"/>
                    </>
                }
                <button onClick={(ev) => handleMerchantSignup(ev)}>{formType[type].buttonTitle}</button>
                {error &&
                    <FormError error={error}/>}
            </form>
            {type === "mLogin" &&
                <>
                    <label htmlFor="merchant-signup">Don't have a merchant account?</label>
                    <p>
                        Create one <NavLink id="merchant-signup" to="/signup/merchant">here!</NavLink>
                    </p>
                </>
            }
            {type === "mSignup" &&
                <>
                    <label htmlFor="merchant-signup">Already have a merchant account?</label>
                    <p>
                        Login <NavLink id="merchant-signup" to="/login/merchant">here!</NavLink>
                    </p>
                </>
            }
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