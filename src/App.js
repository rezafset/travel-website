import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Contact from "./components/Contact/Contact";
import Discount from "./components/Discount/Discount";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Package from "./components/Package/Package";
import PackageDetails from "./components/PackageDetails/PackageDetails";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import PopularPlace from "./components/PopularPlace/PopularPlace";
import Slider from "./components/Slider/Slider";
import TopPlace from "./components/TopPlace/TopPlace";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/packageDetails/:packageId">
          <PackageDetails></PackageDetails>
        </Route>
        <Route path="/placeDetails/:placeId">
          <PlaceDetails></PlaceDetails>
        </Route>
        <Route path="/">
          <Navigation></Navigation>
          <Slider></Slider>
          <TopPlace></TopPlace>
          <PopularPlace></PopularPlace>
          <Discount></Discount>
          <Package></Package>
          <Faq></Faq>
          <Contact></Contact>
          <Footer></Footer>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
