import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDyyNtlo4ERdrAvqdd2r125TZxAD22KK94",
    authDomain: "text-chat-app-7054c.firebaseapp.com",
    projectId: "text-chat-app-7054c",
    storageBucket: "text-chat-app-7054c.appspot.com",
    messagingSenderId: "143479841081",
    appId: "1:143479841081:web:7eff8160ca24ebd60c88e8"
  }).auth();