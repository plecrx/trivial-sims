import React from 'react'
import {FullPageLayout} from '../layouts/fullpage.layout'
import {immoItems} from '../utils/data'
import styled from '@emotion/styled'
import {Block} from 'baseui/block'
import {Breadcrumbs} from 'baseui/breadcrumbs'
import {StyledLink} from 'baseui/link'
import {useStyletron} from 'baseui'
import {LabelMedium} from 'baseui/typography'

const ImmoContainer = styled(Block)`
	width: 80%;
	padding-top: 1.5em;
`

const MainBlock = styled(Block)`
	padding: 2.5em 5em;
	margin-top: 1.5em;
	background: #0c806b;
`

const SimWrapper = styled(Block)`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	margin: 2em 0;
	gap: 24px;
`

const SimBlock = styled(Block)`
	border: 1px solid green;
	border-radius: 8px;
	padding: 1em;
	justify-content: center;
`

const SimContent = styled.div`
	display: flex;
	padding: 0.8em;
	flex-direction: column;
	align-items: start;
	width: 13em;
	gap: 15px;
`

const Immo = () => {
	const [css, theme] = useStyletron()

	return (
		<FullPageLayout>
			<ImmoContainer>
				<Breadcrumbs>
					<StyledLink href='/'>Home</StyledLink>
					<span>Immo</span>
				</Breadcrumbs>
				<MainBlock>
					<LabelMedium
						className={css({
							color: theme.colors.primaryB,
						})}
					>
						REUSSISSEZ VOTRE PRÊT IMMO GRÂCE AUX SIMULATEURS !
					</LabelMedium>
					<SimWrapper>
						{immoItems.map(item => (
							<SimBlock
								key={`immo-item-${item.id}`}
								className={css({
									backgroundColor: theme.colors.backgroundPrimary,
								})}
							>
								<SimContent>
									<strong>{item.title}</strong>
									{item.description}
									<a href={item.callToAction.link}>{item.callToAction.label}</a>
								</SimContent>
							</SimBlock>
						))}
					</SimWrapper>
				</MainBlock>
			</ImmoContainer>
		</FullPageLayout>
	)
}

export default Immo
