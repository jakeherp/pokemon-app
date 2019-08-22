import React, { useState, useEffect } from "react"
import ApolloClient, { gql } from "apollo-boost"

const Pokemon = (props: any) => {
	const [pokemon, setPokemon] = useState({})

	const client = new ApolloClient({
		uri: `https://graphql-pokemon.now.sh`,
	})

	useEffect(() => {
		client
			.query({
				query: gql`
					query pokemonBySlug($slug: String!) {
						pokemon(name: $slug) {
							attacks {
								fast {
									damage
									name
									type
								}
								special {
									damage
									name
									type
								}
							}
							classification
							evolutionRequirements {
								amount
								name
							}
							evolutions {
								name
								number
								image
								classification
							}
							fleeRate
							height {
								maximum
							}
							image
							maxCP
							maxHP
							name
							number
							resistant
							types
							weaknesses
							weight {
								maximum
							}
						}
					}
				`,
			})
			.then(result => setPokemon(result.data.pokemons))
	}, [])

	console.log(pokemon)

	return <div>I am a Pokemon</div>
}

export default Pokemon
