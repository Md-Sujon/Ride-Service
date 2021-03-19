import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


const Home = (props) => {
    const {name,image}=props.Rider||{};
    // console.log(props);
    return (


        <div>
<Link to="/login">
       
        <div className='all'>
            
            <h1>{name}</h1>
               <img src={image} alt={" "}/>
              </div>
        </Link> 
</div>
        
    );
};

export default Home;