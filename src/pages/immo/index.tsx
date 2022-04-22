import React from 'react'
import {FullPageLayout} from '../../layouts/fullpage.layout'
import {immoItems} from '../../utils/data'
import styled from '@emotion/styled'
import {Block} from 'baseui/block'
import {Breadcrumbs} from 'baseui/breadcrumbs'
import {StyledLink} from 'baseui/link'
import {useStyletron} from 'baseui'
import {DisplayMedium, LabelMedium} from 'baseui/typography'
import {useRouter} from 'next/router'
import SmoothList from 'react-smooth-list'
import HeroLabel from '../../components/HeroLabel/HeroLabel'

const ImmoContainer = styled(Block)`
	width: 80%;
	margin: 2.5em 0 5em 0;
`

const MainBlock = styled(Block)`
	padding-right: calc(8.33333%);
	padding-block: 2.5em 1em;
	margin-top: 1.5em;
	border-radius: 8px;
`

const SimWrapper = styled(SmoothList)`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	border-radius: 8px;
	justify-content: space-around;
	background-color: #f19164;
	padding: 48px;
	gap: 32px;
`

const SimBlock = styled(Block)`
	display: flex;
	min-height: 360px;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	border: 1px solid rgb(211, 211, 211);
	border-radius: 8px;
	padding: 24px;
	flex: 1 0 242px;
	transition: border-color 300ms ease-in-out 0s;
	cursor: pointer;
`

const SimContent = styled.div`
	display: flex;
	padding: 0.8em;
	flex-direction: column;
	align-items: start;
	width: 13em;
	gap: 15px;
`

const Immo = () => {
	const [css, theme] = useStyletron()
	const router = useRouter()

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
					<SimWrapper delay={80} transitionDuration={400}>
						{immoItems.map(
							(item: {
								id: number
								illustrationSlug: string
								title: string
								content: string
								href: string
								cta: string
							}) => (
								<SimBlock
									key={`immo-item-${item.id}`}
									onClick={() => router.push(item.href)}
									className={css({
										backgroundColor: theme.colors.backgroundPrimary,
									})}
								>
									<SimContent>
										<img
											height='88'
											width='130'
											loading='lazy'
											src={item.illustrationSlug}
											alt=''
										/>
										<strong>{item.title}</strong>
										{item.content}
										<a href={item.href}>{item.cta}</a>
									</SimContent>
								</SimBlock>
							),
						)}
					</SimWrapper>
				</MainBlock>
			</ImmoContainer>
		</FullPageLayout>
	)
}

export default Immo
