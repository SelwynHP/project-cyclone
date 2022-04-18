import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

export const formType = {
    "login": {
        "formTitle": "Login",
        "buttonTitle": "Login",
        "buttonFunction": signInWithEmailAndPassword,
    },
    "signup": {
        "formTitle": "Signup",
        "buttonTitle": "Signup",
        "buttonFunction": createUserWithEmailAndPassword,
    },
    "mLogin": {
        "formTitle": "Merchant Login",
        "buttonTitle": "Login",
        "buttonFunction": signInWithEmailAndPassword,
    },
    "mSignup": {
        "formTitle": "Merchant Signup",
        "buttonTitle": "Signup",
        "buttonFunction": createUserWithEmailAndPassword,
    }
}

export const ValidateNewMerchant = (merchant) => {
    return Object.values(merchant).every(field => {
        return field;
    })
}