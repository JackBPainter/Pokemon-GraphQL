import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { PokemonsContainer } from './containers/PokemonsContainer'

const App = () => {
  const apiClient = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh'
  })

  return (
      <ApolloProvider apiClient={apiClient}>
        <div>
          <PokemonsContainer />
        </div>
      </ApolloProvider>
    )
}

export default App;
