import * as React from 'react'
import {Home} from './home'
import Head from 'next/head'

const Index: React.FC = () => {
	return (
		<div>
			<Head>
				<title>Trivial Sims - Prescilla Lecurieux</title>
			</Head>
			<Home />
		</div>
	)
}

export default Index
