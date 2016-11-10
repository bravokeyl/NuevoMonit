import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyChkhG-yG8V1YQhIJuyCYbQ7u10-QHgBl8",
  authDomain: "nuevomonit.firebaseapp.com",
  databaseURL: "https://nuevomonit.firebaseio.com",
  storageBucket: "nuevomonit.appspot.com",
  messagingSenderId: "177534084474"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
