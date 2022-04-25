import {LabelLarge} from 'baseui/typography'
import React from 'react'
import styled from '@emotion/styled'
import {useStyletron} from 'baseui'

const RowWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	-moz-box-align: center;
	align-items: center;
	-moz-box-pack: justify;
	gap: 160px;
`

type RowResultLabelLProps = {
	label: string
	value: string
}

const RowResultLabelL = ({label, value}: RowResultLabelLProps) => {
	const [css, theme] = useStyletron()

	return (
		<RowWrapper style={{color: theme.colors.primary100}}>
			<LabelLarge color={theme.colors.primary100}>
				{label.toUpperCase()}
			</LabelLarge>
			<LabelLarge color={theme.colors.primary100}>{value} €</LabelLarge>
		</RowWrapper>
	)
}

export default RowResultLabelL
