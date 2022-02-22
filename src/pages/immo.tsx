import React from 'react'
import {FullPageLayout} from '../layouts/fullpage.layout'
import styled from '@emotion/styled'
import {Block} from 'baseui/block'
import {Breadcrumbs} from 'baseui/breadcrumbs'
import {StyledLink} from 'baseui/link'

const ImmoContainer = styled(Block)`
	width: 50%;
	padding-top: 1.5em;
`

const Immo = () => {
	return (
		<FullPageLayout>
			<ImmoContainer>
				<Breadcrumbs>
					<StyledLink href='/'>Home</StyledLink>
					<span>Immo</span>
				</Breadcrumbs>
			</ImmoContainer>
		</FullPageLayout>
	)
}

export default Immo
