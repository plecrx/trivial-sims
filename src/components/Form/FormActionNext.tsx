import {Button} from 'baseui/button'
import {ArrowRight} from 'baseui/icon'

type FormActionNextProps = {
	action: () => void
}

const FormActionNext = ({action}: FormActionNextProps) => {
	return (
		<Button onClick={() => action()} endEnhancer={() => <ArrowRight size={24} />}>
			Valider
		</Button>
	)
}

export default FormActionNext
