import firebase from "firebase/app"
import  "firebase/firestore"
import   "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBbZFql8gnarvFn3IcsivXdH9MKmtqrDVQ",
    authDomain: "fintrack-74c5a.firebaseapp.com",
    projectId: "fintrack-74c5a",
    storageBucket: "fintrack-74c5a.appspot.com",
    messagingSenderId: "914692891141",
    appId: "1:914692891141:web:35789d7560fe0c61e3726c"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig)

  //initialize service
  const projectFirestore= firebase.firestore()

  const projectAuth = firebase.auth()

  //timestamp
  const timestamp = firebase.firestore.Timestamp

  export {projectFirestore, projectAuth, timestamp}