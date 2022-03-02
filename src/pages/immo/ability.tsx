import styled from '@emotion/styled'
import {Block} from 'baseui/block'
import {FullPageLayout} from '../../layouts/fullpage.layout'
import React from 'react'
import {StyledLink} from 'baseui/link'
import {Breadcrumbs} from 'baseui/breadcrumbs'
import {useStyletron} from 'baseui'

const LoanContainer = styled(Block)`
	width: 80%;
	margin: 2.5em 0 5em 0;
`

const MainBlock = styled(Block)`
	padding-left: calc(8.33333%);
	padding-right: calc(8.33333%);
	margin-top: 1.5em;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Loan = () => {
	const [css, theme] = useStyletron()
	return (
		<FullPageLayout>
			<LoanContainer>
				<Breadcrumbs>
					<StyledLink href='/'>Home</StyledLink>
					<StyledLink href='/immo'>Simulation de crédit immobilier</StyledLink>
					<span>Emprunt</span>
				</Breadcrumbs>
				<MainBlock
					className={css({backgroundColor: theme.colors.backgroundOverlayLight})}
				>
					<img
						height='200'
						width='200'
						loading='lazy'
						src={'/warning_orange.svg'}
						alt=''
					/>
				</MainBlock>
			</LoanContainer>
		</FullPageLayout>
	)
}
export default Loan
