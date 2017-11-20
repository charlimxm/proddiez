import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <div>
        <h1>{ this.props.navProp.title }</h1>

        <span>
          Hi { this.props.navProp.username } (
          { this.props.navProp.useremail } )</span>
      </div>
    )
  }
}

export default Nav
