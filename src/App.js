import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home'
import Rider from './component/Rider/Rider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Login from './component/Login/Login';

import { createContext, useState } from 'react';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Destination from './component/Destination/Destination';



export const UserContext=createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  return (
    

    
  <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>

     <Router  >
     <Header></Header>
        <Switch>
          <Route path="/Home">
            <Rider></Rider>
          </Route>

          <Route path="/Login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/Destination/:key">
            <Destination></Destination>
          </PrivateRoute>

          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
