import {initializeApp} from "firebase/app";
import {connectAuthEmulator, getAuth, signInWithEmailAndPassword} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBgkw3-kpFpFC2nuiM2t5GcnCNLUmegVr0",
    authDomain: "project-cyclone-2509d.firebaseapp.com",
    projectId: "project-cyclone-2509d",
    storageBucket: "project-cyclone-2509d.appspot.com",
    messagingSenderId: "388954355401",
    appId: "1:388954355401:web:3d968c1bf32830287cff18",
    measurementId: "G-6E8JTQJWNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:9099");

export const loginEmailPassword = async (loginEmail, loginPassword) => {
    return await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
}