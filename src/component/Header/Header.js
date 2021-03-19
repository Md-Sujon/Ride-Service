import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


// import Rider from '../Rider/Rider';

import './Header.css'
const Header = () => {
    return (
        
        <div  className="header">
           
            <Link to="/Home">Home</Link>
            <Link to="/Destination">Destination</Link>
            <Link to="/Blog">Blog</Link>
            <Link to="/Contact">Contact</Link>
            <Button variant="danger"><Link to="/Login" className="">Login</Link></Button>{' '}
            
          
        
    {/* <h1>This is header</h1> */}
        </div>
    );
};

export default Header;