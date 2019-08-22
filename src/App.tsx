import React, { useState, useEffect } from "react"
import ApolloClient, { gql } from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"

const client = new ApolloClient({
	uri: `https://graphql-pokemon.now.sh`,
})

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
	.then(result => console.log(result))

const App: React.FC = () => {
	return (
		<ApolloProvider client={client}>
			<header>
				<h1>Headline</h1>
			</header>
			<main>
				<ul>
					<li>Element</li>
				</ul>
			</main>
			<footer>&copy; 2019</footer>
		</ApolloProvider>
	)
}

export default App
