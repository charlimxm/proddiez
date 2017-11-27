import React, { Component } from 'react'

import Nav from './Nav'

class Home extends Component {

  // init the state here
  constructor() {
    super()

    this.state = {
      users: [] // init with empty array, cos we dont have any data yet
    }
  }


  render() {
    const navProp = {
      username: 'Shumin',
      title: 'Proddiez',
      useremail: 'shumin@gmail.com'
    }

    const allUsers = this.state.users.map(user => {
      return (
        <div key={user.id} className="col s12 m4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{ user.name }</span>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div>
        <Nav
          navProp={navProp}
        />

        <div className="container">
          <div className="row">
            { allUsers }
          </div>
        </div>
      </div>
    )
  }


  componentDidMount() {
    // fetch data here
    fetch('http://localhost:4000/users.json')
    .then(response => response.json())
    .then(usersFromDb => {
      // update the state if we got the data

      console.log('got data now')
      console.log(usersFromDb)
      this.setState({
        users: usersFromDb
      })
    })
  }
}

export default Home
