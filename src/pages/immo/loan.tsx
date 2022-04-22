import {FullPageLayout} from '../../layouts/fullpage.layout'
import {Breadcrumbs} from 'baseui/breadcrumbs'
import {StyledLink} from 'baseui/link'
import React from 'react'
import {useStyletron} from 'baseui'
import styled from '@emotion/styled'
import {Block} from 'baseui/block'

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

type LoanProps = {}

const Loan = ({}: LoanProps) => {
	const [css, theme] = useStyletron()

	return (
		<FullPageLayout>
			<LoanContainer>
				<Breadcrumbs>
					<StyledLink href='/'>Home</StyledLink>
					<StyledLink href='/immo'>Simulation de crédit immobilier</StyledLink>
					<span>Prêt</span>
				</Breadcrumbs>
				<MainBlock
					className={css({
						backgroundColor: theme.colors.tagPrimaryOutlinedHover,
					})}
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