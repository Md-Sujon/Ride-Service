import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// import Rider from '../Rider/Rider';
import './Header.css'
import { UserContext } from '../../App';

const Header = () => {
   
    const [loggedInuser,setLoggedInuser]=useContext(UserContext);
    return (
        
        <div  className="header">
            <Link to="/Home"><h1 className="Company_name">Dhaka Rider</h1></Link>
            <Link to="/Home">Home</Link>
            <Link to="/Destination/key">Destination</Link>
            <Link>{loggedInuser.name}</Link>
            <Button className="button" variant="danger"><Link to="/Login" >Login</Link></Button>{' '}
            
            
          
        
    {/* <h1>This is header</h1> */}
        </div>
    );
};

export default Header;