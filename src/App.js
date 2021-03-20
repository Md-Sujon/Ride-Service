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
  const [loggedInuser,setLoggedInuser]=useState({});
  return (
    

    
  <UserContext.Provider value={[loggedInuser,setLoggedInuser]}>

     <Router  >
     <Header></Header>
        <Switch>
        
        <Route exact path="/">
            <Home />
          </Route>

          <Route path="/Home">
            <Rider></Rider>
          </Route>

          <Route path="/Login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/Destination">
            <Destination></Destination>
          </PrivateRoute>
          
          
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
