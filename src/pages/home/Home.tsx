import React from 'react'
import {Rides} from '../../components/Rides/Rides'
import Menu from '../../components/Menu/Menu'
import Navbar from '../../components/Navbar/Navbar'
import {Block} from 'baseui/block'
import {useStyletron} from 'baseui'
import styled from '@emotion/styled'

const Container = styled.div`
	margin: 0;
`

type HomeProps = {
	isDark: boolean
	setTheme: () => void
}

const Home = ({setTheme, isDark}: HomeProps) => {
	const [css, theme] = useStyletron()
	const [isOpen, setIsOpen] = React.useState(false)

	const close = () => {
		setIsOpen(false)
	}

	const open = () => {
		setIsOpen(true)
	}

	return (
		<Container>
			<Block className={css({position: 'sticky', left: 0, top: 0})}>
				<Navbar onOpen={open} />
			</Block>
			<Block
				className={css({
					fontSize: '20px',
					backgroundColor: theme.colors.backgroundSecondary,
					height: '100vh',
				})}
			>
				<Rides />
			</Block>
			<Menu isOpen={isOpen} onClose={close} setTheme={setTheme} isDark={isDark} />
		</Container>
	)
}

export default Home
