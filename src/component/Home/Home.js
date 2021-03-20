import React from 'react';
import { useHistory } from 'react-router-dom';
import { Image} from "react-bootstrap/";
import './Home.css'

const Home = (props) => {
    const {name,avator}=props.Rider||{};
    const history=useHistory()
    // console.log(props);

    const handelClick=()=>{
      history.push('/destination')
    }
    return (
      
      <div className="background">
          <div  onClick={handelClick} className="rider">
              <Image src={avator}></Image>
              <h1>{name}</h1>    
          </div>     
      </div> 
    );
};

export default Home;