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

const ItemBlock = styled(Block)`
	padding: 3em;
	margin-top: 1.5em;
	width: 100%;
`

const ItemLink = styled(StyledLink)`
	display: flex;
	align-items: center;
`

const HomeContainer = styled(Block)`
	width: 50%;
	padding-top: 1.5em;
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
					<ItemBlock
						key={`home-item-${index}`}
						className={css({backgroundColor: theme.colors.backgroundPrimary})}
					>
						<DisplaySmall marginBottom='scale500'>
							<strong>{item.title}</strong>
						</DisplaySmall>
						<ParagraphMedium>{item.description}</ParagraphMedium>
						<LabelLarge>
							<ItemLink
								href={item.link.url}
								className={css({
									color: theme.colors.contentPrimary,
									paddingBottom: theme.sizing.scale500,
								})}
							>
								<strong>{item.link.label}</strong>
								<ChevronRight size={30} />
							</ItemLink>
						</LabelLarge>
					</ItemBlock>
				))}
			</HomeContainer>
		</FullPageLayout>
	)
}

export default Home
