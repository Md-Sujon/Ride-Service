
import Button from 'react-bootstrap/Button';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import './Login.css'
import { useContext } from 'react';
import {UserContext} from'../../App'
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); 
 }


const Login = () => {
    const [loggedInuser,setLoggedInuser]=useContext(UserContext)
    const history=useHistory();
    const location=useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

  var googleprovider = new firebase.auth.GoogleAuthProvider();
  

const handleClickgoogle =()=>{

    firebase.auth()
  .signInWithPopup(googleprovider)
  .then((result) => {

      // var credential = result.credential;
    // var token = credential.accessToken;
    const {displayName,email} = result.user;
    const singedInuser={name:displayName,email}
    setLoggedInuser(singedInuser)
    history.replace(from)
    // console.log(singedInuser);


  }).catch((error) => {
    console.log(error);
  });

}

const handelBlur=(e)=>{
  let isFormValid=true;
console.log(e.target.value,e.target.name);
if(e.target.name === 'email'){
const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
console.log(isEmailValid);
}

if(e.target.name === 'password'){
const isPasswordValid=e.target.value.length>6;
console.log(isPasswordValid);
}

}

const handelSubmit=()=>{

}

    return (
        <div className="login">
            {/* <h1>This is Login</h1> */}
            <Button onClick={handleClickgoogle} >Google Singin</Button>
           <form  onSubmit={handelSubmit}>
              <input type="email" name="email" onBlur={handelBlur} placeholder="Enter your Email" required></input>
              <br/>
              <input type="password" name="password" onBlur={handelBlur} placeholder="Enter your password" required></input>
              <br/>
              <input type="submit" value="submit"></input>
           </form>

        </div>
    );
};

export default Login;