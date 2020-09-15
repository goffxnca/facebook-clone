import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDwSQEGNUWug9VrWUaSK4gJ_NOOdr0LPYk",
  authDomain: "facebook-clone-52490.firebaseapp.com",
  databaseURL: "https://facebook-clone-52490.firebaseio.com",
  projectId: "facebook-clone-52490",
  storageBucket: "facebook-clone-52490.appspot.com",
  messagingSenderId: "423946566050",
  appId: "1:423946566050:web:a99d823798177d0c6f1afb",
};

const firebaseWebApp = firebase.initializeApp(firebaseConfig);
const db = firebaseWebApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
