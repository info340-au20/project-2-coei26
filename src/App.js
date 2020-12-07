import React from 'react';
import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LandingPage } from './Landing';
import AdvisingPage from './Advising';

// Combine all the logic for Landling, Advising and Navbar components
// Also passes the data as props to advising page for rendering
function App(props) {

    const renderAdvisingPage = (routerProps) => {
        return <AdvisingPage {...routerProps} data={props.data} />
    }

    return (
        <Router>
            <NavBar />
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path='/deptadvising' render={renderAdvisingPage} />
                    <Route path='/home' component={LandingPage} />
                </Switch>
            <Footer />
        </Router>
    );
}

export default App;