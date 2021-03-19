
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
import Destination from './component/Destination/Destination';

function App() {
  return (
    <div >
      
      
     {/* <Rider></Rider> */}


     <Router>
     
      <Header></Header>
        <Switch>
          <Route path="/Home">
          <Home></Home>
          <Rider></Rider>
          </Route>

          <Route path="/Login">
            <Login></Login>
          </Route>

          <Route path="/Destination">
            <Destination></Destination>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>


    </div>


  );
}

export default App;
