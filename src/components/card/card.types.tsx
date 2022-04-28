import { ReactNode } from 'react'

export type CardProps = {
	title?: string
	children: ReactNode | ReactNode[]
	backgroundColor?: string
}
