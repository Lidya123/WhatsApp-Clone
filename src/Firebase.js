import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBk8k4pGw_i-XfVV7syVzcNOEVkiOgfdSk",
    authDomain: "whats-app-clone-417ad.firebaseapp.com",
    projectId: "whats-app-clone-417ad",
    storageBucket: "whats-app-clone-417ad.appspot.com",
    messagingSenderId: "751515175050",
    appId: "1:751515175050:web:8fb5e71fcf99c59044c573"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db  = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); //for google authentication

export { auth, provider };
export default db;

//what is implicit and explicite export of const