import React, { useState, useEffect } from "react"
import { gql } from "apollo-boost"
import { Link } from "react-router-dom"

import Filter from "./components/Filter"
import Layout, { client } from "./components/Layout"
import Loader from "./components/Loader"
import List from "./components/List"

const App = () => {
	const [pokemons, setPokemons] = useState([])
	const [filter, setFilter] = useState("")

	const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) =>
		setFilter(e.target.value)

	const filteredPokemons = !filter
		? pokemons
		: pokemons.filter((pokemon: any) =>
				pokemon.name.toLowerCase().includes(filter.toLowerCase()),
		  )

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
			<Filter value={{ filter }} handler={{ handleFilter }} />
			<List>
				{pokemons.length > 0 ? (
					filteredPokemons.map((pokemon: any) => (
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
