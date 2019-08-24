import React from "react"
import styled from "styled-components"

const Input = styled.input`
	width: 928px;
	max-width: 100%;
	margin: 1rem auto;
	display: block;
	padding: 0.5rem 1rem;
	font-size: 1rem;
	font-weight: lighter;
`

interface IProps {
	handler: {
		handleFilter: any
	}
	value: {
		filter: string
	}
}

const Filter = ({ handler: { handleFilter }, value: { filter } }: IProps) => (
	<form onSubmit={e => e.preventDefault()}>
		<Input
			value={filter}
			onChange={handleFilter}
			placeholder="Filter Pokemons"
		/>
	</form>
)

export default Filter
