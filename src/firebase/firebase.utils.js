import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDFs5vbISTtLwhkdRZ4V0QhpdmwTd1jR1g",
    authDomain: "crown-db-6c414.firebaseapp.com",
    projectId: "crown-db-6c414",
    storageBucket: "crown-db-6c414.appspot.com",
    messagingSenderId: "117496897140",
    appId: "1:117496897140:web:5e2e0e96e17b3360aefb21"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogleMethod = () => auth.signInWithPopup(provider);

export default firebase;