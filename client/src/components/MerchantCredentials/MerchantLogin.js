import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {formType, ValidateNewMerchant} from "../../validation/validation-utils";
import {auth} from "../Firebase";
import {deleteUser} from "firebase/auth";
import FormError from "../FormError";
import {useEffect, useState} from "react";
import {firebaseErrorCodes, formErrorCodes} from "../../validation/error-codes";

const MerchantLogin = ({type}) => {
    const [error, setError] = useState(null);

    const handleMerchantLogin = async (ev) => {
        ev.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const merchant = {
            email,
            merchantName: document.getElementById("merchant-name")?.value,
            telephone: document.getElementById("telephone")?.value,
            bAddress: document.getElementById("billing-address")?.value,
            sAddress: document.getElementById("shipping-address")?.value,
            pNotes: document.getElementById("pickup-notes")?.value
        }
        console.log(merchant);
        //Validation
        if (!email) {
            setError(formErrorCodes["email"])
        } else if (!password) {
            setError(formErrorCodes["password"])
        }
        if (email && password) {
            if (type === "mSignup") {
                if (ValidateNewMerchant(merchant)) {
                    console.log("valid");
                    try {
                        const result = await formType[type].buttonFunction(auth, email, password);
                        console.log(result);
                        if (result) {
                            await fetch("/api/create-merchant", {
                                method: "POST",
                                body: JSON.stringify(merchant),
                                headers: {
                                    "Content-Type": "application/json",
                                },
                            })
                        }
                    } catch (err) {
                        await deleteUser(auth.currentUser);
                        setError(err.message());
                    }
                }
            } else if (type === "mLogin") {
                try {
                    await formType[type].buttonFunction(auth, email, password);
                } catch (err) {
                    console.log(err.code);
                    setError(firebaseErrorCodes[err.code] ?? firebaseErrorCodes["unknown"]);
                }
            }
        }
    }

    useEffect(() => {
        setError(null);
    }, [type]);

    return (
        <Wrapper>
            <h1>{formType[type].formTitle}</h1>
            <form>
                <input id="email" type="email" placeholder="Email"/>
                <input id="password" type="password" placeholder="Password"/>
                {type === "mSignup" &&
                    <>
                        <input id="merchant-name" type="text" placeholder="Company Name"/>
                        <input id="telephone" type="tel" placeholder="Telephone"/>
                        <input id="billing-address" type="text" placeholder="Billing Address"/>
                        <input id="shipping-address" type="text" placeholder="Shipping Address"/>
                        <input id="pickup-notes" type="text" placeholder="Pickup notes"/>
                    </>
                }
                <button onClick={(ev) => handleMerchantLogin(ev)}>{formType[type].buttonTitle}</button>
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
  margin: 15px 0;

  h1 {
    font-size: 23px;
    font-weight: bold;
  }
`
export default MerchantLogin;