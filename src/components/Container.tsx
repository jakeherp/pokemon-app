import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
	width: 960px;
	max-width: 90%;
	margin: 0 auto;
`

interface IProps {
	children: React.ReactNode
}

const Container = ({ children }: IProps) => {
	return <Wrapper>{children}</Wrapper>
}

export default Container
