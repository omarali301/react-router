

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import Home from './Component/Home/Home';
import NotFound from "./Component/NotFound/NotFound";
import TeamDetails from "./Component/TeamDetails/TeamDetails";



function App() {
  return (
    <div className="App">

      <Router>
 
       <Switch>
       <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details/:teamId">
            <TeamDetails></TeamDetails>
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>

          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
     
    </Router>
 
    </div>
  );
}

export default App;
