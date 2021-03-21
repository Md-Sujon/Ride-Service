// import React, from 'react';
// import RiderData from '../../riderData.json'
import RiderData from '../fakeData/FackData'
import Home from '../Home/Home';
// import './Rider.css'

const Rider = () => {

    return (
        <div style={{display:'flex'}} >
            {
              RiderData.map(Rider => <Home Rider={Rider}></Home>) 
            }
        </div>
    );

        };
export default Rider;