import React from 'react'
import HeadingTitle from '../headingTitle/headingTitle.component'
import {useStyletron} from 'baseui'
import {Container, Content} from './card.styles'
import {CardProps} from './card.types'

const Card = ({title, image, backgroundColor, children}: CardProps) => {
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

export default Card
