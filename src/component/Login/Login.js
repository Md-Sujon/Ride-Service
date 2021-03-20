
import Button from 'react-bootstrap/Button';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import './Login.css'
import { useContext, useState } from 'react';
import {UserContext} from'../../App'
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); 
 }


const Login = () => {
  const [user,setUser]=useState({
          isSingedin:false,
          password:'',
          name:'',
          error:''

  })
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
    setUser(user)
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
  isFormValid = /\S+@\S+\.\S+/.test(e.target.value);

}

if(e.target.name === 'password'){
const isPasswordValid=e.target.value.length>6;
const isPasswordHasValid=/\d{1}/.test(e.target.value)
console.log(isPasswordValid && isPasswordHasValid);
}
if(isFormValid){
const newUserInfo={...user};

newUserInfo[e.target.name]=e.target.value
setUser(newUserInfo)
}
}

const handelSubmit=(e)=>{
  // console.log(user.email,user.password);

  if(user.email && user.password){

firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
  .then((res) => {
    const newUserInfo={...user};
    newUserInfo.error='';
    var user = res.user;
    console.log(user);
    
  })
  .catch(error => {
    const newUserInfo={...user};
    newUserInfo.error=error.massage;
    setUser(newUserInfo);
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // console.log(errorCode,errorMessage);
    // ..
  });

  }
  e.preventDefault();

}

    return (
        <div className="login">
            {/* <h1>This is Login</h1> */}
            <p>email:{user.email}</p>
            <p>name:{user.name}</p>
            <p>password:{user.password}</p>
            <Button onClick={handleClickgoogle} >Google Singin</Button>
            <br/><br/>
           <form  onSubmit={handelSubmit}>
             <input name="name" type="text" onBlur={handelBlur} placeholder="Enter your name"></input>
             <br/><br/>
              <input type="email" name="email" onBlur={handelBlur} placeholder="Enter your Email" required></input>
              <br/><br/>
              <input type="password" name="password" onBlur={handelBlur} placeholder="Enter your password" required></input>
              <br/><br/>
              <input type="submit" value="submit"></input>
           </form>
           <p style={{color:'red'}}>{user.error}</p>

        </div>
    );
};

export default Login;