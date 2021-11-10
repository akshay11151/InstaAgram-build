// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
import {getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoLLNt6zBKtJOHJbdQAX6Z7ShfuLNhppc",
  authDomain: "insta-att2.firebaseapp.com",
  projectId: "insta-att2",
  storageBucket: "insta-att2.appspot.com",
  messagingSenderId: "165693934156",
  appId: "1:165693934156:web:cb9561da4482a76f6042e9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();

const storage = getStorage();

export {app, db, storage};