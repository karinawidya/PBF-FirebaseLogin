import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAaL-ljjdf3afsrIEurwJZpgNQ-95C-Xdk",
    authDomain: "fir-login-51fb7.firebaseapp.com",
    databaseURL: "https://fir-login-51fb7.firebaseio.com",
    projectId: "fir-login-51fb7",
    storageBucket: "fir-login-51fb7.appspot.com",
    messagingSenderId: "290730485113",
    appId: "1:290730485113:web:6543df9449ac1e64063ba8",
    measurementId: "G-YW1FV12D51"
}

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;