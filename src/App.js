/* React and Firebase imports */ 
import { useEffect, useState } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

/* Components */
import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'
import AdvisingPage from './components/Advising';
import AboutPage from './components/About';
import { LandingPage } from './components/Landing';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

/* Styling */
import './styles/design.css';

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

    // auth state event listener
    useEffect(() => {
        const authUnregister = firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                setUser(user);
                setIsLoading(false);

            } else {
                setUser(null);
                setIsLoading(false);
            }
        })
        return function cleanup() { // when done loading
            authUnregister(); // unregister
        }
    }, []) // run on first load

    const handleSignOut = () => {
        setErrorMessage(null);
        firebase.auth().signOut()
    }

    if(isLoading) {
        return(
            <div className="text-center" style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                <i className="fa fa-spinner fa-spin fa-3x" aria-label="Connecting..."></i>
            </div>
        )
    }

    const renderAdvising = (routerProps) => {
        return <AdvisingPage {...routerProps} user={user}/>;
    }

    let content = null;
    if(!user) {
        content = (
            <div className="signUpPage">
                <h1><i className="fa fa-star"></i> Welcome to UW Undergraduate Advising! <i className="fa fa-star"></i> </h1>
                <h2>Sign Up or Log In Here:</h2>
                <div className="popup">
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
                            <div className="logOutContainer d-flex float-right">
                                <div className="float-right ">
                                    <h2 className="m-2">{user.displayName}</h2>
                                    <button className="btn btn-dark logOutBtn" onClick={handleSignOut}>Log Out</button>
                                </div>
                            </div>
                                <Switch>
                                    <Route exact path="/" component={LandingPage} />
                                    <Route path='/deptadvising' render={renderAdvising} />
                                    <Route path='/about' component={AboutPage} />
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