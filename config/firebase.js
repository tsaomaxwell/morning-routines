// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB5m91gPHSr5M70HdQxroIf13FzIJK0dWc",
    authDomain: "hoth2022-a3596.firebaseapp.com",
    projectId: "hoth2022-a3596",
    storageBucket: "hoth2022-a3596.appspot.com",
    messagingSenderId: "377115520800",
    appId: "1:377115520800:web:fe0102b84167cf63f83145",
    measurementId: "G-TDTSXX9CEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = firebase.storage();
