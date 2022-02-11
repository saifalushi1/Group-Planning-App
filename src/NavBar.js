import React from "react";
import "../src/App.css";
import { Link } from "react-router-dom";
import { Navbar, 
    NavbarBrand,   
    NavbarToggler,   
    Collapse,  
    Nav,    
    NavLink,    
    NavItem,      
    UncontrolledDropdown,   
    DropdownToggle,   
    DropdownMenu,   
    DropdownItem,            
    NavbarText  } from "reactstrap";
import Profile from "./Profile";

const NavBar = () => {
  return (
    //    <div>
    //         <nav className="logo">
    //             <h1>Grouper</h1>
    //             <ul>
    //                 <li><Link to="/profile">User Profile</Link></li>
    //                 <li> <Link to="/my-calendar">My Calendar</Link></li>
    //                 <li><Link to="/group-calendars">Group Calendars</Link></li>
    //                 <li><Link to="/about">About Us</Link></li>
    //                 <li><Link to="/contact">Contact Us</Link></li>
    //                 <li><Link to="/github">GitHub</Link></li>
    //             </ul>
    //         </nav>
    //    </div>
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand><Link to="/home">Grouper</Link></NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
            <Link to="/profile">User Profile</Link>
            </NavItem>
            <NavItem>
            <Link to="/my-calendar">My Calendar</Link>
            </NavItem>
            <NavItem>
            <Link to="/group-calendars">Group Calendars</Link>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem><Link to="/about">About Us</Link></DropdownItem>
                <DropdownItem><Link to="/contact">Contact Us</Link></DropdownItem>
                <DropdownItem><Link to="/github">GitHub</Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;