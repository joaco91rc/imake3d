import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyA3z48BpYVleXje9aF4jv2645hQ3VW6FCA",
  authDomain: "imake3d-717b6.firebaseapp.com",
  projectId: "imake3d-717b6",
  storageBucket: "imake3d-717b6.appspot.com",
  messagingSenderId: "91619003354",
  appId: "1:91619003354:web:a7fd16368ca56ebd00cee3",
  measurementId: "G-TJZC82HFX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
