// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSv4-Vte99SxTi8EBNx19Dqpe3vhUbwgs",
  authDomain: "budget-project-6f05e.firebaseapp.com",
  projectId: "budget-project-6f05e",
  storageBucket: "budget-project-6f05e.appspot.com",
  messagingSenderId: "442820261892",
  appId: "1:442820261892:web:fff544748e8995c2c41d51",
  measurementId: "G-QEED0WJ7QL"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase;