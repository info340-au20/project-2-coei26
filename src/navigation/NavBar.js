import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

export function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-md-lg py-5">
                <li className="navList">
                    <span className="logo" aria-hidden="true">
                        &nbsp;
                    </span>
                    <a className="navbar-brand" href="landing.html">UW Undergraduate Advising</a>
                </li>
            </nav>
        </div>
    )
}
