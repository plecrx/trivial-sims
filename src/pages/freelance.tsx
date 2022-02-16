import React from 'react'
import {FullPageLayout} from '../layouts/fullpage.layout'
import {Breadcrumbs} from 'baseui/breadcrumbs'
import styled from '@emotion/styled'
import {Block} from 'baseui/block'
import {StyledLink} from 'baseui/link'

const FreelanceContainer = styled(Block)`
	margin: 1em 20em 5em 20em;
	width: 100%;
`

const Freelance = () => {
	return (
		<FullPageLayout>
			<FreelanceContainer>
				<Breadcrumbs>
					<StyledLink href='/'>Home</StyledLink>
					<span>Freelance</span>
				</Breadcrumbs>
			</FreelanceContainer>
		</FullPageLayout>
	)
}

export default Freelance
