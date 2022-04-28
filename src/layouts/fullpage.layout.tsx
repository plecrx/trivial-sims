import {ReactNode, useState} from 'react'
import {DarkTheme, LightTheme, Theme, ThemeProvider, useStyletron} from 'baseui'
import {Block} from 'baseui/block'
import Navbar from '../components/navbar/navbar.component'
import Menu from '../components/menu/menu.component'
import * as React from 'react'
import styled from '@emotion/styled'
import BodyLayout from './body.layout'

const Container = styled(Block)`
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	min-height: 100vh;
`
const Header = styled(Block)`
	position: sticky;
	left: 0;
	top: 0;
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
			<Container
				className={css({backgroundColor: theme.colors.backgroundSecondary})}
			>
				<Header className={css({backgroundColor: theme.colors.backgroundPrimary})}>
					<Navbar onOpen={open} />
					<Menu
						isOpen={isOpen}
						onClose={close}
						setTheme={() => setTheme(theme === THEME.dark ? THEME.light : THEME.dark)}
						isDark={theme === THEME.dark}
					/>
				</Header>
				<BodyLayout>{children}</BodyLayout>
			</Container>
		</ThemeProvider>
	)
}
