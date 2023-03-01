import { initializeApp} from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyButKapqute0-39o7w2nHOliEdvP4Y5lcs",
  authDomain: "funroom-app.firebaseapp.com",
  projectId: "funroom-app",
  storageBucket: "funroom-app.appspot.com",
  messagingSenderId: "849525609552",
  appId: "1:849525609552:web:9ef04a24fabc6d6149ad55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)