import React, { useState, useEffect } from "react"
import { gql } from "apollo-boost"
import { Link } from "react-router-dom"

import Layout, { client } from "./components/Layout"
import Loader from "./components/Loader"
import List from "./components/List"

interface IProps {
	default: boolean
}

const App = ({ default: IProps }: IProps) => {
	const [pokemons, setPokemons] = useState([])

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
		<Layout>
			<List>
				{pokemons.length > 0 ? (
					pokemons.map((pokemon: any) => (
						<li key={pokemon.number}>
							<Link to={`/${pokemon.name}`}>
								<h3>{pokemon.name}</h3>
								<img src={pokemon.image} alt={pokemon.name} />
								<small>#{pokemon.number}</small>
							</Link>
						</li>
					))
				) : (
					<Loader />
				)}
			</List>
		</Layout>
	)
}

export default App
