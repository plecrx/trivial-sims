import styled from '@emotion/styled'
import {Block} from 'baseui/block'
import {FullPageLayout} from '../../layouts/fullpage.layout'
import React from 'react'
import {Breadcrumbs} from 'baseui/breadcrumbs'
import {StyledLink} from 'baseui/link'
import {useStyletron} from 'baseui'
import {ptz_form} from '../../utils/ptz/data'
import Form from '../../components/Form/Form'
import {useRouter} from 'next/router'
import PtzResult from '../../components/PtzResult/PtzResult'

const PtzContainer = styled(Block)`
	width: 80%;
	margin: 2.5em 0 5em 0;
`

const MainBlock = styled(Block)`
	padding-left: calc(8.33333%);
	padding-right: calc(8.33333%);
	min-height: 56.5vh;
	margin-top: 1.5em;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Ptz = () => {
	const router = useRouter()
	const [css, theme] = useStyletron()

	return (
		<FullPageLayout>
			<PtzContainer>
				<Breadcrumbs>
					<StyledLink href='/'>Home</StyledLink>
					<StyledLink href='/immo'>Simulation de crédit immobilier</StyledLink>
					<span>Prêt à taux zéro</span>
				</Breadcrumbs>
				<MainBlock
					className={css({
						backgroundColor: theme.colors.tagNeutralBackground,
					})}
				>
					<Block
						className={css({
							padding: '2em',
						})}
					>
						<Form
							form={ptz_form}
							returnToMenu={() => router.push('/immo')}
							FormResultTopic={PtzResult}
						/>
					</Block>
				</MainBlock>
			</PtzContainer>
		</FullPageLayout>
	)
}
export default Ptz
