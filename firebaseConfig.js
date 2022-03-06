import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA9cRa8mWBwWFENZoYXk5QXMsVE-14LvxQ",
    authDomain: "xpose254servers.firebaseapp.com",
    projectId: "xpose254servers",
    storageBucket: "xpose254servers.appspot.com",
    messagingSenderId: "907459763143",
    appId: "1:907459763143:web:7a63bf52255c8dc7d417e2",
    measurementId: "G-8PS09RF76V"
  };
    

  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
  } else {
    app = firebase.app();
  }
  
  const db = app.firestore();
 
  
  export { db };