import styled from '@emotion/styled'
import {Block} from 'baseui/block'

export const CustomAnimationDiv = styled.div`
	animation-duration: 0.5s;
	animation-name: slidein;

	@keyframes slidein {
		from {
			margin-left: 10%;
			width: 100%;
		}

		to {
			margin-left: 0;
			width: 100%;
		}
	}
`

export const FormDoubleActionWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 10px;
`

export const InputCityContainer = styled(Block)`
	display: flex;
	flex-direction: column;
	margin: 1em 0;
	gap: 1em;
`

export const InputMoneyContainer = styled(Block)`
	display: flex;
	flex-direction: column;
	margin: 1em 0;
	gap: 1em;
`

export const InputSelectBlock = styled(Block)`
	cursor: pointer;
	margin: 1em 0;
	padding: 1em;
	text-align: center;
	border-radius: 8px;
	display: flex;
	justify-content: space-between;
	gap: 15px;
`
