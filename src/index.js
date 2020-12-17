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
    apiKey: "AIzaSyBcdu86r5WpPOz71ttVmUgQv4dcUrTZ9v0",
    authDomain: "uw-advising.firebaseapp.com",
    projectId: "uw-advising",
    storageBucket: "uw-advising.appspot.com",
    messagingSenderId: "364310305439",
    appId: "1:364310305439:web:efd2443660c1c87579e0aa",
    measurementId: "G-B70SFF0FQ7"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
