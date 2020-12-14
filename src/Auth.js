import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { useEffect, useState } from 'react';

const uiConfig = {
    signInOptions: [{
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requiredDisplayName: true
    }],
    credentialHelper: 'none',
    signInFlow: 'popup',
    callbacks: { signInSuccessWithAuthResult: () => false, },
};

// account page for user login/signup, saved favorites
export default function Account() {
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
            <div className="text-center">
                <i className="fa fa-spinner fa-spin fa-3x" aria-label="Connecting..."></i>
            </div>
        )
    }

    let content = null;
    if(!user) {
        content = (
            <div className="container">
                <h1>Account</h1>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        );
    }
    else {
        content = (
            <div>
                {/* insert favorites page view */}
                {user &&
                    <div className="container">
                        <button className="btn btn-dark" onClick={handleSignOut}>
                            Log Out {user.displayName}
                        </button>
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