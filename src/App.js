import React, {useState} from 'react';
import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { LandingPage } from './Landing';
import AdvisingPage from './Advising';

function App(props) {

    const renderAdvisingPage = (routerProps) => {
        return <AdvisingPage {...routerProps} data={props.data} />
    }

    return (
        <Router>
            <div>
                <NavBar />
                    <Switch>
                        <Route exact path="/home" component={LandingPage} />
                        <Route path='/deptadvising' render={renderAdvisingPage} />
                    </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;