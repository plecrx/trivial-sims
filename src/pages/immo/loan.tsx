import React from 'react'
import {Breadcrumbs} from 'baseui/breadcrumbs'
import {StyledLink} from 'baseui/link'
import {FullPageLayout} from '../../layouts/fullpage.layout'
import NoPageFound from '../../components/noPageFound/noPageFound.component'

type LoanProps = {}

const Loan = ({}: LoanProps) => (
	<FullPageLayout>
		<Breadcrumbs>
			<StyledLink href='/'>Home</StyledLink>
			<StyledLink href='/immo'>Simulation de crédit immobilier</StyledLink>
			<span>Prêt</span>
		</Breadcrumbs>
		<NoPageFound />
	</FullPageLayout>
)

export default Loan
