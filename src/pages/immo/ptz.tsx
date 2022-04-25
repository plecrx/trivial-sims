import {Block} from 'baseui/block'
import {FullPageLayout} from '../../layouts/fullpage.layout'
import React from 'react'
import {Breadcrumbs} from 'baseui/breadcrumbs'
import {StyledLink} from 'baseui/link'
import {ptz_form} from '../../utils/ptz/data'
import Form from '../../components/Form/Form'
import {useRouter} from 'next/router'
import PtzResult from '../../components/PtzResult/PtzResult'
import MainLayout from '../../layouts/main.layout'

const Ptz = () => {
	const router = useRouter()

	return (
		<FullPageLayout>
			<Breadcrumbs>
				<StyledLink href='/'>Home</StyledLink>
				<StyledLink href='/immo'>Simulation de crédit immobilier</StyledLink>
				<span>Prêt à taux zéro</span>
			</Breadcrumbs>
			<MainLayout>
				<Block padding={'2em'}>
					<Form
						form={ptz_form}
						returnToMenu={() => router.push('/immo')}
						FormResultTopic={PtzResult}
					/>
				</Block>
			</MainLayout>
		</FullPageLayout>
	)
}
export default Ptz
