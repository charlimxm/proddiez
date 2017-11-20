import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper container">
          <a className="brand-logo">{ this.props.navProp.title }</a>
        </div>
      </nav>
    )
  }
}

export default Nav
