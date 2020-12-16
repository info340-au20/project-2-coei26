import React from 'react';
import './about.css'

// Render the about page.
function AboutPage() {
    return (
        <div>
            <h1 className='aboutTitle'>About Our Page</h1>
            <p className='aboutDescr'>
                The University of Washington has a multiple of undergraduate schools and departments. Many times, it is hard for students to find out
                which advisng they should visit because they are unsure of how many advisors are available.
            </p>
            <p className='aboutDescr'>
                Through our web app, we hope to solve this issue by putting all of the colleges/departments on one page. We allow for users to filter by
                advisor availability so that they can plan their meeting with advisors accordingly. Once they have found departments they are interested
                in getting more information from, they can add it to their favorites for reference later.
            </p>
            <p className='aboutDescr'>
                We hope that our simplistic web app will enable any undergaduate student to book advising appointments and have their questions answered
                in as few clicks as possible.
            </p>
        </div>

    )
}

export default AboutPage;