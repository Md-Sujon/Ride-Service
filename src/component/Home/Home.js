import React from 'react';
import { useHistory } from 'react-router-dom';
import { Image} from "react-bootstrap/";
import './Home.css'


const Home = (props) => {
    const {image,name}=props.Rider||'';
    const history=useHistory();
    console.log(props);

    const handelClick=(key)=>{
      history.push(`/destination/${key}`)
    }
    return (
      
      <div className="background">
          <div onClick={() =>handelClick(name)} className="rider">
              <Image src={image}></Image>
              <h1>{name}</h1>    
          </div>     
      </div> 
    );
};

export default Home;