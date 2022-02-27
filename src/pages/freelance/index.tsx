import React from 'react'
import {FullPageLayout} from '../../layouts/fullpage.layout'
import {Breadcrumbs} from 'baseui/breadcrumbs'
import styled from '@emotion/styled'
import {Block} from 'baseui/block'
import {StyledLink} from 'baseui/link'

const FreelanceContainer = styled(Block)`
	width: 80%;
	margin: 2.5em 0 5em 0;
`

const MainBlock = styled(Block)`
	padding-left: calc(8.33333%);
	padding-right: calc(8.33333%);
	margin-top: 1.5em;
	border-radius: 8px;
	background: #0c806b;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Freelance = () => {
	return (
		<FullPageLayout>
			<FreelanceContainer>
				<Breadcrumbs>
					<StyledLink href='/'>Home </StyledLink>
					<span>Freelance</span>
				</Breadcrumbs>
				<MainBlock>
					<img height='200' width='200' loading='lazy' src={'/warning.svg'} alt='' />
				</MainBlock>
			</FreelanceContainer>
		</FullPageLayout>
	)
}

export default Freelance
