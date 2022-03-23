import React from 'react';
import './HomePage.css';
import { DropdownButton, Dropdown, ProgressBar, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Example from './offcanvas';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"




const HomePage = () => {
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
            <header className='HomePage-header'>
                <div style={{position:'absolute', top:100}}>
                    Current Goal
                    <h3 id='goals'>Current Goals</h3>
                </div>
                <div style={{position:'absolute', top: 250}}>Recommended Calorie Intake
                <h3>100 calories</h3>
                    </div>
                <div style={{position:'absolute', top: 400}}>Current Weight</div>
                <div style={{position:'absolute', top:550}}>
                    Progress
                    <ProgressBar now={60} label={`${60}%`} style={{maxWidth: 150}}/>
                    </div>
                    <div style={{position: 'absolute', top:475, left:865}}>
                    <Example/>
                    </div>
                    <div style={{position: 'absolute', top:545, left:865}}>
                        <Button variant="outline-primary" style={{color: '#61dafb', borderColor: '#61dafb'}}>Previous Workouts</Button>{' '}
                    </div>
                <div id='logo' style={{top:65, left: 650}}>
                    <img src="logo2.png" width={600} height={375} alt=''/>
                </div>
            </header>
            </div>
    );
};

export default HomePage;