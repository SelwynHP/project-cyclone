import {createContext, useEffect, useState} from "react";
import {auth} from "./Firebase";
import {onAuthStateChanged} from "firebase/auth";

export const UserContext = createContext(null);
export const UserProvider = ({children}) => {
    const [loginState, setLoginState] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log("logged in!");
                console.log(user);
                setLoginState(user);
            } else {
                console.log("No user");
                setLoginState(null);
            }
        })
    }, [])

    return (
        <UserContext.Provider
            value={{
                loginState,
                setLoginState
            }}>
            {children}
        </UserContext.Provider>
    )
}