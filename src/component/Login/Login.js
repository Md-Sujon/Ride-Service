import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import './Login.css'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); 
 }


const Login = () => {

  var googleprovider = new firebase.auth.GoogleAuthProvider();
  const [user,setUser]=useState({
      singedIn:false,
      name:'',
      email:'',
      photo:''
  })

const haldeClickgoogle =()=>{

    firebase.auth()
  .signInWithPopup(googleprovider)
  .then((result) => {
    // var credential = result.credential;
    // var token = credential.accessToken;
    var user = result.user;
    setUser(user)
    console.log(user);


  }).catch((error) => {
    console.log(error);
  });

}



    return (
        <div className="login">
            <h1>This is Login</h1>
            <Button onClick={haldeClickgoogle} >Google Singin</Button>
        </div>
    );
};

export default Login;