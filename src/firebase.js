import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB0HdtwdV5Ukz_EAKvbNQJaJkRD6qR2fMA",
  authDomain: "sign-up-sheet-b3e57.firebaseapp.com",
  databaseURL: "https://sign-up-sheet-b3e57.firebaseio.com",
  projectId: "sign-up-sheet-b3e57",
  storageBucket: "sign-up-sheet-b3e57.appspot.com",
  messagingSenderId: "198490522301"
};

firebase.initializeApp(config);

export default firebase;
