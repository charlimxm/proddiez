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
    const productTitles = [
      'Product Hunt Project X',
      'MeetPro',
      'Plutio'
    ]

    const productComponents = productTitles.map(product => {
      return <Product title={product} />
    })


    return <div>
      <Nav
        navProp={navProp}
      />
      <h1>Hello React!</h1>
      <p>From WDI 12</p>

      { productComponents }
    </div>
  }
}

export default App
