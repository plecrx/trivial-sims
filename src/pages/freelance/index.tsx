import React from 'react'
import {Breadcrumbs} from 'baseui/breadcrumbs'
import {StyledLink} from 'baseui/link'
import {FullPageLayout} from '../../layouts/fullpage.layout'
import NoPageFound from '../../components/noPageFound/noPageFound.component'

const Freelance = () => (
	<FullPageLayout>
		<Breadcrumbs>
			<StyledLink href='/'>Home </StyledLink>
			<span>Freelance</span>
		</Breadcrumbs>
		<NoPageFound />
	</FullPageLayout>
)

export default Freelance
