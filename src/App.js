// import React, { useState, useEffect, WelcomeHeader } from 'react';
import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'
import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom'
import { LandingPage } from './Landing';
import firebase from 'firebase';
import AdvisingPage from './Advising';
import Account from './Auth';
import { useEffect, useState } from 'react';
// Combine all the logic for Landling, Advising and Navbar components
// Also passes the data as props to advising page for rendering
export function App(props) {
    const [errorMessage, setErrorMessage] = useState(undefined);
    const[user, setUser] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);

    // auth state event listener
    useEffect(() => {
        const authUnregister = firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                setUser(user);
                setIsLoading(false);
                setLoggedIn(true);
            } else {
                setUser(null);
                setIsLoading(false);
                setLoggedIn(false);
            }
        })
        return function cleanup() { // when done loading
            authUnregister(); // unregister
        }
    }, []) // run on first load

    // console.log(firebase.database().ref('people'));
    const handleSignOut = () => {
        setErrorMessage(null);
        setLoggedIn(false);
        firebase.auth().signOut()
    }

    // console.log(user);
    const renderAdvising = (routerProps) => {
        return <AdvisingPage {...routerProps} handleSave={handleSave} user={user}/>;
    }

    const handleSave = () => {
        if (!loggedIn) {
            console.log("dfbjbfj");
            return <Redirect to="/account" render={renderAdvising}/>
        }
    }

    const renderAuthentication = (routerProps) => {
        return <Account {...routerProps} errorMessage={errorMessage} user={user} isLoading={isLoading} handleSignOut={handleSignOut}/>;
    }

    return (
        <Router>
            <NavBar />
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path='/deptadvising' render={renderAdvising} />
                    <Route path='/home' component={LandingPage} />
                    <Route path='/account' render={renderAuthentication} />
                    <Redirect to="/"></Redirect>
                </Switch>
            <Footer />
        </Router>
    );
}

export default App;