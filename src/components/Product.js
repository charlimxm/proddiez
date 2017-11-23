import React, { Component } from 'react'

class Product extends Component {
  constructor(props) {
    super()

    // convert the props.productObj.subCount => state
    // this.state = {
    //   subCount: props.productObj.subCount,
    //   hideClass: 'card blue-grey darken-1'
    // }
  }

  // this is also suppose to be at app.js
  // addSubcriber(e) {
  //   this.setState({
  //     subCount: this.state.subCount + 1
  //   })
  // }

  // this method is suppose to be at app.js
  // deleteProduct = (e) => {
  //   alert('remove myself')
  // }

  render() {
    return (
      <div className="col s12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{ this.props.productObj.title }</span>
            <p>{ this.props.productObj.subtitle }</p>
            <p className="right">{ this.props.productObj.subCount } subscribers</p>
          </div>
          <div className="card-action white-text">
            <a className="btn btn-floating red"
              onClick={(e) => this.props.delete(this.props.productObj.id)}>
              <i className="material-icons">close</i>
            </a>
            <a className="btn btn-floating right"
              onClick={(e) => this.props.addSub(this.props.productObj.id)}>
              <i className="material-icons">add</i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Product
