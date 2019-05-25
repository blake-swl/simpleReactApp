import React from 'react';
import './navTabs.scss';
import Popup from 'reactjs-popup'


import NavCat from './NavCat/';
import VendorInfo from './VendorInfo';
import NavPayment from './NavPayment';
import Reviews from '../ItemDetails/Reviews';
// import Reviews from '../Reviews';


const NavTabs = () => (
  <div id="navTabs">
    <Popup trigger={<button> Vendor Category</button>} position="bottom center" className="navTab_container1"
    arrow={false}>
      <NavCat />
    </Popup>
    <Popup trigger={<button> Payment & Contact</button>} position="bottom center" className="navTab_container3">
      <NavPayment />
    </Popup>
    <Popup trigger={<button> Vendor Info</button>} position="bottom center" className="navTab_container2"
    arrow={false}>
      <VendorInfo />
    </Popup>
    <Popup trigger={<button> Review</button>} position="bottom center" className="navTab_container">
      <Reviews />
    </Popup>
  </div>
);
export default NavTabs;
