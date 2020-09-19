import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCE_Qpeu3zKXQX9dfnQhtYCnS_vw4je1h4",
  authDomain: "clothing-ecommerce-81cb2.firebaseapp.com",
  databaseURL: "https://clothing-ecommerce-81cb2.firebaseio.com",
  projectId: "clothing-ecommerce-81cb2",
  storageBucket: "clothing-ecommerce-81cb2.appspot.com",
  messagingSenderId: "355437165864",
  appId: "1:355437165864:web:7f85e9d9fba84474f8641d",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GithubAuthProvider();
provider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;