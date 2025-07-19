import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCJ_odXzgYpqAZ6XXCKQAqXz5H6hPt5KW4",
  authDomain: "easyrytads-51215.firebaseapp.com",
  projectId: "easyrytads-51215",
  storageBucket: "easyrytads-51215.appspot.com",  // Fixed storage bucket format
  messagingSenderId: "1049604464645",
  appId: "1:1049604464645:web:0099efb5fe3fe2d074fc6c",
  measurementId: "G-F1EVH14TRG",
  databaseURL: "https://easyrytads-51215-default-rtdb.firebaseio.comcs",  // Removed trailing slash
};

export const app =  initializeApp(firebaseConfig);