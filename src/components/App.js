import React, { Component } from 'react'

import Nav from './Nav'
import Product from './Product'

class App extends Component {
  render() {
    const navProp = {
      username: 'Shumin',
      title: 'Proddiez',
      useremail: 'shumin@gmail.com'
    }

    // from the db
    const products = [
      {
        title: 'Product Hunt Project X',
        subtitle: 'Something different from the Product Hunt team',
        subCount: 2716
      },
      {
        title: 'MeetPro',
        subtitle: 'Meet with investors, no warm introduction needed ✨',
        subCount: 85
      },
      {
        title: 'Plutio',
        subtitle: '🚨 One place for everything to run your freelance business 👌',
        subCount: 524
      }
    ]

    const allProducts = products.map((product, index) => {
      return <Product key={index} productObj={product} />
    })


    return (
      <div>
        <Nav
          navProp={navProp}
        />
        <div className="container">
          <h1>Hello React!</h1>
          <p>From WDI 12</p>

          { allProducts }
        </div>
      </div>
    )
  }
}

export default App
