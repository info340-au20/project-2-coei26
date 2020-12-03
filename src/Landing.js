import React from 'react';
import { NavBar } from './navigation/NavBar.js'

export function LandingPage() {
    return (
        <div>
            <NavBar />
            <section class="greeting">
                <div class="intro">
                    <h1>Questions?</h1>
                    <p>
                    Don't hesitate to ask! Our advisors are here to help you as you navigate your undergraduate journey
                    here at the University of Washington. Click below to get started.
                    </p>
                </div>
            </section>
        </div>


    )
}