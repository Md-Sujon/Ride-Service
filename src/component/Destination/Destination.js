import React from 'react';
import './Destination.css';
// import photo from 'images/map.png'
const Destination = () => {
    return (
        <div className="from">
            
            <div className="input">
               <h4>Pick From</h4>
               <from>
               <input className="inputbox" type="text" name="" id=""/>
               <h4>Pick To</h4>
               <input className="inputbox" type="text" name="" id=""/>
               <br/><br/>
               <button className="Searchbox">Search</button>
               </from>
            </div>
            <div className="map">
                 {/* <img src={photo} alt=""/> */}
            </div>
        </div>
    );
};

export default Destination;