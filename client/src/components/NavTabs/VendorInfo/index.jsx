import React, { Component } from 'react';
import './vendorInfo.scss';

// Components
import SideNavContents from './SideNavContents';

// Icons
import { Icon } from 'react-icons-kit';
import {ic_close} from 'react-icons-kit/md/ic_close'



const data = [
  { 
    "company info": {
      name: "Aisly Rose",
      description_1: "Young Contemporary",
      address: "149 Catalina St",
      phone: '1232143243',
      email: "john@gmail.com",
      description_2: "blah blah blah"    
    },
    FAQ: [
      {
        header: "Account",
        contents: 'blah blah blah'
      },
      {
        header: "Member Center"
      },
      {
        header: "Order"
      },
      {
        header: "Order Status",
      },
      {
        header: "Payment",
      },
      {
        header: "Shipping"
      },
      {
        header: "Return & Exchanges"
      },
      {
        header: "Refunds"
      }
    ],
    "Show Schedule": [
      {
        name: "Atlanta Americasmart1",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
      {
        name: "Atlanta Americasmart2",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
      {
        name: "Atlanta Americasmart3",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
      {
        name: "Atlanta Americasmart4",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
      {
        name: "Atlanta Americasmart5",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
      {
        name: "Atlanta Americasmart6",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
    ],
    "Return & Cancellation Policy": {
      policy: " policdy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    "Promotion": {
      promotion: "promotio Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    "Size Info": {
      "size info": "size Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
  }

]

export default class VendorInfo extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      selected: [],
      header: '',
      faqContents: [],
      child: [],
      default: {
        name: "",
        description_1: "",
        address: "",
        phone: '',
        email: '',
        description_2: '',
      }
    }
  }
  pushVendorInfo(info, infos) {
    for (let key in infos) {
      if (key === info) {
        this.setState({
          selected: infos[key],
          header: info,
          default: {
            name: infos[key].name,
            description_1: infos[key].description_1,
            address: infos[key].address,
            phone: infos[key].description_2,
            email: infos[key].email,
            description_2: infos[key].description_2
          }
        })
      }
      if (key === "FAQ") {
        this.setState({faqContents: infos[key]})
        // return this.renderImmediateChild(key);
      }
      if (key === "company info") {
        console.log(infos[key], 'default')
        // this.setState({default: {
        //   name: i
        // }})
      }
    }
  }
  renderVendorInfoNav(vendorInfo){   
    return vendorInfo.map(infos => {    
      return Object.keys(infos).map(info => {
        // console.log(infos.FAQ)
        return (
          <ul className="infoCategories" onClick={() => this.pushVendorInfo(info, infos)}>
            {info}
            
          </ul>
        )
      })
    }) 
  }
  renderImmediateChild(faq) {
    console.log(faq, 'fag')
    return faq.map(subHeaders => {
      return <li>{subHeaders.header}</li>
    })
  }
  // renderSideNav() {

  // }
  render() {
    return(
      <div id="vendorInfo" ref="referree">
        <div className="sideNav">
          {this.renderVendorInfoNav(data)}
          {/* {this.renderImmediateChild(this.state.faqContents)} */}
        </div>
        <div className="sideNavContents">
          <div className="sideNavContainer">
            <h3 className="sideNavHeader">{this.state.header }</h3>
            <button>
              <Icon icon={ic_close} size={16}/>
            </button>
          </div>
          <SideNavContents contents={this.state  || this.state.default}/>
          <button className="sideNavClose">Close</button>
        </div>
      </div>
    )
  }
}

