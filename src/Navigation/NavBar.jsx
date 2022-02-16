import React, { useState } from "react";
import "./NavBar.css";
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
        <h4 className="home-button navbar-brand"><Link to="/home">Grouper</Link></h4>
        <NavbarToggler onClick={() => setNavExpand(!navExpand)} />
        <Collapse navbar isOpen={navExpand}>
          <Nav className="me-auto" navbar>
            <NavItem>
            <Link to="/profile">User Profile</Link>
            </NavItem>
            {/* <NavItem>
            <Link to="/group-calendars">Group Calendars</Link>
            </NavItem> */}
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Options
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem><Link to="/about">About Us</Link></DropdownItem>
                <DropdownItem><Link to="/contact">Contact Us</Link></DropdownItem>
                <DropdownItem type="submit"><a href="https://github.com/saifalushi1/grouper" target="_blank">Github</a></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
            <Link to="/">Sign-Out</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar;