import React, { Component } from "react";
import "./individualVendorNewArrivals.scss";
import ProductImage from '../../Vendor/ProductImage';

class VendorLandingNewArrvials extends Component {
  constructor() {
    super();

    this.big = [
      [
        { url: 'https://dummyimage.com/400x600/e3d187/#fff'},
      ],
      [
        { url: 'https://dummyimage.com/400x600/26628a/#fff'},
      ],
      [ 
        { url: 'https://dummyimage.com/400x600/929ded/#fff'},
      ],
    ];

    this.small = [
      [
        { url: 'https://dummyimage.com/400x600/e3d187/#fff'},
        { url: 'https://dummyimage.com/400x600/a4e099/#fff'},
      ],
      [
        { url: 'https://dummyimage.com/400x600/26628a/#fff'},
        { url: 'https://dummyimage.com/400x600/9b192e/#fff'}
      ],
      [ 
        { url: 'https://dummyimage.com/400x600/929ded/#fff'},
        { url: 'https://dummyimage.com/400x600/bbdbf3/#fff'}
      ],
    ];

    this.state = {};
  }

  convertGrid (images) {  
    const item = {
      name: 'Aisley Rose',
      price: 18,
      model: 'L4777R',
      image: "https://dummyimage.com/400x600/26628a/fff"
    }

    return images.map( image => { 
      if ( image.length === 1 ) {
        return (
          <div className="col-xs-4 col-sm-4 col-md-4" style={{ padding: '5px'}}>
            <ProductImage
              className="col-xs-12 col-sm-12 col-md-12" 
              name={'default'}
              images={image} 
              isViewable={false}
            />
            <div>
              <div>{item.model} / <strong>${item.price}</strong></div>
              <div>{item.name}</div>
            </div>
          </div>
        )
      } else {
        return (
          <div className="col-xs-4 col-sm-4 col-md-4" style={{ padding: '5px'}}>
            <ProductImage
              className="col-xs-6 col-sm-6 col-md-6" 
              name={'duo'}
              images={image} 
              isViewable={false}
            />
            <div className="col-xs-6 col-sm-6 col-md-6">
              <div>{item.model} / <strong>${item.price}</strong></div>
              <div>{item.name}</div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6">
              <div>{item.model} / <strong>${item.price}</strong></div>
              <div>{item.name}</div>
            </div>
          </div>
        )
      }
    });
  }

  render() {
    return (
      <div id="newArrivals">
      <div className="container" >
        <h1>New Arrivals</h1>
        <div className="row" style={{ margin: 0 }}>
          {this.convertGrid(this.big)}
        </div>
        <div className="row" style={{ margin: 0 }}>
          {this.convertGrid(this.small)}
        </div>
      </div>
    </div>
      // <div className="container" id="vendorLandingNewArrivals_container">
      //   <h1>NEW ARRIVALS</h1>
      //   <div className="row" id="vendorLandingNewArrivals_row">
      //     <div className="col-xs-4 col-sm-4 col-md-4">
      //       <div className="row">
      //         <div className="col-xs-12 col-sm-12 col-md-12 vendorLanding_newArrivals">
      //           <img
      //             className="img-responsive"
      //             alt=""
      //             src="https://dummyimage.com/400x600/26628a/fff"
      //           />
      //         </div>
      //       </div>

      //       <div className="row">
      //         <div className="col-xs-6 col-sm-6 col-md-6">
      //           <img
      //             className="img-responsive img-responsive-left"
      //             alt=""
      //             src="https://dummyimage.com/400x600/26628a/fff"
      //           />
      //         </div>

      //         <div className="col-xs-6 col-sm-6 col-md-6">
      //           <img
      //             className="img-responsive img-responsive-right"
      //             alt=""
      //             src="https://dummyimage.com/400x600/26628a/fff"
      //           />
      //         </div>
      //       </div>
      //     </div>

      //     <div className="col-xs-4 col-sm-4 col-md-4">
      //       <div className="row">
      //         <div className="col-xs-12 col-sm-12 col-md-12 vendorLanding_newArrivals">
      //           <img
      //             className="img-responsive"
      //             alt=""
      //             src="https://dummyimage.com/400x600/26628a/fff"
      //           />
      //         </div>
      //       </div>

      //       <div className="row">
      //         <div className="col-xs-6 col-sm-6 col-md-6">
      //           <img
      //             className="img-responsive img-responsive-left"
      //             alt=""
      //             src="https://dummyimage.com/400x600/26628a/fff"
      //           />
      //         </div>

      //         <div className="col-xs-6 col-sm-6 col-md-6">
      //           <img
      //             className="img-responsive img-responsive-right"
      //             alt=""
      //             src="https://dummyimage.com/400x600/26628a/fff"
      //           />
      //         </div>
      //       </div>
      //     </div>

      //     <div className="col-xs-4 col-sm-4 col-md-4">
      //       <div className="row">
      //         <div className="col-xs-12 col-sm-12 col-md-12 vendorLanding_newArrivals">
      //           <img
      //             className="img-responsive"
      //             alt=""
      //             src="https://dummyimage.com/400x600/26628a/fff"
      //           />
      //         </div>
      //       </div>

      //       <div className="row">
      //         <div className="col-xs-6 col-sm-6 col-md-6">
      //           <img
      //             className="img-responsive img-responsive-left"
      //             alt=""
      //             src="https://dummyimage.com/400x600/26628a/fff"
      //           />
      //         </div>

      //         <div className="col-xs-6 col-sm-6 col-md-6">
      //           <img
      //             className="img-responsive img-responsive-right"
      //             alt=""
      //             src="https://dummyimage.com/400x600/26628a/fff"
      //           />
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default VendorLandingNewArrvials;
