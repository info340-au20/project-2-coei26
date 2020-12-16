// import React, { useState, useEffect, WelcomeHeader } from 'react';
import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { LandingPage } from './Landing';
import firebase from 'firebase';
import AdvisingPage from './Advising';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useEffect, useState } from 'react';
import './design.css';

// Firebase UI configuration.
const uiConfig = {
    signInOptions: [{
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requiredDisplayName: true
    }],
    credentialHelper: 'none',
    signInFlow: 'popup',
    callbacks: { signInSuccessWithAuthResult: () => false, 
    },
};


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

    const handleSignOut = () => {
        setErrorMessage(null);
        setLoggedIn(false);
        firebase.auth().signOut()
    }

    if(isLoading) {
        return(
            <div className="text-center">
                <i className="fa fa-spinner fa-spin fa-3x" aria-label="Connecting..."></i>
            </div>
        )
    }

    // console.log(user);
    const renderAdvising = (routerProps) => {
        return <AdvisingPage {...routerProps} user={user}/>;
    }

    let content = null;
    if(!user) {
        content = (
            <div className='signUpPage'>
                <h2>Sign Up/Log In</h2>
                <div>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                </div>
            </div>  
        );
    }
    else {
        content = (
            <div>
                {user &&
                    <div>
                        <Router>
                            <NavBar />
                            <button className="btn btn-dark logOutBtn" onClick={handleSignOut}>Log Out {user.displayName}</button>
                                <Switch>
                                    <Route exact path="/" component={LandingPage} />
                                    <Route path='/deptadvising' render={renderAdvising} />
                                    <Route path='/home' component={LandingPage} />
                                    <Redirect to="/"></Redirect>
                                </Switch>
                            <Footer />
                        </Router>
                    </div>
                }
            </div>
        )
    }

    return (
        <div>
            {errorMessage &&
                <p className="alert alert-danger">{errorMessage}</p>
            }
            {content}
        </div>
    );
}

export default App;