import React from "react"
import styled from "styled-components"

const List = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	flex-wrap: wrap;
	width: 960px;
	max-width: 90%;
	margin: 0 auto;

	li {
		width: 33%;
		min-width: 300px;
		box-sizing: border-box;
		padding: 2rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		transition: 0.3s;
		&:hover {
			transform: scale(1.2);
		}
		a {
			background: #fff;
			border: 1px solid #eee;
			border-radius: 5px;
			padding: 1rem;
		}
	}

	img {
		width: 80%;
		height: auto;
		margin: 0 auto;
		display: block;
	}
`

interface IProps {
	children: React.ReactNode
}

const PokemonList = ({ children }: IProps) => {
	return <List>{children}</List>
}

export default PokemonList
