import React from 'react'
import {Block} from 'baseui/block'
import {Breadcrumbs} from 'baseui/breadcrumbs'
import styled from '@emotion/styled'
import {DisplaySmall, LabelLarge, ParagraphMedium} from 'baseui/typography'
import {homeItems} from '../utils/data'
import {StyledLink} from 'baseui/link'
import {ChevronRight} from 'baseui/icon'
import {useStyletron} from 'baseui'
import {FullPageLayout} from '../layouts/fullpage.layout'

const HomeContainer = styled(Block)`
	margin: 1em 20em 5em 20em;
	width: 100%;
`

export const Home = () => {
	const [css, theme] = useStyletron()

	return (
		<FullPageLayout>
			<HomeContainer>
				<Breadcrumbs>
					<span>Home</span>
				</Breadcrumbs>
				{homeItems.map((item, index) => (
					<Block
						key={`home-item-${index}`}
						overrides={{
							Block: {
								style: ({$theme}) => ({
									backgroundColor: $theme.colors.backgroundPrimary,
									padding: '3em',
									marginTop: '1.5em',
								}),
							},
						}}
					>
						<DisplaySmall marginBottom='scale500'>
							<strong>{item.title}</strong>
						</DisplaySmall>
						<ParagraphMedium>{item.description}</ParagraphMedium>
						<LabelLarge>
							<StyledLink
								href={item.link.url}
								className={css({
									alignItems: 'center',
									color: theme.colors.contentPrimary,
									display: 'flex',
									paddingBottom: theme.sizing.scale500,
								})}
							>
								<strong>{item.link.label}</strong>
								<ChevronRight size={30} />
							</StyledLink>
						</LabelLarge>
					</Block>
				))}
			</HomeContainer>
		</FullPageLayout>
	)
}

export default Home
