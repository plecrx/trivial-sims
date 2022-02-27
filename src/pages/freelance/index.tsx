import React from 'react'
import {FullPageLayout} from '../../layouts/fullpage.layout'
import {Breadcrumbs} from 'baseui/breadcrumbs'
import styled from '@emotion/styled'
import {Block} from 'baseui/block'
import {StyledLink} from 'baseui/link'

const FreelanceContainer = styled(Block)`
	width: 50%;
	padding-top: 1.5em;
`

const Freelance = () => {
	return (
		<FullPageLayout>
			<FreelanceContainer>
				<Breadcrumbs>
					<StyledLink href='/'>Home </StyledLink>
					<span>Freelance</span>
				</Breadcrumbs>
			</FreelanceContainer>
		</FullPageLayout>
	)
}

export default Freelance
