import styled from '@emotion/styled'
import {Block} from 'baseui/block'
import {ReactNode} from 'react'

const Container = styled(Block)`
	display: flex;
	justify-content: start;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
	padding-top: 2em;
	margin-inline: auto;
	width: 80%;
`

const Wrapper = styled.div`
	width: 80%;
	margin: 2.5em 0 5em 0;
`

type BodyLayoutProps = {
	children: ReactNode
}

const BodyLayout = ({children}: BodyLayoutProps) => {
	return (
		<Container>
			<Wrapper>{children}</Wrapper>
		</Container>
	)
}

export default BodyLayout
