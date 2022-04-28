import {ArrowLeft} from 'baseui/icon'
import {Button, KIND, SHAPE} from 'baseui/button'
import {FormActionProps} from './form.types'

const FormActionPrevious = ({action}: FormActionProps) => (
	<Button
		kind={KIND.tertiary}
		shape={SHAPE.pill}
		onClick={action}
		startEnhancer={() => <ArrowLeft size={24} />}
		overrides={{
			BaseButton: {
				style: ({$theme}) => ({
					backgroundColor: 'transparent',
					color: $theme.colors.colorPrimary,
					':hover': {
						backgroundColor: $theme.colors.backgroundOverlayDark,
					},
				}),
			},
		}}
	>
		Retour
	</Button>
)

export default FormActionPrevious
