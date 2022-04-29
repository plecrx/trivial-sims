import {ReactNode} from 'react'

export type PanelProps = {
	title?: string
	children: ReactNode | ReactNode[]
	backgroundColor?: string
}
