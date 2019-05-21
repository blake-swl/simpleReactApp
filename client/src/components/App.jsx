import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import Landing from "./landing/index.jsx";
import SignIn from "./SignIn/index.jsx";
import Navigation from "./Navigation/index.jsx";
import NavTabs from './NavTabs';
import BuyerRegisteration from "./BuyerRegisteration/index.jsx";
import CategoryMain from "./CategoryMain";
import CategorySub from "./CategorySub";
import Vendor from "./Vendor";
import IndividualVendorLanding from "./IndividualVendorLanding/index.jsx";
import IndividualVendorAllItems from "./IndividualVendorLanding/IndividualVendorAllItems/index.jsx";
import ShoppingCart from "./ShoppingCart/index.jsx";
import ShippingPayment from "./ShippingPayment/index.jsx";
import Favorites from "./Favorites/index.jsx";

import CompanyFooter from "./CompanyFooter/index.jsx";
import CompanyHeader from "./CompanyHeader/index.jsx";
import routes from "../routes";


class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <CompanyHeader/>
        <Navigation/>
        <NavTabs />
        <Switch>
          {routes.map(route => (
            <Route key={`route-${route.name}`} {...route} />
          ))}
        </Switch>
      </div>
      // <div>
      //   {/* <CompanyFooter/>
      //   <IndividualVendorAllItems/>
      //   <Landing/> */}
      //   {/* <Favorites/> */}
      // </div>
    );
  }
}

export default App;