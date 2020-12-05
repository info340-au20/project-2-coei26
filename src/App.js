import React, {useState} from 'react';
import NavBar from './navigation/NavBar.js'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Navbar, Dropdown, DropdownToggle, DropdownMenu, DropdownItem}  from 'reactstrap';

// function App() {
//     return (
//         <Router>
//             <div>
//                 <Example />
//             </div>
//         </Router>
//     )
// }

function App(props) {
    // Map -> {CollegeName - Array of {deptName, availibility}}
    let mappingData = {};
    
    // Mapping function
    function mappingFunction(obj) {
        let keyArr = Object.keys(mappingData);
        let collegeName = obj.college;

        if (keyArr.indexOf(collegeName) == -1) {
            mappingData[collegeName] = []; // new key with a new list
        }
        let dept = {
            "name": obj.name,
            "availability": obj.availability
        };
        mappingData[collegeName].push(dept);
    }

    // Departments
    let departments = props.data.departments;

    // Populate the mapping data
    for (let i = 0; i < departments.length; i++) {
        mappingFunction(departments[i]);
    }

    return (
        <div>
            <Navbar />
            <FavDropDown />
            <div className="container">
                <div className="standard-page">
                    <AllColleges map={mappingData}/>
                </div>
            </div>
        </div>
     
    );
}

// All the colleges and their cards are processed inside this function
// Props - Map -> {CollegeName - Array of {deptName, availibility}}
function AllColleges(props) {
    let collegeMap = Object.keys(props.map); // Array of collegeNames

    let mapAllColleges = collegeMap.map((college) => {
        let deptArr = props.map[college];
        return (<section className="college">
                    <div><h1>{college}</h1></div>
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
    let list = props.list;

    let mapAllTiles = list.map((deptInfo) => {
        return (
            <div class="tile">
                <h2>{deptInfo.name}</h2>
                <div class="other-side">
                    <button type="button">Email</button>
                    <button type="button" class="favoritesButton" id={deptInfo.name} onclick="addNewFavorite(this.id)"><i class="far fa-star" aria-label="Add to Favorites" aria-hidden="true"></i></button>
                    <button type="button"><i class="fas fa-calendar-alt" aria-label="Schedule Appointment" aria-hidden="true"></i></button>
                </div>
            </div>
        )
    })

    return (
        <div>
            {mapAllTiles}
        </div>
    )
}

function FavDropDown() {
    return (<div className="favAndDropdown">
                <GetDropdown />
            </div>);
}

function GetDropdown() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
  
    return (
      <Dropdown direction="down" isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-bars"></i>
        </DropdownToggle>
        <DropdownMenu>
            <form className="px-4 py-3">
                <div className="form-group">
                    <label for="formControlRange">Filter by Minimum Advisors Available</label>
                    <input type="range" className="form-control-range custom-range" min="1" max="20" value="1" id="formControlRange" oninput="num.value=formControlRange.value"/>
                    <output name="num" id="num" for="formControlRange">1</output>
                </div>
                <div className="dropdown-divider"></div>
                <div className="submit">
                    <button type="button" className="apply btn btn-primary">Apply</button>
                </div>
            </form>
        </DropdownMenu>
      </Dropdown>
    );
}

/*<div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" id="dropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="dropdown-menu">
                        <form class="px-4 py-3">
                            <div class="form-group">
                                <label for="formControlRange">Filter by Minimum Advisors Available</label>
                                <input type="range" class="form-control-range custom-range" min="1" max="20" value="1" id="formControlRange" oninput="num.value=formControlRange.value">
                                <output name="num" id="num" for="formControlRange">1</output>
                            </div>
                            <div class="dropdown-divider"></div>
                            <div class="submit">
                                <button type="button" class="apply btn btn-primary">Apply</button>
                            </div>
                        </form>
                    </div>
                </div>
                */

export default App;