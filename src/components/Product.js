import React, { Component } from 'react'

class Product extends Component {
  constructor(props) {
    super()

    // convert the props.productObj.subCount => state
    this.state = {
      subCount: props.productObj.subCount,
      isHidden: ''
    }
  }

  addSubcriber(e) {

    // fetch post to the db
    // if succesful, then you increase the state
    this.setState({
      subCount: this.state.subCount + 1
    })
  }

  render() {
    return (
      <div className="col s12 m4">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{ this.props.productObj.title }</span>
            <p>{ this.props.productObj.subtitle }</p>
            <p className="right">{ this.state.subCount } subscribers</p>
          </div>
          <div className="card-action white-text right-align">
            <a className="btn">Hide</a>
            <a className="btn" onClick={(e) => this.addSubcriber(e)}>Subscribe</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Product
