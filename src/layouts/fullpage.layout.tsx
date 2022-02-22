import {ReactNode, useState} from 'react'
import {DarkTheme, LightTheme, Theme, ThemeProvider, useStyletron} from 'baseui'
import {Block} from 'baseui/block'
import Navbar from '../components/Navbar/Navbar'
import Menu from '../components/Menu/Menu'
import * as React from 'react'
import styled from '@emotion/styled'

const Container = styled(Block)`
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	min-height: 100vh;
	background-color: red;
`
const Header = styled(Block)`
	position: sticky;
	left: 0;
	top: 0;
`

const Body = styled(Block)`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	min-height: 100vh;
`

const THEME = {
	light: LightTheme,
	dark: DarkTheme,
}

type FullPageLayoutProps = {
	children: ReactNode | ReactNode[]
}

export const FullPageLayout = ({children}: FullPageLayoutProps) => {
	const [theme, setTheme] = useState<Theme>(THEME.light)
	const [css] = useStyletron()
	const [isOpen, setIsOpen] = React.useState(false)

	const close = () => {
		setIsOpen(false)
	}

	const open = () => {
		setIsOpen(true)
	}

	return (
		<ThemeProvider theme={theme}>
			<Container>
				<Header className={css({backgroundColor: theme.colors.backgroundPrimary})}>
					<Navbar onOpen={open} />
					<Menu
						isOpen={isOpen}
						onClose={close}
						setTheme={() => setTheme(theme === THEME.dark ? THEME.light : THEME.dark)}
						isDark={theme === THEME.dark}
					/>
				</Header>
				<Body className={css({backgroundColor: theme.colors.backgroundSecondary})}>
					{children}
				</Body>
			</Container>
		</ThemeProvider>
	)
}
