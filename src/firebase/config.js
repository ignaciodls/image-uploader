// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJS70LSQPA0woWfapbNKMyPYoXsoWg71o",
  authDomain: "image-uploader-ae56a.firebaseapp.com",
  projectId: "image-uploader-ae56a",
  storageBucket: "image-uploader-ae56a.appspot.com",
  messagingSenderId: "538013909192",
  appId: "1:538013909192:web:c2842fbb8c419c33ba25fd",
  measurementId: "G-BJYNRW8W28"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export {
    app
}