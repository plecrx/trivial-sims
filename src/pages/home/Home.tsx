import React from 'react'
import {Rides} from '../../components/Rides/Rides'
import Menu from '../../components/Menu/Menu'
import Navbar from '../../components/Navbar/Navbar'
import {Block} from 'baseui/block'
import {useStyletron} from 'baseui'
import styled from '@emotion/styled'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: static;
	width: 100%;
	height: 100%;

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
		<Container
			className={css({
				minHeight: '100vh',
				backgroundSize: 'cover',
			})}
		>
			<Block className={css({position: 'sticky', left: 0, top: 0})}>
				<Navbar onOpen={open} />
			</Block>
			<Rides />
			<Menu isOpen={isOpen} onClose={close} setTheme={setTheme} isDark={isDark} />
		</Container>
	)
}

export default Home
