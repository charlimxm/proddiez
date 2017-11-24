import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'

const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjadovbao4h600134vzpih1bx' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

client.query({
  query: gql`
    query AllLinks {
      allLinks {
        id,
        url
      }
    }
  `
}).then(response => console.log(response.data.allLinks))

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
