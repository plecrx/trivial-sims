import React from 'react'
import {FullPageLayout} from '../../layouts/fullpage.layout'
import {immoItems} from '../../utils/data'
import {Breadcrumbs} from 'baseui/breadcrumbs'
import {StyledLink} from 'baseui/link'
import HeroLabel from '../../components/heroLabel/heroLabel.component'
import Carousel from '../../components/carousel/carousel.component'
import MainLayout from '../../layouts/main.layout'
import {useStyletron} from 'baseui'
import styled from '@emotion/styled'

const StyledFullPageLayout = styled(FullPageLayout)`
	margin-inline: calc(100% - 20px);
`

const Immo = () => {
	const [css, theme] = useStyletron()
	return (
		<StyledFullPageLayout>
			<Breadcrumbs>
				<StyledLink href='/'>Home</StyledLink>
				<span>Simulation de crédit immobilier</span>
			</Breadcrumbs>
			<HeroLabel
				label={'Réussissez votre prêt immobilier grâce aux simulateurs :'}
			/>
			<MainLayout
				className={css({
					backgroundColor: 'transparent',
				})}
			>
				<Carousel items={immoItems} />
			</MainLayout>
		</StyledFullPageLayout>
	)
}

export default Immo
