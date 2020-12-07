import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, FormGroup, Input, Label}  from 'reactstrap';
import './index.css'

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
    let filteredColleges = props.data.filter((college) => {
        return college.availableNow === undefined || college.availableNow > 0;
    })
    let mapAllColleges = filteredColleges.map((college) => {
        return <College key={college.college} college={college} />;
    });
    return (<div>
        {mapAllColleges}
    </div>)
}

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

function AllTiles(props) {
    let list = props.list.filter((dept) => {
        return dept['show'] === undefined || dept.show;
    });

    let mapAllTiles = list.map((deptInfo) => {
        return <Tile key={deptInfo.name} deptInfo={deptInfo} />;
    })

    return (
        <div>
            {mapAllTiles}
        </div>
    )
}

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
                    <Input type="range" name="range" id="formControlRange" min="1" max="20" onInput={changeData}/>
                </FormGroup>
            </form>
        </DropdownMenu>
      </Dropdown>
    );
}

export default AdvisingPage;