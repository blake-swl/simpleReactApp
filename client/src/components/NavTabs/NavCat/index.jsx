
import React, { Component } from 'react';
import './tabCategory.scss';

// components
import NavCategory from '../../Navigation/NavCategory';
import Checkbox from '../Checkboxes';

// Icons
import { Icon } from 'react-icons-kit';
import {ic_close} from 'react-icons-kit/md/ic_close'
 
const colors = [
  'https://www.iconsdb.com/icons/preview/blue/circle-xxl.png',
  'https://www.iconsdb.com/icons/preview/blue/circle-xxl.png',
  'https://www.iconsdb.com/icons/preview/blue/circle-xxl.png',
  'https://www.iconsdb.com/icons/preview/blue/circle-xxl.png',
  'https://www.iconsdb.com/icons/preview/blue/circle-xxl.png',
  'https://www.iconsdb.com/icons/preview/blue/circle-xxl.png',
  'https://www.iconsdb.com/icons/preview/blue/circle-xxl.png',
  'https://www.iconsdb.com/icons/preview/blue/circle-xxl.png',
  'https://www.iconsdb.com/icons/preview/blue/circle-xxl.png',
  'https://www.iconsdb.com/icons/preview/blue/circle-xxl.png',
  'https://www.iconsdb.com/icons/preview/blue/circle-xxl.png',
  'https://www.iconsdb.com/icons/preview/blue/circle-xxl.png',
]

export default class NavCat extends Component {
  constructor() {
    super();

    // this.state = { checked: false }
    this.state = {
      checkboxes: []
    }
    this.formatCircle = this.formatCircle.bind(this);
  }
  handleCheckboxChange(changeEvent) {
    console.log('checked', )
    // const { name } = changeEvent.target;
  
    // this.setState(prevState => ({
    //   checkboxes: {
    //     ...prevState.checkboxes,
    //     [name]: !prevState.checkboxes[name]
    //   }
    // }));
  };
  formatCheckbox(header, labels) {
    // console.log(this.reduceCheckbox(labels))
    console.log(labels.length > 8)
    return (
      <div>
        <h1 className="checkbox__header">{header}</h1>
        <div className={'checkbox__container ' + (labels.length > 8 ? 'double' : 'single')}>
          {
            labels.map(label => {
              {/* console.log(this.state.checkboxes[label]) */}
              return (
                <div className="toggle_checkboxes">
                  <label htmlFor="" className="checkbox__item">  
                    <input type="checkbox" checked={this.state.checkboxes[label]} onClick={this.handleCheckboxChange} className="check_box"/>
                    <span> {label}</span>
                  </label>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
  formatCircle() {
    return (
      <div className="checkbox__circle">
        { colors.map(color => {
          return <img src={color} alt=""/>
        })
        }
      </div>
    )
  }
  render() {
    return(
      <div className="tabCategory">
        <div className="tabNavCategory">
          <NavCategory />
        </div>
        <div className="tabNavContents">
          <button className="tabNavClose">
            <Icon icon={ic_close} size={16}/>
          </button>
          <div className="tabToggles">
            {this.formatCheckbox('style', ['active (500)', 'fashion (500)', 'streetwear (500)', 'casual (500)', 'formal (500)'])}
            {this.formatCheckbox('Size', ['One Size', 'Xs','S', 'M','L', 'Xl','2xl','3xl', '4xl', '5xl'])}
            <div>
              <h1 className="checkbox__header">Search</h1>
              <form action="">
                <input type="search" placeholder="Style No." className="checkbox__type"/>
              </form>
              <h1 className="checkbox__header">Price Range</h1>
              <form action="" className="checkbox__container double">
                <input type="text" placeholder="PRICE MIN" className="checkbox__type"/>
                <input type="text" placeholder="PRICE MAX" className="checkbox__type"/>
              </form>
            </div>
            {this.formatCheckbox('Clothing Length', ['Short (500)', 'Regular (500)', 'Long (500)', 'X-long (500)'])}
            {this.formatCheckbox('Body Type', ['Junior', 'Young Contemporary', 'Missy', 'Plus Size', 'Maternity'])}
            <div>
              <h1 className="toggle_header">Color</h1>
              {this.formatCircle()}
            </div>
          </div>
          <button className="tabNavClose">Close</button>
        </div>
      </div>
    )
  }
};
// {this.createCheckbox('young')}
{/* <Checkboxes label={['One Size', 'S', 'L', '2xl', '4xl']}

/> */}

  // handleLabels(labels) {
  //   // for (let i = 0; i < labels.length; i++) {
  //     this.setState({ checkboxes: labels })
  //     // console.log(labels[i]);
  //   // }
  // }
  // handleCheckboxChange(changeEvent) {
  //   const label = changeEvent.target;

  //   this.setState(prevState => ({
  //     checkboxes: {
  //       ...prevState.checkboxes,
  //       [label]: !prevState.checkboxes[label]
  //     }
  //   }))
  // }
 
  // handleCheckbox(event) {
  //   this.setState({ checked: event.target.checked })

  // }
  // createCheckbox(option) {
  //   <Checkboxes 
  //     label={option}
  //     isSelected={this.state.checkboxes[option]}
  //     onCheckboxChange={this.handleCheckboxChange}
  //     key={option}
  //     />
  // }