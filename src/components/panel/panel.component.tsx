import React from 'react'
import HeadingTitle from '../headingTitle/headingTitle.component'
import {useStyletron} from 'baseui'
import {Container, Content} from './panel.styles'
import {PanelProps} from './panel.types'

const Panel = ({title, backgroundColor, children}: PanelProps) => {
	const [css, theme] = useStyletron()

	return (
		<Container>
			{title && <HeadingTitle title={title} />}
			<Content
				backgroundColor={backgroundColor || theme.colors.positive100}
				color={theme.colors.colorSecondary}
			>
				{children}
			</Content>
		</Container>
	)
}

export default Panel
