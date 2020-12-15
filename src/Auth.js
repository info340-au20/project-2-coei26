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
            <div>
                <div className="ml-4">
                    <h2>Account</h2>
                </div>
                <div>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                </div>
            </div>  
        );
    }
    else {
        content = (
            <div>
                {/* insert favorites page view */}
                {user &&
                    <div>
                        <div className="ml-4">
                            <h2>{user.displayName}</h2>
                        </div>
                        <button className="btn btn-dark ml-5" onClick={handleSignOut}>
                            Log Out
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