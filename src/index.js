/* React and Firebase imports */
import React from 'react';
import ReactDOM from 'react-dom';

import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

/* Components */
import App from './App';

/* Styling */
import './styles/design.css';
import 'bootstrap/dist/css/bootstrap.css';



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
