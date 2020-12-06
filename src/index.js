import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css'; // changed name to landing.css this only in Landing.js
import App from './App';
import { LandingPage } from './Landing';
import DEPT_DATA from './data/dataNew.json';
import './design.css';

ReactDOM.render(<App data={DEPT_DATA}/>, document.getElementById('root'));
