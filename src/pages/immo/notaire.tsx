import {FullPageLayout} from '../../layouts/fullpage.layout'
import styled from '@emotion/styled'
import {Block} from 'baseui/block'
import React from 'react'
import {Breadcrumbs} from 'baseui/breadcrumbs'
import {StyledLink} from 'baseui/link'
import {useStyletron} from 'baseui'
import MainLayout from '../../layouts/main.layout'

const Notaire = () => {
	const [css, theme] = useStyletron()

	return (
		<FullPageLayout>
			<Breadcrumbs>
				<StyledLink href='/'>Home</StyledLink>
				<StyledLink href='/immo'>Simulation de crédit immobilier</StyledLink>
				<span>Notaire</span>
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
export default Notaire
