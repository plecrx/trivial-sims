import {Button, SHAPE} from 'baseui/button'
import styled from '@emotion/styled'
import {FaUndo} from 'react-icons/fa'

const FormDoubleActionWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 10px;
`

type FormResultProps = {
	children: JSX.Element
	returnToMenu: () => void
	resetForm: () => void
}

const FormResult = ({children, resetForm, returnToMenu}: FormResultProps) => (
	<div>
		{children}
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
