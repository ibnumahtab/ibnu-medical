import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseInit = () => {
    initializeApp(firebaseConfig);
}

export default firebaseInit