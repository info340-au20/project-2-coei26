import React, {useState} from 'react';
import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'
import { Dropdown, DropdownToggle, DropdownMenu, FormGroup, Input, Label}  from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { LandingPage } from './Landing';
import './index.css'

function App(props) {
    // Setting the states
    const [collegeData, setCollegeData] = useState(props.data.colleges);

    // Callback function for dealing with changes in slider window
    const handleChange = (numAvail) => {
        let newCollegeData = collegeData.map((college) => {
            let deptData = college.departments;
            let availableNow = 0;
            college['departments'] = deptData.map((dept) => {
                if (dept.availability >= numAvail) {
                    dept.show = true;
                    availableNow++;
                } else {
                    dept.show = false;
                }
                return dept;
            })
            college['availableNow'] = availableNow;
            return college;
        })
        setCollegeData(newCollegeData);
    }

    return (
        <div>
            <NavBar />
            <Router>
                <Switch>
                    <Route exact path="/home" component={LandingPage} />
                </Switch>
            </Router>
            <FavDropDown sliderCallBack={handleChange}/>
            <div className="container">
                <div className="standard-page">
                    <AllColleges data={collegeData}/>
                </div>
            </div>
            <Footer />
        </div>
     
    );
}

// All the colleges and their cards are processed inside this function
// Props - data -> {CollegeName - Array of {deptName, availibility}}
function AllColleges(props) {
    let filteredColleges = props.data.filter((college) => {
        return college.availableNow === undefined || college.availableNow > 0;
    })
    let mapAllColleges = filteredColleges.map((college) => {
        let deptArr = college.departments;
        return (<section className="college">
                    <div><h1>{college.college}</h1></div>
                    <div className="row">
                        <AllTiles list={deptArr}/>  
                    </div>
                </section>
        );
    });
    return (<div>
        {mapAllColleges}
    </div>)
}

function AllTiles(props) {
    let list = props.list.filter((dept) => {
        return dept['show'] === undefined || dept.show;
    });

    let mapAllTiles = list.map((deptInfo) => {
        let tileRender = (
            <div className="tile">
                <h2>{deptInfo.name}</h2>
                <div className="other-side">
                    <button type="button">Email</button>
                    <button type="button" className="favoritesButton" id={deptInfo.name} onclick="addNewFavorite(this.id)"><i className="far fa-star" aria-label="Add to Favorites" aria-hidden="true"></i></button>
                    <button type="button"><i className="fas fa-calendar-alt" aria-label="Schedule Appointment" aria-hidden="true"></i></button>
                </div>
            </div>
        )
        return tileRender;
    })

    return (
        <div>
            {mapAllTiles}
        </div>
    )
}

function FavDropDown(props) {
    return(
        <div className='container'>
            <div className='standard-page'>
                <div className="favAndDropdown">
                    <GetDropdown sliderCallBack={props.sliderCallBack}/>
                </div>
            </div>
        </div>
    )
}

function GetDropdown(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const changeData = (event) => {
        props.sliderCallBack(event.target.value);
    }

    return (
      <Dropdown direction="down" isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-bars"></i>
        </DropdownToggle>
        <DropdownMenu>
            <form className="px-4 py-3">
                <FormGroup>
                    <Label for="formControlRange">Filter by Advisors Available</Label>
                    <Input type="range" name="range" id="formControlRange" min="1" max="20"  onInput={changeData}/>
                </FormGroup>
                {/* <div className="dropdown-divider"></div>
                <div className="submit">
                    <button type="button" className="apply btn btn-primary">Apply</button>
                </div> */}
            </form>
        </DropdownMenu>
      </Dropdown>
    );
}

export default App;