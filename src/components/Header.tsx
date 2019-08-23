import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

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

const Header = () => {
	return (
		<Head>
			<h1>
				<Link to="/">Pokémons</Link>
			</h1>
		</Head>
	)
}

export default Header
