import React, { useEffect, useState } from 'react';
import RiderData from '../../riderData.json'
import Home from '../Home/Home';
import './Rider.css'

const Rider = () => {
    const [riders,setRider]=useState([]);

    useEffect(()=>{
           setRider(RiderData)
    },[])
        // console.log(riders);
    return (
        <div className="row" style={{display:'flex'}} >
            
            
            {
              riders.map(Rider=><Home Rider={Rider}></Home>) 
            }
        </div>
    );
};

export default Rider;