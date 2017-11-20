import React, { Component } from 'react'

class Product extends Component {
  render() {
    return (
      <div>
        <h2>{ this.props.productObj.title }</h2>
        <p>{ this.props.productObj.subtitle }</p>

        <small>{ this.props.productObj.subCount } subscribers</small>
      </div>
    )
  }
}

export default Product
