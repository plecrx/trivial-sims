import React from 'react'
import {FullPageLayout} from '../../layouts/fullpage.layout'
import {immoItems} from '../../utils/data'
import styled from '@emotion/styled'
import {Block} from 'baseui/block'
import {Breadcrumbs} from 'baseui/breadcrumbs'
import {StyledLink} from 'baseui/link'
import HeroLabel from '../../components/HeroLabel/HeroLabel'
import Carousel from '../../components/Carousel/Carousel'

const ImmoContainer = styled(Block)`
	width: 80%;
	margin: 2.5em 0 5em 0;
`

const MainBlock = styled(Block)`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-block: 2.5em;
	margin-top: 1.5em;
`

const Immo = () => {
	return (
		<FullPageLayout>
			<ImmoContainer>
				<Breadcrumbs>
					<StyledLink href='/'>Home</StyledLink>
					<span>Simulation de crédit immobilier</span>
				</Breadcrumbs>
				<HeroLabel
					label={'Réussissez votre prêt immobilier grâce aux simulateurs :'}
				/>
				<MainBlock>
					<Carousel items={immoItems} />
				</MainBlock>
			</ImmoContainer>
		</FullPageLayout>
	)
}

export default Immo
