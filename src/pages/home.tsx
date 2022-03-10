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
import SmoothList from 'react-smooth-list'

const ItemBlock = styled(Block)`
	padding: 3em;
	margin-top: 1.5em;
	border-radius: 8px;
	width: 100%;
`

const ItemTitle = styled(DisplaySmall)`
	font-size: calc(1.1rem + 2vw);
`

const ItemLink = styled(StyledLink)`
	display: flex;
	align-items: center;
`

const HomeContainer = styled(Block)`
	width: 80%;
	margin: 2.5em 0 5em 0;
`

export const Home = () => {
	const [css, theme] = useStyletron()

	return (
		<FullPageLayout>
			<HomeContainer>
				<Breadcrumbs>
					<span>Home</span>
				</Breadcrumbs>
				<SmoothList>
					{homeItems.map((item, index) => (
						<ItemBlock
							key={`home-item-${index}`}
							className={css({backgroundColor: theme.colors.backgroundPrimary})}
						>
							<ItemTitle marginBottom='scale500'>
								<strong>{item.title}</strong>
							</ItemTitle>
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
				</SmoothList>

			</HomeContainer>
		</FullPageLayout>
	)
}

export default Home
