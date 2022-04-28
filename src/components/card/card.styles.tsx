import styled from '@emotion/styled'
import {Block} from 'baseui/block'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`

export const Content = styled(Block)`
	display: flex;
	flex-direction: column;
	box-shadow: rgba(0, 0, 0, 0.15) 0 2px 8px;
	border: 1px solid rgb(211, 211, 211);
	border-radius: 8px;
	padding: 32px;
	transition: border-color 300ms ease-in-out 0s;
	&:focus {
		outline: transparent;
	}
`
