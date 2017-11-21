import React, { Component } from 'react'
import './App.css'

import Nav from './Nav'
import Product from './Product'

class App extends Component {
  constructor(props) {
    super()

    // this is where i init the state
    this.state = {
      counter: 12
    }
  }

  clickButton(e) {
    console.log('button is clicked')
    this.setState({
      counter: this.state.counter + 1
    })
  }

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
      },
      {
        title: 'Tesla Powerbank',
        subtitle: 'A Tesla supercharger for your phone!',
        subCount: 816
      },
      {
        title: 'Briefcase by AppSumo',
        subtitle: 'Netflix for software',
        subCount: 581
      },
      {
        title: 'Product Reviews',
        subtitle: 'Concise and unbiased software product reviews',
        subCount: 375
      },
      {
        title: 'Ello 3.0',
        subtitle: 'A social network for artists',
        subCount: 268
      },
      {
        title: 'Orbitkey Ring',
        subtitle: 'The keyring, reinvented',
        subCount: 188
      },
      {
        title: 'Who is mining?',
        subtitle: 'A simple tool to see which sites are mining cryptocurrency',
        subCount: 148
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
          <div className="row">
            <h1>Counter: {this.state.counter}</h1>
            <button onClick={(e) => this.clickButton(e)}>+</button>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="new-product" type="text" className="" />
              <label className="active" htmlFor="new-product">
                New Product
              </label>
            </div>
          </div>
          <div className="row App-products">
            { allProducts }
          </div>
        </div>
      </div>
    )
  }
}

export default App
