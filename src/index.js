import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LandingPage } from './Landing';
import DEPT_DATA from './data/data.json';

ReactDOM.render(<App data={DEPT_DATA}/>, document.getElementById('root'));
