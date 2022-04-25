import {FullPageLayout} from '../../layouts/fullpage.layout'
import {Breadcrumbs} from 'baseui/breadcrumbs'
import {StyledLink} from 'baseui/link'
import React from 'react'
import {useStyletron} from 'baseui'
import MainLayout from '../../layouts/main.layout'

type LoanProps = {}

const Loan = ({}: LoanProps) => {
	const [css, theme] = useStyletron()

	return (
		<FullPageLayout>
			<Breadcrumbs>
				<StyledLink href='/'>Home</StyledLink>
				<StyledLink href='/immo'>Simulation de crédit immobilier</StyledLink>
				<span>Prêt</span>
			</Breadcrumbs>
			<MainLayout
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
			</MainLayout>
		</FullPageLayout>
	)
}

export default Loan
