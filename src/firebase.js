import firebase from "firebase/app"
import 'firebase/firestore';
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCEoqyn498pxOGGGdMiKNmKAUsPECyrBPg",
    authDomain: "react-task4.firebaseapp.com",
    projectId: "react-task4",
    storageBucket: "react-task4.appspot.com",
    messagingSenderId: "748488455423",
    appId: "1:748488455423:web:9d5599c9c51a6cab1708ca"
})

const db = app.firestore();
const auth = app.auth()

export {db , auth};
export default app
