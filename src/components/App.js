import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'

import './App.css'

import Nav from './Nav'
import Product from './Product'

// from the db
const products = [
  {
    id: 1,
    title: 'Product Hunt Project X',
    subtitle: 'Something different from the Product Hunt team',
    subCount: 2716,
    category: 'one'

  }
  ,
  {
    id: 2,
    title: 'MeetPro',
    subtitle: 'Meet with investors, no warm introduction needed ✨',
    subCount: 85,
    category: 'two'

  }
  ,
  {
    id: 3,
    title: 'Plutio',
    subtitle: '🚨 One place for everything to run your freelance business 👌',
    subCount: 524,
    category: 'three'

  }
  ,
  {
    id: 4,
    title: 'Tesla Powerbank',
    subtitle: 'A Tesla supercharger for your phone!',
    subCount: 816,
    category: 'one'

  }
  ,
  {
    id: 5,
    title: 'Briefcase by AppSumo',
    subtitle: 'Netflix for software',
    subCount: 581,
    category: 'two'
  }
  ,
  {
    id: 6,
    title: 'Product Reviews',
    subtitle: 'Concise and unbiased software product reviews',
    subCount: 375,
    category: 'three'
  }
  ,
  {
    id: 7,
    title: 'Ello 3.0',
    subtitle: 'A social network for artists',
    subCount: 268,
    category: 'one'

  }
  ,
  {
    id: 8,
    title: 'Orbitkey Ring',
    subtitle: 'The keyring, reinvented',
    subCount: 188,
    category: 'two'
  }
  ,
  {
    id: 9,
    title: 'Who is mining?',
    subtitle: 'A simple tool to see which sites are mining cryptocurrency',
    subCount: 148,
    category: 'three'
  }
]

class App extends Component {
  constructor (props) {
    super()

    // this is where i init the state
    this.state = {
      counter: 12,
      keyword: '',
      allProducts: products,
      addedProduct: {}
    }
  }

  handleKeyup = (e) => {
    var typedValue = e.target.value
    // onKeyUp, updates the addedProduct state. NOT the allProducts state

    var newProduct = {
      id: uuidv4(),
      title: typedValue,
      subtitle: 'Placeholder',
      subCount: 0
    }

    // update the state
    this.setState({
      addedProduct: newProduct
    })

    console.log('state update happened')
    console.log(this.state.addedProduct)
  }

  submitProduct = (e) => {
    e.preventDefault()
    // console.log('form submit cancelled')

    // console.log('added product into the allProducts state now')
    this.setState({
      allProducts: [
        this.state.addedProduct,
        ...this.state.allProducts
      ],
      addedProduct: {}
    })

    // missing ux consideration. update the input field
    // console.log(e.target)

    var input = document.querySelector('#new-product')
    input.value = ''
  }

  handleKeyupSearch = (e) => {
    console.log('search something')

    // FILTER the copy to show only products with title that INCLUDES the letters / word that you type
    // (FILTER only products from the database)
    // update the state based on that filtered product

    let keyword = e.target.value.toLowerCase()
    // what we type in the input field

    let filteredProducts = products.filter(product => {
      return product.title.toLowerCase().includes(keyword)
    })

    this.setState({
      allProducts: filteredProducts
    })
  }

  handleChangeFilter = (e) => {
    this.setState({
      allProducts: products.filter(product => {
        return product.category === e.target.value
      })
    })
  }

  handleClickClearFilter = (e) => {
    this.setState({
      allProducts: products
    })
  }

  render () {
    const navProp = {
      username: 'Shumin',
      title: 'Proddiez',
      useremail: 'shumin@gmail.com'
    }

    const allProducts = this.state.allProducts.map((product, index) => {
      // change key to point to product id instead
      return <Product key={product.id} productObj={product} />
    })

    return (
      <div>
        <Nav
          navProp={navProp}
        />
        <div className="container">
          <div className="row">
            <div className="input-field col s6">
              <input id="new-product" type="text"
                className=""
                onKeyUp={this.handleKeyup} />
              <label className="active" htmlFor="new-product">
                New Product
              </label>

              <button
                className="btn btn-float"
                onClick={this.submitProduct}
              >+</button>
            </div>
            <div className="input-field col s6">
              <input id="search-product" type="text"
                onKeyUp={this.handleKeyupSearch}
              />
              <label className="active" htmlFor="search-product">
                Search
              </label>
            </div>
            <div className="input-field col s12">
              <label className="select-label">Filter</label>
              <select
                onChange={this.handleChangeFilter}
                className="browser-default"
              >
                <option value="" disabled defaultValue>Choose your option</option>
                <option value="one">Category 1</option>
                <option value="two">Category 2</option>
                <option value="three">Category 3</option>
              </select>
              <button
                className="btn btn-float"
                onClick={this.handleClickClearFilter}>
                Clear
              </button>
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
