import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DEPT_DATA from './data/dataNew.json';
import './design.css';

ReactDOM.render(<App data={DEPT_DATA}/>, document.getElementById('root'));
