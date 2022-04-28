import styled from '@emotion/styled'
import {Block} from 'baseui/block'

export const WrapperBlock = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	gap: 0.5rem;
`

export const CustomAnimationBlock = styled(Block)`
	border-radius: 8px;
	padding: 2em;
	margin-block: 2em;
	animation-duration: 0.5s;
	animation-name: slidein;

	@keyframes slidein {
		from {
			margin-bottom: 5em;
			width: 100%;
		}

		to {
			margin-bottom: 2em;
			width: 100%;
		}
	}
`
