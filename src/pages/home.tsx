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
import {Button} from 'baseui/button'
import {useRouter} from 'next/router'

const ItemBlock = styled(Block)`
	padding: 3em;
	margin-top: 1.5em;
	border-radius: 8px;
	width: 100%;
	transition: all 300ms ease-in-out;

	:hover {
		transform: translateY(-8px) scale(1.01);
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
`

const ItemTitle = styled(DisplaySmall)`
	font-size: calc(1.1rem + 2vw);
`

export const Home = () => {
	const [css, theme] = useStyletron()
	const router = useRouter()

	return (
		<FullPageLayout>
			<Breadcrumbs>
				<span>Home</span>
			</Breadcrumbs>
			<SmoothList>
				{homeItems.map((item, index) => (
					<ItemBlock
						key={`home-item-${index}`}
						className={css({
							backgroundColor: theme.colors.backgroundPrimary,
							borderRadius: '4px',
						})}
					>
						<ItemTitle marginBottom='scale500'>
							<strong>{item.title}</strong>
						</ItemTitle>
						<ParagraphMedium $style={{fontSize: '16px', color: '#0a0a0a'}}>
							{item.description}
						</ParagraphMedium>
						<LabelLarge>
							<Button onClick={() => router.push(item.link.url)}>
								<strong>Découvrir</strong>
								<ChevronRight size={30} />
							</Button>
						</LabelLarge>
					</ItemBlock>
				))}
			</SmoothList>
		</FullPageLayout>
	)
}

export default Home
