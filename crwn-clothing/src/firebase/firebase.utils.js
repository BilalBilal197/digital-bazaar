import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA_0_hcBHbLwczKWtO3A1Cy7FPc4fta3B0",
  authDomain: "crwn-db-d98e8.firebaseapp.com",
  databaseURL: "https://crwn-db-d98e8.firebaseio.com",
  projectId: "crwn-db-d98e8",
  storageBucket: "crwn-db-d98e8.appspot.com",
  messagingSenderId: "408735175158",
  appId: "1:408735175158:web:ad0f1b88f158b76969f7d7",
  measurementId: "G-DKBZ0EES2R"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;