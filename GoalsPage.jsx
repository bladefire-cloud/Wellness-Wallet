import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Goals.css';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import NavBar from '../components/NavBar';

const GoalsPage = () => {
    return (
        <div>
        <nav className='HomePage-navBar'>
            <div>NavBar</div>
            <div><Button>button</Button></div>
        </nav>
        <header>
        <div className='goals'>
            <div className="presentgoals">
            Present Goals
            </div>
            <div className="futuregoals">
            Future Goals
             </div>
        </div>
        </header>
        </div>
    );
};

export default GoalsPage;