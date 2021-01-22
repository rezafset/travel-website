import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Discount from "./components/Discount/Discount";
import Navigation from "./components/Navigation/Navigation";
import Package from "./components/Package/Package";
import Slider from "./components/Slider/Slider";
import TopPlace from "./components/TopPlace/TopPlace";

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Navigation></Navigation>
          <Slider></Slider>
          <TopPlace></TopPlace>
          <Discount></Discount>
          <Package></Package>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
