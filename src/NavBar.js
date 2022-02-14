import React, { useState } from "react";
import "../src/NavBar.css";
import { Link } from "react-router-dom";
import { Navbar, 
    NavbarBrand,   
    NavbarToggler,   
    Collapse,  
    Nav,        
    NavItem,      
    UncontrolledDropdown,   
    DropdownToggle,   
    DropdownMenu,   
    DropdownItem,       } from "reactstrap";

const NavBar = () => {
    const [navExpand, setNavExpand] = useState(false)

  return (
    <div className="mainNavBar">
      <Navbar color="light" expand="md" light>
        <NavbarBrand className="home-button"><Link to="/home">Grouper</Link></NavbarBrand>
        <NavbarToggler onClick={() => setNavExpand(!navExpand)} />
        <Collapse navbar isOpen={navExpand}>
          <Nav className="me-auto" navbar>
            <NavItem>
            <Link to="/profile">User Profile</Link>
            </NavItem>
            <NavItem>
            <Link to="/group-calendars">Group Calendars</Link>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Options
              </DropdownToggle>
              <DropdownMenu end>
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