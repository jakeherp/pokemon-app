import React, { useState, useEffect } from "react"
import ApolloClient, { gql } from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"
import { createGlobalStyle } from "styled-components"

import Loader from "./components/Loader"
import Header from "./components/Header"
import List from "./components/List"

const Style = createGlobalStyle`
	body {
		background: #f3f3f3;
		padding: 0;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	}
`

const App: React.FC = () => {
	const [pokemons, setPokemons] = useState([])

	const client = new ApolloClient({
		uri: `https://graphql-pokemon.now.sh`,
	})

	useEffect(() => {
		client
			.query({
				query: gql`
					{
						pokemons(first: 151) {
							name
							number
							image
						}
					}
				`,
			})
			.then(result => setPokemons(result.data.pokemons))
	}, [])

	return (
		<ApolloProvider client={client}>
			<Style />
			<Header amount={pokemons.length} />
			<main>
				<List>
					{pokemons.length > 0 ? (
						pokemons.map((pokemon: any) => (
							<li key={pokemon.number}>
								<h3>{pokemon.name}</h3>
								<img src={pokemon.image} alt={pokemon.name} />
								<small>#{pokemon.number}</small>
							</li>
						))
					) : (
						<Loader />
					)}
				</List>
			</main>
			<footer>&copy; 2019</footer>
		</ApolloProvider>
	)
}

export default App
