import React from 'react';
import Header from '../Header/Header';
import Trips from '../Trips/Trips';
import Show from '../Show/Show';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
          <Header />
        <div>
        </div>
        </div>


        <Switch>
          <Route exact path="/">
            <Redirect to="/list" />
          </Route>
          <Route  path="/list">
            <Trips />
          </Route>
          <Route path="/detail/:id">
            <Show />
          </Route>

        </Switch>
      </Router>
  );
}

export default App;
