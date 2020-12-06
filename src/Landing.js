import React from 'react';
import './landing.css';

export function LandingPage() {
    return (
        <div>
            <body className="body">
                <section className="greeting">
                    <div className="intro">
                        <h1>Questions?</h1>
                        <p>
                        Don't hesitate to ask! Our advisors are here to help you as you navigate your undergraduate journey
                        here at the University of Washington. Click below to get started.
                        </p>
                    </div>
                </section>
                <PageOptions />
                <section className="Spotlight">
                    <div className="blurb">
                        <h1>Advisor Spotlight:</h1>
                        <h2>Joslin Boroughs</h2>
                        <div className="subtitle">
                            <p>Associate Director, Mary Gates Hall</p>
                        </div>
                        <AdvisorSpotlightContent />
                    </div>
                </section>
            </body>
        </div>

    )
}

function PageOptions() {
    return (
        <div>
            <div className="img-container">
                <div className="click">
                    <img className="img-fluid mx-auto" src="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/5/2020/02/12212857/190226_MaryGatesHall_BryanNakata-16-web-750x500.jpg"
                    alt="A building at University of Washington" />
                    <a className="mx-auto" href="https://www.washington.edu/uaa/advising/" target="_blank">General Advising</a>
                </div>
                <div className="click">
                    <img className="img-fluid mx-auto" src="https://i.pinimg.com/originals/33/5f/8f/335f8f1e1c6916676af731517509834b.jpg"
                    alt="The Quad at UW." />
                    <a className="mx-auto" href="index.html">Departmental Advising</a>
                </div>
                <div className="click">
                    <img className="img-fluid mx-auto" src="https://honors.uw.edu/wp-content/uploads/2018/08/Suzzalo_Library_inside.jpg"
                    alt="Suzzalo Library" />
                    <a className="mx-auto" href="https://www.washington.edu/uaa/advising/academic-planning/plan-your-degree/" target="_blank">Academic Planning</a>
                </div>
            </div>
        </div>
    )
}

function AdvisorSpotlightContent() {
    return (
        <div>
            <div className="content">
                <div className="advisor">
                    <img className= "img-fluid mx-auto" src="https://www.washington.edu/uaa/advising/site/assets/files/6266/joslingood-1.283x365.jpg"
                    alt="General Advisor Joslin Boroughs" />
                </div>
                <div className="description">
                    <p>I began my undergraduate degree at UC Santa Barbara completely undecided about what I wanted to study.
                        Eventually I settled on Sociology and later, after work and volunteer experience, I went on to pursue my Master’s in Public Administration here at the UW.
                        I have been working to support students’ educational aspirations and dreams since 2006. I didn’t always know that I wanted to be an advisor, 
                        but through my education and experiences I found a love for supporting people as they navigate college and make meaning of their education. 
                        I look forward to working with you as you explore your own interests and curiosities and gain important experiences that will help you achieve your goals 
                        and become the person you want to be.</p>
                </div>
            </div>
        </div>
    )
}