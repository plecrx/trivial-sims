import '../styles/globals.css'
import App from 'next/app'
import {styletron} from '../styletron'
import {Provider as StyletronProvider} from 'styletron-react'
import {BaseProvider, LightTheme} from 'baseui'

export default class MyApp extends App {
	render() {
		const {Component, pageProps} = this.props
		return (
			<StyletronProvider value={styletron}>
				<BaseProvider theme={LightTheme}>
					<Component {...pageProps} />
				</BaseProvider>
			</StyletronProvider>
		)
	}
}
