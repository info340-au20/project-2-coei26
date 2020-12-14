import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './design.css';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.css';
import 'firebase/auth'; 


const firebaseConfig = {
    apiKey: "AIzaSyAZuNjkpLbSBbYFom7yhSbsrnURUeFy9Gk",
    authDomain: "uw-undegraduate-advising.firebaseapp.com",
    projectId: "uw-undegraduate-advising",
    storageBucket: "uw-undegraduate-advising.appspot.com",
    messagingSenderId: "775975209402",
    appId: "1:775975209402:web:1d79f2cb12612326f2b583",
    measurementId: "G-L9YEWLPSSK"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
