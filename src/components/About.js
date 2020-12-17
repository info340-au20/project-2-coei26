import React from 'react';
import '../styles/about.css';

// Render the about page.
function AboutPage() {
    return (
        <div className="d-flex row aboutContainer">
            <h1 className='aboutTitle'>About Our Website</h1>
            <p className='aboutDescr'>
                The University of Washington has a multitude of undergraduate schools and departments. Often times, students may experience difficulty 
                when they wish to schedule appointments with advisors for specific departments and explore different majors simultaneously. 
            </p>
            <p className='aboutDescr'>
                Through our web app, we hope to solve this issue by putting all of the University of Washington colleges/departments in one simple, but powerful page.
                Users can filter for advisor availability to plan their meetings with different advisors accordingly. Once students find departments they are interested
                in getting more information from, they can add the department to their favorites to reference later.
            </p>
            <p className='aboutDescr'>
                We hope that our simplistic web app will enable any undergaduate student to book advising appointments and have their questions answered
                in as few clicks as possible.
            </p>
        </div>

    )
}

export default AboutPage;