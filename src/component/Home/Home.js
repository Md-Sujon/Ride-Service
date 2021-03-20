import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Home.css'



const Home = (props) => {
    const {name,photo}=props.Rider||{};
    const history=useHistory()
    // console.log(props);

    const handelClick=()=>{
      history.push('/destination')
    }
    return (
   
<div className="MainCard" onClick={handelClick}>

        {/* <Link to="/Login"> */}
            
           <div>
             <h1>{name}</h1>
               
               <img src={photo} alt=''/> 
                </div>
                {/* </Link> */}
            
               </div> 
    );
};

export default Home;