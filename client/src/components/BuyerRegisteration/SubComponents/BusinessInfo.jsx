import React, { Component } from 'react';

class BusinessInformation extends Component {
  constructor() {
    super();

  }
  formatCheckbox(header, labels) {
    return (
      <div>
        <h3>{header}</h3>
        <div className="registration__checkbox">
          {
            labels.map(label => {
              return (
                <div className>
                  <label htmlFor="">
                    <input type="checkbox"/>
                    <span className="checkbox__label"> {label}</span>
                  </label>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
  render() {
    return(
      <div className="businessInformation_container">
        <div className="registration__subtitle">
         <h1>Business Information</h1>
         <p>Tell us about your company</p>
        </div>
        <div className="registration__container--checkbox">
          {this.formatCheckbox("Where do you sell your products?", ['Offline Store', 'Online Store', 'Online and Offline Store'])}
          {this.formatCheckbox("What kind of store do you own?", ['Boutique', 'Speciality Boutiques', 'Chain Store', 'Discout Outlet', 'Department Store'])}
          {this.formatCheckbox('What is your primary market category?', ['Women', 'Men', 'Kids', 'Shoes', 'Handbags', 'Accessories', 'Beauty'])}
          {this.formatCheckbox('Size', ['Plus Size', 'Petite Size'])}
          {this.formatCheckbox('Speciality', ['Lingerie', 'Swimwear', 'Uniforms', 'Maternity'])}
          {this.formatCheckbox('Style', ['Casual', 'Formal', 'Contemporary', 'Junior', 'Missy'])}
          {this.formatCheckbox('Occasional', ['Vacation', 'Evening & Cocktail', 'Outdoor & Active', 'Prom & Homecoming', 'Night Out', 'Wedding', 'Lounge & Sleeping'])}
        </div>
        <div className="registration__container--btn">
          <button className="back btn" onClick={() => this.props.viewPost('address', false)}>&#60; Back</button>
          <button className="reset btn">Reset</button>
          <button className="next btn" onClick={() => this.props.viewPost('createAccount', true)}>Next ></button>
        </div>
      </div>
    )
  }
}

export default BusinessInformation;