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
export default function Account(props) {
    const isLoading = props.isLoading;
    const user = props.user;
    const errorMessage = props.errorMessage;

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
                        <button className="btn btn-dark ml-5" onClick={props.handleSignOut}>
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