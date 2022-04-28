import React from 'react'
import {useStyletron} from 'baseui'
import {LabelLarge} from 'baseui/typography'
import {RowResultLabelLProps} from './resultLabel.types'
import {RowWrapper} from './resultLabel.styles'

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
