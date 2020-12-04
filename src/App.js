import React from 'react';
import Example, { NavBar } from './navigation/NavBar.js'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

function App() {
    return (
        <Router>
            <div>
                <Example />
            </div>
        </Router>
    )
}

export default App;