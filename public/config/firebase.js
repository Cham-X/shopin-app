// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARAuNwujyYb6i_de3SO0QSSQMUf_i9hxs",
  authDomain: "shopin-app-d5f9f.firebaseapp.com",
  projectId: "shopin-app-d5f9f",
  storageBucket: "shopin-app-d5f9f.appspot.com",
  messagingSenderId: "653562576496",
  appId: "1:653562576496:web:8ad1e753b8c7a8683abeb5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
