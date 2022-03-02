import {ArrowLeft} from 'baseui/icon'
import {Button} from 'baseui/button'

type FormActionPreviousProps = {
	action: () => void
}

const FormActionPrevious = ({action}: FormActionPreviousProps) => {
	return (
		<Button onClick={action} startEnhancer={() => <ArrowLeft size={24} />}>
			Retour
		</Button>
	)
}

export default FormActionPrevious
