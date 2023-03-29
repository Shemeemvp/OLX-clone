import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAKQW4WREeRLn0qIG3GxSXJFwFRMfXbYxM",
  authDomain: "olx-clone-react-86a74.firebaseapp.com",
  projectId: "olx-clone-react-86a74",
  storageBucket: "olx-clone-react-86a74.appspot.com",
  messagingSenderId: "1007698185535",
  appId: "1:1007698185535:web:65016865554310d136d78a",
  measurementId: "G-MRX4HNLWPN"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);