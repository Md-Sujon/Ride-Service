import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css'


const Home = (props) => {
    const {name,photo}=props.Rider||{};
    const history=useHistory()
    // console.log(props);

    const handelClick=()=>{
      history.push('/destination')
    }

    


    return (
      
      <div  style={{border:'2px solid gray',margin:'20px',textAlign:'center'}} onClick={handelClick}>
         
                <div className="col-md-3">
             <h1>{name}</h1>
              <img  src={photo}  style={{width:'250px',padding:'30px',margin:'10px'}} alt=''/> 
              
                </div>
               
            
      </div> 
    );
};

export default Home;