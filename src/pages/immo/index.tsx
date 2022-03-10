import React from 'react'
import {FullPageLayout} from '../../layouts/fullpage.layout'
import {immoItems} from '../../utils/data'
import styled from '@emotion/styled'
import {Block} from 'baseui/block'
import {Breadcrumbs} from 'baseui/breadcrumbs'
import {StyledLink} from 'baseui/link'
import {useStyletron} from 'baseui'
import {LabelMedium} from 'baseui/typography'
import {useRouter} from 'next/router'

const ImmoContainer = styled(Block)`
	width: 80%;
	margin: 2.5em 0 5em 0;
`

const MainBlock = styled(Block)`
	padding-left: calc(8.33333%);
	padding-right: calc(8.33333%);
	padding-block: 2.5em 1em;
	margin-top: 1.5em;
	border-radius: 8px;
`

const SimWrapper = styled(Block)`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	margin: 2em 0;
	gap: 24px;
	padding: 0 0 24px;
`

const SimBlock = styled(Block)`
	display: flex;
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
	const textColor = theme.colors.colorPrimary

	return (
		<FullPageLayout>
			<ImmoContainer>
				<Breadcrumbs>
					<StyledLink href='/'>Home</StyledLink>
					<span>Simulation de crédit immobilier</span>
				</Breadcrumbs>
				<MainBlock
					className={css({
						backgroundColor: theme.colors.tagPrimaryOutlinedHover,
					})}
				>
					<LabelMedium color={textColor}>
						REUSSISSEZ VOTRE PRÊT IMMO GRÂCE AUX SIMULATEURS !
					</LabelMedium>
					<SimWrapper>
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
