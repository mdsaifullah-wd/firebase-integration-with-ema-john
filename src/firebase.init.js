// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCiHqaUqpkTsKeD8otp3065VBXW3r-GZ5c',
  authDomain: 'ema-john-firebase-auth-72748.firebaseapp.com',
  projectId: 'ema-john-firebase-auth-72748',
  storageBucket: 'ema-john-firebase-auth-72748.appspot.com',
  messagingSenderId: '426072348298',
  appId: '1:426072348298:web:f4c627628af1e6077dbf73',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
