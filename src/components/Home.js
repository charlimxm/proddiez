import React, { Component } from 'react'

import Nav from './Nav'

class Home extends Component {

  // init the state here
  constructor() {
    super()

    this.state = {
      users: [], // init with empty array, cos we dont have any data yet
      currentuser: {},
      allPosts: []
    }
  }


  render() {
    const navProp = {
      username: 'Shumin',
      title: 'Proddiez',
      useremail: 'shumin@gmail.com'
    }

    const allPosts = this.state.allPosts.map(post => {
      return (
        <div className="col s12 m4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{ post.title }</span>
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
            <h2>All posts by {this.state.currentuser.name}</h2>

            {
              allPosts
            }
          </div>
        </div>
      </div>
    )
  }


  componentDidMount() {
    // fetch current user
    fetch('http://localhost:4000/users/1.json')
    .then(response => response.json())
    .then(currentuserFromDb => {
      // update the state if we got the data

      console.log('got data now')
      console.log(currentuserFromDb)
      this.setState({
        currentuser: currentuserFromDb
      })

      this.getPostByUserId(currentuserFromDb.id)

    })
  }

  getPostByUserId(user_id) {
    fetch(`http://localhost:4000/users/${user_id}/posts`)
    .then(response => response.json())
    .then(postsFromUsers => {
      console.log('received the posts now')
      console.log(postsFromUsers)

      this.setState({
        allPosts: postsFromUsers
      })
    })
  }
}

export default Home
