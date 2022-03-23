import { Button } from 'bootstrap';
import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className='HomePage-navBar'>
                    <div style={{position:'absolute', top:5, left: '43%'}}>
                        Wellness Wallet
                    </div>
                    <div>
                        <Link to="/userinfo" style={{position: 'absolute', left:300}}><Button 
                variant="outline-primary">User Info</Button></Link>
                        <Link to="/goals" style={{position: 'absolute', right:300}}><Button variant="outline-primary">Goals</Button></Link>
                </div>
                    <div className='icons'>
                    <DropdownButton id="dropdown-basic-button" title="Menu">
                    <Dropdown.Item>User Info</Dropdown.Item>
                    <Dropdown.Item>Goals</Dropdown.Item>
                    <Dropdown.Item>logout</Dropdown.Item>
                        </DropdownButton>
                    </div>
            </nav>
        </div>
    );
};

export default NavBar;