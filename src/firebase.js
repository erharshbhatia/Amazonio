import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBIHggATMnYWgRQ3RxB6RTTO7jdj_dQEng",
    authDomain: "challenge-1432c.firebaseapp.com",
    databaseURL: "https://challenge-1432c.firebaseio.com",
    projectId: "challenge-1432c",
    storageBucket: "challenge-1432c.appspot.com",
    messagingSenderId: "356280785377",
    appId: "1:356280785377:web:cc8d71e9ec94a82e599aa0",
    measurementId: "G-GLYNRFY01B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};