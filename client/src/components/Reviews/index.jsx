import React, { Component } from 'react';
import './reviews.scss';

export default class Reviews extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div id="customerReviews">
        <h1>Customer Reviews</h1>
        <div className="ratings_tab">
          <div className="total_ratings">
            <h3>234 Reviews</h3>
            <p></p>
          </div>
          <div className="total_ratings_breakdown">

          </div>
        </div>
      </div>
    )
  }
}