import React from "react"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./Header"

const Style = createGlobalStyle`
	body {
		background: #f3f3f3;
		padding: 0;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`

const Footer = styled.footer`
	text-align: center;
	margin: 5rem 0 2rem;
`

interface IProps {
	children: React.ReactNode
}

export const client = new ApolloClient({
	uri: `https://graphql-pokemon.now.sh`,
})

const Layout = ({ children }: IProps) => {
	return (
		<ApolloProvider client={client}>
			<Style />
			<Header />
			<main>{children}</main>
			<Footer>
				&copy; 2019 <a href="https://herper.io/">Jacob Herper</a>
			</Footer>
		</ApolloProvider>
	)
}

export default Layout
