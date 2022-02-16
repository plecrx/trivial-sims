import React from 'react'
import {FullPageLayout} from '../layouts/fullpage.layout'
import styled from '@emotion/styled'
import { Block } from 'baseui/block'
import { Breadcrumbs } from 'baseui/breadcrumbs'
import { StyledLink } from 'baseui/link'

const ImmoContainer = styled(Block)`
	margin: 1em 20em 5em 20em;
	width: 100%;
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
