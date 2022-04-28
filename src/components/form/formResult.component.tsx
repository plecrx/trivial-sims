import {FaUndo} from 'react-icons/fa'
import {Button, SHAPE} from 'baseui/button'
import {FormDoubleActionWrapper} from './form.styles'
import {FormResultProps} from './form.types'

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
