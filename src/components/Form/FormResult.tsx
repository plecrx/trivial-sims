import {Button, SHAPE} from 'baseui/button'
import styled from '@emotion/styled'
import {FaUndo} from 'react-icons/fa'
import PtzResult from '../PtzResult/PtzResult'

const FormDoubleActionWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 10px;
`

type FormResultProps = {
	answers: any
	returnToMenu: () => void
	resetForm: () => void
}

const FormResult = ({answers, resetForm, returnToMenu}: FormResultProps) => (
	<div>
		<PtzResult data={answers} />
		<FormDoubleActionWrapper>
			<Button
				shape={SHAPE.pill}
				onClick={resetForm}
				startEnhancer={() => <FaUndo size={20} />}
			>
				Refaire simulation
			</Button>
			<Button onClick={returnToMenu}>Menu</Button>
		</FormDoubleActionWrapper>
	</div>
)

export default FormResult
