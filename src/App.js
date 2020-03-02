import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Soda from "./Soda";
import Candy from "./Candy";
import NavBar from "./NavBar";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Route exact path="/">
          <VendingMachine/>
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/candy">
          <Candy />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
