import React from 'react'
import {FullPageLayout} from '../../layouts/fullpage.layout'
import {Breadcrumbs} from 'baseui/breadcrumbs'
import styled from '@emotion/styled'
import {Block} from 'baseui/block'
import {StyledLink} from 'baseui/link'
import MainLayout from '../../layouts/main.layout'

const Freelance = () => {
	return (
		<FullPageLayout>
			<Breadcrumbs>
				<StyledLink href='/'>Home </StyledLink>
				<span>Freelance</span>
			</Breadcrumbs>
			<MainLayout>
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

export default Freelance
