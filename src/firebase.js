import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyARPgb9XmAw7xo3mJtE76__SXDmGgKrTc4",
    authDomain: "clone-15089.firebaseapp.com",
    projectId: "clone-15089",
    storageBucket: "clone-15089.appspot.com",
    messagingSenderId: "128864407321",
    appId: "1:128864407321:web:4f6244794196b978fc7f88",
    measurementId: "G-WCXXJS5C83"

});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {db, auth};