import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDnE-FUOfFQozrWHIsLsrUeuJJuYo3vLtk",
  authDomain: "availplasma.firebaseapp.com",
  projectId: "availplasma",
  storageBucket: "availplasma.appspot.com",
  messagingSenderId: "76551403257",
  appId: "1:76551403257:web:ec19d5cd08a954121a1428",
  measurementId: "G-YGCFK0EN6R",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialisaion error", err.stack);
  }
}

const fire = firebase;
export default fire;
