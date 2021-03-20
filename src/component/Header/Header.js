import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// import Rider from '../Rider/Rider';
import './Header.css'
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInuser,setLoggedInuser]=useContext(UserContext)
    return (
        
        <div  className="header">
           
            <Link to="/Home">Home</Link>
            <Link to="/Destination">Destination</Link>
            <Link to="/Blog">Blog</Link>
            <Link to="/Contact">Contact</Link>
            <Link>{loggedInuser.name}</Link>
            <Button variant="danger"><Link to="/Login" className="">Login</Link></Button>{' '}
            
            
          
        
    {/* <h1>This is header</h1> */}
        </div>
    );
};

export default Header;