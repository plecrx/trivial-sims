import * as React from 'react'
import {LightTheme, DarkTheme, ThemeProvider, Theme, useStyletron} from 'baseui'
import {useState} from 'react'
import {Block} from 'baseui/block'
import Navbar from '../components/Navbar/Navbar'
import Menu from '../components/Menu/Menu'
import styled from '@emotion/styled'
import {ReactLocation, Router, Outlet} from 'react-location'
import {routes} from '../routes'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: static;
	width: 100%;
	height: 100%;
`

const BodyBlock = styled(Block)`
	position: relative;
	margin: 0;
	display: flex;
	justify-content: center;
	min-height: 100%;
`

const THEME = {
	light: LightTheme,
	dark: DarkTheme,
}

const Index: React.FC = () => {
	const [theme, setTheme] = useState<Theme>(THEME.light)
	const [css] = useStyletron()
	const [isOpen, setIsOpen] = React.useState(false)
	const location = new ReactLocation()

	const close = () => {
		setIsOpen(false)
	}

	const open = () => {
		setIsOpen(true)
	}

	return (
		<ThemeProvider theme={theme}>
			<Container
				className={css({
					minHeight: '100vh',
					backgroundSize: 'cover',
				})}
			>
				<Block
					className={css({
						position: 'sticky',
						left: 0,
						top: 0,
						backgroundColor: theme.colors.backgroundPrimary,
					})}
				>
					<Navbar onOpen={open} />
					<Menu
						isOpen={isOpen}
						onClose={close}
						setTheme={() => setTheme(theme === THEME.dark ? THEME.light : THEME.dark)}
						isDark={theme === THEME.dark}
					/>
				</Block>
				<BodyBlock
					overrides={{
						Block: {
							style: ({$theme}) => ({
								backgroundColor: $theme.colors.backgroundSecondary,
							}),
						},
					}}
				>
					<Router location={location} routes={routes}>
						<Outlet />
					</Router>
				</BodyBlock>
			</Container>
		</ThemeProvider>
	)
}

export default Index
