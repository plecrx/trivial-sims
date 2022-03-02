import styled from '@emotion/styled'
import {Block} from 'baseui/block'
import {FullPageLayout} from '../../layouts/fullpage.layout'
import React from 'react'
import {Breadcrumbs} from 'baseui/breadcrumbs'
import {StyledLink} from 'baseui/link'
import {useStyletron} from 'baseui'
import {ptz_form} from '../../utils/data'
import Form from '../../components/Form/Form'

const PtzContainer = styled(Block)`
	width: 80%;
	margin: 2.5em 0 5em 0;
`

const MainBlock = styled(Block)`
	padding-left: calc(8.33333%);
	padding-right: calc(8.33333%);
	margin-top: 1.5em;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #0c806b;
`

const Ptz = () => {
	const [css, theme] = useStyletron()
	// const [projectType, setProjectType] = useState('')
	// const [firstPurchase, setFirstPurchase] = useState('')
	// const [city, setCity] = useState('')
	// const [livingPeople, setLivingPeople] = useState('')
	// const [taxRevenue, setTaxRevenue] = useState('')
	// const [housingType, setHousingType] = useState('')
	// const [projectCost, setProjectCost] = useState('')
	// const [personalContribution, setPersonalContribution] = useState('')

	return (
		<FullPageLayout>
			<PtzContainer>
				<Breadcrumbs>
					<StyledLink href='/'>Home</StyledLink>
					<StyledLink href='/immo'>Simulation de crédit immobilier</StyledLink>
					<span>Prêt à taux zéro</span>
				</Breadcrumbs>
				<MainBlock>
					<Block
						className={css({
							padding: '2em',
						})}
					>
						<Form form={ptz_form} />
					</Block>
				</MainBlock>
			</PtzContainer>
		</FullPageLayout>
	)
}
export default Ptz
