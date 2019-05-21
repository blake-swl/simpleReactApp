import React, { Component } from 'react';

class SideNavContents extends Component {
  constructor(props) {
    super(props);
  
  }
  renderContent(contents) {
    console.log(contents)
    if (contents.header === "company info") {
      return this.companyInfo(contents.selected || contents.default)
    }
    else if (contents.header === 'FAQ') {
      return this.faq(contents.faqContents)
    }
    else if (contents.header === 'Show Schedule') {
      return this.schedule(contents.selected);
    }
    else {
      return this.else(contents.selected);
    }
    // if (contents.header === 'Return & Cancellation Policy') {
    //   return this.cancellation(contents.selected);
    // }
    // if (contents.header === 'Promotion') {
    //   return this.promotion(contents.selected);
    // }
    // if (contents.header === 'Size Info') {
    //   return this.size(contents.selected);
    // }
  }
  else (info) {
    for (let key in info) {
      console.log('else', info[key])
      return (
        <div className="navElse">
          <p className="description">{info[key]}</p>
        </div>
      )
    }
  }
  companyInfo(info) {
    return (
      <div className="navCompanyInfo">
        <h1 className="header">{info.name}</h1>
        <p className="description">{info.description_1}</p>
        <div className="details">
          <p>{info.address}</p>
          <p>Tel: {info.phone}</p>
          <p>Fax: {info.phone}</p>
          <p>Email: {info.email}</p>
        </div>
        <p className="description">{info.description_2}</p>
      </div>
    )
  }
  faq(info) {
    console.log(info)
    return (
      <div>
        fag
      </div>
    )
  }
  schedule(info) {
    return(
      <ul className="sideNavSchedule">
        {info.map(schedules => {
          return (
            <li>
              <h1 className="header">{schedules.name}</h1>
              <div className="details">
                <p>Booth {schedules.booth}</p>
                <p>{schedules.date}</p>
                <p>{schedules.city}</p>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
  render() {
    return(
      <div>
        {this.renderContent(this.props.contents) || this.companyInfo(this.props.contents.default)}
      </div>
    )
  }
}
    
export default SideNavContents;