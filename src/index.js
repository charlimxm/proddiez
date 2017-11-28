import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './components/App'
import Home from './components/Home'
import registerServiceWorker from './registerServiceWorker'

// all packages that i need to connect to my express server + graphql
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new HttpLink({ uri: 'http://localhost:3000/graphql' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
, document.getElementById('root'))
registerServiceWorker()
