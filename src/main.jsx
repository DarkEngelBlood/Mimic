import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAtzkfJuoQsTD-XLduPl75z_hoiFLbxVqA",
  authDomain: "mimic-products.firebaseapp.com",
  projectId: "mimic-products",
  storageBucket: "mimic-products.appspot.com",
  messagingSenderId: "176371886556",
  appId: "1:176371886556:web:2c6eb9f3ba80944d040719",
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
