import React, { Component } from 'react'

import uuidv4 from 'uuid/v4'

import './App.css'

import Nav from './Nav'
import Product from './Product'
import { Input, Row, Button } from 'react-materialize';

// from the db
const products = [
  {
    id: 1,
    title: 'Product Hunt Project X',
    subtitle: 'Something different from the Product Hunt team',
    subCount: 0,
    category: 'one'
  },
  {
    id: 2,
    title: 'MeetPro',
    subtitle: 'Meet with investors, no warm introduction needed ✨',
    subCount: 0,
    category: 'two'
  },
  {
    id: 3,
    title: 'Plutio',
    subtitle: '🚨 One place for everything to run your freelance business 👌',
    subCount: 0,
    category: 'three'
  },
  {
    id: 4,
    title: 'Tesla Powerbank',
    subtitle: 'A Tesla supercharger for your phone!',
    subCount: 0,
    category: 'one'
  },
  {
    id: 5,
    title: 'Briefcase by AppSumo',
    subtitle: 'Netflix for software',
    subCount: 0,
    category: 'two'
  },
  {
    id: 6,
    title: 'Product Reviews',
    subtitle: 'Concise and unbiased software product reviews',
    subCount: 0,
    category: 'three'
  },
  {
    id: 7,
    title: 'Ello 3.0',
    subtitle: 'A social network for artists',
    subCount: 0,
    category: 'one'
  },
  {
    id: 8,
    title: 'Orbitkey Ring',
    subtitle: 'The keyring, reinvented',
    subCount: 0,
    category: 'two'
  },
  {
    id: 9,
    title: 'Who is mining?',
    subtitle: 'A simple tool to see which sites are mining cryptocurrency',
    subCount: 0,
    category: 'three'
  }
]

class App extends Component {
  constructor (props) {
    super()

    // this is where I init the state
    this.state = {
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

  handleSearch (e) {
    let filteredProducts = products.filter(product => {
      return product.title.toLowerCase().includes(e.target.value)
    })
    this.setState({
      products: filteredProducts
    })
  }

  addSubcriber = (productId) => {

    // find the product with given id,
    // increase the retrieved product's subcount + 1
    let updatedProduct = this.state.allProducts.find(product => {
      return product.id === productId
    })

    updatedProduct.subCount += 1

    let sortedProducts = this.state.allProducts.sort((a, b) => {
      return b.subCount - a.subCount
    })

    this.setState({
      allProducts: sortedProducts
    })
  }

  // custom event handler, that's not expecting an event object
  // TODO: complete this method to delete the product with givenId
  deleteProduct = (givenId) => {
    // alert(`remove product id: ${givenId}`)

    // find the id that was suppose to be removed
    // and remove the product from the state allProducts

    const productsWithoutGivenId = this.state.allProducts.filter(product => {
      return product.id !== givenId
    })

    this.setState({
      allProducts: productsWithoutGivenId
    })

    // remove the product with id == givenId
  }

  render () {
    const navProp = {
      username: 'Shumin',
      title: 'Proddiez',
      useremail: 'shumin@gmail.com'
    }

    const allProducts = this.state.allProducts.map((product, index) => {
      // change key to point to product id instead
      return (
        <Product
          key={index}
          productObj={product}
          deleteProduct={this.deleteProduct}
          addSub={this.addSubcriber}
        />
      )
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
          </div>
          <Row>
            <Input s={12} type='select' label="Filter" defaultValue=''
              onChange={this.handleChangeFilter}
            >
              <option value='one'>Option 1</option>
              <option value='two'>Option 2</option>
              <option value='three'>Option 3</option>
            </Input>
            <Button onClick={this.handleClickClearFilter}>Clear</Button>
          </Row>
          <div className="row App-products">
            { allProducts }
          </div>
        </div>
      </div>
    )
  }
}

export default App
