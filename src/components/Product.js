import React, { Component } from 'react'

class Product extends Component {
  constructor(props) {
    super()

    // convert the props.productObj.subCount => state
    this.state = {
      subCount: props.productObj.subCount,
      hideClass: 'card blue-grey darken-1'
    }
  }

  addSubcriber(e) {
    this.setState({
      subCount: this.state.subCount + 1
    })
  }

  hideCard(e) {
    this.setState({
      hideClass: 'card grey darken-3'
    })
  }

  render() {
    return (
      <div className="col s12 m4">
        <div className={this.state.hideClass}>
          <div className="card-content white-text">
            <span className="card-title">{ this.props.productObj.title }</span>
            <p>{ this.props.productObj.subtitle }</p>
            <p className="right">{ this.state.subCount } subscribers</p>
          </div>
          <div className="card-action white-text">
            <a className="btn btn-floating red"
              onClick={(e) => this.hideCard(e) }>
              <i class="material-icons">close</i>
            </a>
            <a className="btn btn-floating right"
              onClick={(e) => this.addSubcriber(e)}>
              <i class="material-icons">add</i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Product
