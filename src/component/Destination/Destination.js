import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
// import { UserContext } from '../../App';
import Data from '../../component/fakeData/FackData'
// import Data from '../fakeData/Data.json'

import './Destination.css';
// import photo from 'images/map.png'
const Destination = () => {
let {key}=useParams();
 
 const [pickUpPoint,setPickUpPoint]=useState('');
 const [targetPoint,setTargetPoint]=useState(`onBlur={handleBlur}`)
//  const [loggedInUser,setLoggedInUser]=useContext(UserContext);
//  console.log(loggedInUser);
 const transportDetails=Data.find(data=>data.key == key);
 console.log(transportDetails);
//  const {price}=transportDetails;
//  console.log(transportDetails);



//  const handleSubmit=(e)=>{
//     document.getElementById('mainForm');
//     document.getElementById('destinationCard');
//     e.preventDefault();
//  }

 const handleBlur=(e)=>{
         if(e.target.name === "pickup"){
         setPickUpPoint(e.target.value)
         console.log(e.target.value);
     }
     if(e.target.name === "destination"){
         setTargetPoint(e.target.value)
     }
 }


    return (
        <div className="from">
            <div className="input">
               <h4>Pick From</h4>
               <from action="">
            
               <input className="inputbox" type="text"  onBlur={handleBlur} placeholder="mirpur" name="" id=""/>
               <h4>Pick To</h4>
               <input className="inputbox" type="text"  onBlur={handleBlur} placeholder="Danmondi" name="" id=""/>
               <br/><br/>
               {/* <button className="Searchbox"  onClick={handleSubmit}>Search</button> */}
               </from>

<div id="destinationCard">
    <div className="pick">
        <h3>Pick Up Point:{pickUpPoint}</h3>
        <h3>Name:{key}</h3>
    </div>
    <div className="vehicles">

        <div className="vehicle">
            <div className="image">
                <img src={''}  alt = ""/>
            </div>
            <div className="quantity">
                <p>{''}</p>
            </div>
            <div className="price">
             <p>{''}</p>
            </div>
        </div>


        <div className="vehicle">
            <div className="image">
                <img src={''}  alt = ""/>
            </div>
            <div className="quantity">
                <p>{''}</p>
            </div>
            <div className="price">
             <p>{''}</p>
            </div>
        </div>

        <div className="vehicle">
            <div className="image">
                <img src={''}  alt = ""/>
            </div>
            <div className="quantity">
                <p>{''}</p>
            </div>
            <div className="price">
             <p>{''}</p>
            </div>
        </div>


        
    </div>

</div>
</div>
            <div className="map">
                 {/* <img src={photo} alt=""/> */}
            </div>
        </div>
    );
    };

export default Destination;