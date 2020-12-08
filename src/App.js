import React from 'react';
import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { LandingPage } from './Landing';
import AdvisingPage from './Advising';

// Combine all the logic for Landling, Advising and Navbar components
// Also passes the data as props to advising page for rendering
function App(props) {
    return (
        <Router>
            <NavBar />
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path='/deptadvising' component={AdvisingPage} />
                    <Route path='/home' component={LandingPage} />
                    <Redirect to="/"></Redirect>
                </Switch>
            <Footer />
        </Router>
    );
}

export default App;