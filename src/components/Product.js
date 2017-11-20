import React, { Component } from 'react'

class Product extends Component {
  render() {
    return (
      <div>
        <h2>{ this.props.title }</h2>
        <p>Subtitle</p>

        <small>xx subscribers</small>
      </div>
    )
  }
}

export default Product
