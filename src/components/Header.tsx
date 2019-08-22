import React from "react"
import styled from "styled-components"

const Head = styled.header`
	width: 100%;
	padding: 1rem;
	background: navy;
	color: #fff;
	h1 {
		width: 960px;
		max-width: 90%;
		margin: 0 auto;
	}
`

interface IProps {
	amount: number
}

const Header = ({ amount }: IProps) => {
	return (
		<Head>
			<h1>{amount} Pokemons</h1>
		</Head>
	)
}

export default Header
