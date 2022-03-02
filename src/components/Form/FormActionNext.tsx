import {Button} from 'baseui/button'
import {ArrowRight} from 'baseui/icon'

type FormActionNextProps = {
	action: (value?: any) => void
}

const FormActionNext = ({action}: FormActionNextProps) => {
	return (
		<Button
			onClick={(value?) => action(value)}
			endEnhancer={() => <ArrowRight size={24} />}
		>
			Valider
		</Button>
	)
}

export default FormActionNext
