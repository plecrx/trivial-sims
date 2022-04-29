import styled from '@emotion/styled'
import {Block} from 'baseui/block'
import {Button} from 'baseui/button'

export const CardContainer = styled(Block)`
	height: auto;
	width: 240px;
	border-radius: 8px;
	border: 1px solid rgb(211, 211, 211);
	padding: 24px;
	transition: all 300ms ease-in-out;

	:hover {
		transform: translateY(-8px) scale(1.01);
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
`

export const CardHeader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const HeaderImage = styled.img`
	height: 88px;
	width: auto;
	margin-bottom: 20px;
`

export const CardBody = styled.div`
	height: 65%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const Title = styled.div`
	font-weight: bold;
`

export const ContentWrapper = styled.div`
	margin: 8px 0;
`

export const ActionButton = styled(Button)`
	margin-top: 24px;
	align-self: start;
	height: 60px;
	font-weight: bold;
	font-size: 14px;
	border-radius: 8px;
`
