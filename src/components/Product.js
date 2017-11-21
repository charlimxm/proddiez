import React, { Component } from 'react'

class Product extends Component {
  render() {
    return (
      <div className="col s12 m4">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{ this.props.productObj.title }</span>
            <p>{ this.props.productObj.subtitle }</p>
            <p className="right">{ this.props.productObj.subCount } subscribers</p>
          </div>
          <div className="card-action white-text right-align">
            <a className="btn">Subscribe</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Product
