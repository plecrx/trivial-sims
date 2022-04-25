import React from 'react'
import {FullPageLayout} from '../../layouts/fullpage.layout'
import {immoItems} from '../../utils/data'
import {Breadcrumbs} from 'baseui/breadcrumbs'
import {StyledLink} from 'baseui/link'
import HeroLabel from '../../components/HeroLabel/HeroLabel'
import Carousel from '../../components/Carousel/Carousel'
import MainLayout from '../../layouts/main.layout'
import {useStyletron} from 'baseui'

const Immo = () => {
	const [css, theme] = useStyletron()
	return (
		<FullPageLayout>
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
		</FullPageLayout>
	)
}

export default Immo
