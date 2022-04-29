import {ReactNode} from 'react'

export type CardProps = {
	headerImage: string
	title: string
	actionButton: {
		label: string
		href: string
	}
	children: ReactNode | ReactNode[]
	backgroundColor: string
	color: string
}
