import React, { useState, useEffect } from "react"
import ApolloClient, { gql } from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"
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
			.then(result => setPokemons(result.data))
	}, [])

	console.log(pokemons)

	return (
		<ApolloProvider client={client}>
			<header>
				<h1>Headline</h1>
			</header>
			<main>
				<ul>
					{pokemons.length > 0 ? (
						pokemons.map((pokemon: any) => <li>{pokemon.name}</li>)
					) : (
						<p>Loading ...</p>
					)}
				</ul>
			</main>
			<footer>&copy; 2019</footer>
		</ApolloProvider>
	)
}

export default App
