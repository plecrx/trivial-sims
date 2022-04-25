import styled from '@emotion/styled'
import {Block} from 'baseui/block'
import {ReactNode} from 'react'

const Container = styled(Block)`
	padding-left: calc(8.33333%);
	padding-right: calc(8.33333%);
	margin-top: 1.5em;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`

type MainLayoutProps = {
	children: ReactNode
	className?: string
}

const MainLayout = ({children, className}: MainLayoutProps) => {
	return <Container className={className}>{children}</Container>
}

export default MainLayout
