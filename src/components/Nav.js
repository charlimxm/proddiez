import React from 'react'

const Nav = ({navProp}) => {
  return (
    <nav>
      <div className="nav-wrapper container">
        <a className="brand-logo">{ navProp.title }</a>
      </div>
    </nav>
  )
}

export default Nav
