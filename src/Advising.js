import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, FormGroup, Input, Label}  from 'reactstrap';
import './index.css'

// The main function handling all the advising page logic
function AdvisingPage(props) {
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
            <FavDropDown sliderCallBack={handleChange}/>
            <div className="container">
                <div className="standard-page">
                    <AllColleges data={collegeData}/>
                </div>
            </div>
        </div>
    )
}

// All the colleges and their cards are processed inside this function
// Props - data -> {CollegeName - Array of {deptName, availibility}}
function AllColleges(props) {
    // Filter all the colleges based on slider window input
    let filteredColleges = props.data.filter((college) => {
        return college.availableNow === undefined || college.availableNow > 0;
    })

    // Get a list of college content
    let mapAllColleges = filteredColleges.map((college) => {
        return <College key={college.college} college={college} />;
    });

    // Return all the college content
    return (<div>
        {mapAllColleges}
    </div>)
}

// Renders the content for a single college
function College(props) {
    let college = props.college;
    let deptArr = college.departments;
    return (<section className="college">
                <div><h1>{college.college}</h1></div>
                <div className="row">
                    <AllTiles key={college.college} list={deptArr}/>  
                </div>
            </section>);
}

// Renders all the tiles which are information about all the 
// departments within the college
function AllTiles(props) {
    // Filter the colleges based on slider window input
    let list = props.list.filter((dept) => {
        return dept['show'] === undefined || dept.show;
    });

    // Get a list of tiles and delegate the tile rendering to another
    // component
    let mapAllTiles = list.map((deptInfo) => {
        return <Tile key={deptInfo.name} deptInfo={deptInfo} />;
    })

    // Render the list
    return (
        <div>
            {mapAllTiles}
        </div>
    )
}

// Render a single department tile
function Tile(props) {
    let deptInfo = props.deptInfo;
    return (<div className="tile">
                <h2>{deptInfo.name}</h2>
                <div className="other-side">
                    <button type="button">Email</button>
                    <button type="button" className="favoritesButton" id={deptInfo.name}><i className="far fa-star" aria-label="Add to Favorites" aria-hidden="true"></i></button>
                    <button type="button"><i className="fas fa-calendar-alt" aria-label="Schedule Appointment" aria-hidden="true"></i></button>
                </div>
            </div>);
}

// Render the dropdown button content which consists of the
// slider window
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

// Renders the content for dropdown and handles the change in
// slider window through callback function passed as prop
function GetDropdown(props) {
    // States for the dropdown
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    // Callback function for handling the change in input for
    // slider window
    const changeData = (event) => {
        props.sliderCallBack(event.target.value);
    }

    // Render the dropdown content
    return (
      <Dropdown direction="down" isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret aria-expanded="false">
            <i className="fas fa-bars"></i>
        </DropdownToggle>
        <DropdownMenu>
            <form className="px-4 py-3">
                <FormGroup>
                    <Label for="formControlRange">Filter by Advisors Available</Label>
                    <Input type="range" name="range" id="formControlRange" min="1" max="20" value="1" onChange={changeData} />
                </FormGroup>
            </form>
        </DropdownMenu>
      </Dropdown>
    );
}

// Export the main advising page function to main app
export default AdvisingPage;