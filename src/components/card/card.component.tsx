import {
	ActionButton,
	CardBody,
	CardContainer,
	CardHeader,
	ContentWrapper,
	HeaderImage,
	Title,
} from './card.styles'
import {CardProps} from './card.types'
import {ChevronRight} from 'baseui/icon'
import React from 'react'
import {useRouter} from 'next/router'
import {useStyletron} from 'baseui'

const Card = ({headerImage, title, children, actionButton}: CardProps) => {
	const [css, theme] = useStyletron()
	const router = useRouter()

	return (
		<CardContainer
			className={css({
				backgroundColor: theme.colors.backgroundPrimary,
			})}
		>
			<CardHeader>
				<HeaderImage src={headerImage} />
			</CardHeader>
			<CardBody>
				<Title>{title}</Title>
				<ContentWrapper>{children}</ContentWrapper>
				<ActionButton
					endEnhancer={() => <ChevronRight size={24} />}
					onClick={() => router.push(actionButton.href)}
				>
					{actionButton.label}
				</ActionButton>
			</CardBody>
		</CardContainer>
	)
}

export default Card
