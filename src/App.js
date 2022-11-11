import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import React from "react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [prodId, setProdId] = useState([]);

  return (
    <Router>
      <div className="App">
        <Navbar prodId={prodId} />
        <div className="home">
          <Switch>
            <Route exact path="/webshop">
              <Home setProdId={setProdId} />
            </Route>
            <Route exact path="/webshop/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
