import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBY2k3Fs8DwQfWX3w4XtGHBzaRS_7UzyPk",
    authDomain: "onlineshop-app-v1.firebaseapp.com",
    databaseURL: "https://onlineshop-app-v1.firebaseio.com",
    projectId: "onlineshop-app-v1",
    storageBucket: "onlineshop-app-v1.appspot.com",
    messagingSenderId: "398734112761",
    appId: "1:398734112761:web:139720a9c8d47a6a132f28",
    measurementId: "G-T0HVNR3TJD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };