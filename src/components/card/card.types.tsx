import {ReactNode} from 'react'

export type CardProps = {
	title?: string
	image?: string
	children: ReactNode | ReactNode[]
	backgroundColor?: string
}
