import * as React from 'react'
import {LightTheme, DarkTheme, ThemeProvider, Theme} from 'baseui'
import Home from './home/Home'
import {useState} from 'react'

const THEME = {
	light: LightTheme,
	dark: DarkTheme,
}

const Index: React.FC = () => {
	const [theme, setTheme] = useState<Theme>(THEME.light)
	return (
		<ThemeProvider theme={theme}>
			<Home
				isDark={theme === THEME.dark}
				setTheme={() => setTheme(theme === THEME.dark ? THEME.light : THEME.dark)}
			/>
		</ThemeProvider>
	)
}

export default Index
