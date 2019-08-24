import React, { useState, useEffect } from "react"
import { gql } from "apollo-boost"
import styled from "styled-components"
import { Link } from "react-router-dom"

import Layout, { client } from "./components/Layout"
import Loader from "./components/Loader"
import Container from "./components/Container"

const Headline = styled.h1`
	margin-bottom: 0;
	span {
		font-size: 0.7em;
		font-weight: normal;
		color: #ccc;
	}
	& + h2 {
		font-size: 1rem;
		margin-top: 0;
		font-weight: lighter;
	}
`

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	img,
	div {
		width: 40%;
	}
`

const Attributes = styled.ul`
	list-style: none;

	li > ul {
		list-style: none;
		padding: 0;
		li {
			display: inline-block;
			margin: 0.5rem 0.5rem 1rem 0;
			padding: 0.5rem 1rem;
			background: red;
			border-radius: 5px;
			background: #fff;
			border: 1px solid #eee;
		}
	}
`

const Evolutions = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	li {
		width: 25%;
		padding: 2rem;
	}
`

interface IPokemon {
	attacks: {
		fast?: {
			damage: string
			name: string
			type: string
		}
		special?: {
			damage: string
			name: string
			type: string
		}
	}
	classification?: string[]
	evolutionRequirements?: {
		amount: string
		name: string
	}
	evolutions?: [
		{
			name: string
			number: string
			image: string
			classification?: string[]
		},
	]
	fleeRate: string
	height: {
		maximum: string
	}
	image: string
	maxCP: string
	maxHP: string
	name: string
	number: string
	resistant: string[]
	types: string[]
	weaknesses: string[]
	weight: {
		maximum: string
	}
}

const Pokemon = ({ match }: any) => {
	const [pokemon, setPokemon] = useState<IPokemon | undefined>(undefined)
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		client
			.query({
				variables: {
					slug: match.params.slug,
				},
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
			.then(result => {
				setPokemon(result.data.pokemon)
				setLoading(false)
			})
	}, [match.params.slug])

	return (
		<Layout>
			{!loading && pokemon !== undefined ? (
				<Container>
					<Headline>
						{pokemon.name} <span>#{pokemon.number}</span>
					</Headline>
					<h2>
						HP: {pokemon.maxHP} | CP: {pokemon.maxCP}
					</h2>
					<Wrapper>
						<img src={pokemon.image} alt={pokemon.name} />
						<div>
							<Attributes>
								<li>
									<strong>Height:</strong>{" "}
									{pokemon.height.maximum}
								</li>
								<li>
									<strong>Weight:</strong>{" "}
									{pokemon.weight.maximum}
								</li>
								<li>
									<strong>Types:</strong>
									<ul>
										{pokemon.types.map((type, i) => (
											<li key={i}>{type}</li>
										))}
									</ul>
								</li>
								<li>
									<strong>Weaknesses:</strong>
									<ul>
										{pokemon.weaknesses.map(
											(weakness, i) => (
												<li key={i}>{weakness}</li>
											),
										)}
									</ul>
								</li>
							</Attributes>
						</div>
					</Wrapper>
					{pokemon.evolutions && (
						<React.Fragment>
							<h2>Evolutions</h2>
							<Evolutions>
								{pokemon.evolutions.map((evo: any) => (
									<li key={evo.number}>
										<Link
											to={`/${evo.name}/`}
											onClick={() => {
												setLoading(true)
											}}
										>
											<h3>{evo.name}</h3>
											<img
												src={evo.image}
												alt={evo.name}
											/>
										</Link>
									</li>
								))}
							</Evolutions>
						</React.Fragment>
					)}
				</Container>
			) : (
				<Loader />
			)}
		</Layout>
	)
}

export default Pokemon
