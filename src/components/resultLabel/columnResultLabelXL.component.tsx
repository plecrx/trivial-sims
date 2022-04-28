import {DisplayMedium, LabelLarge} from 'baseui/typography'
import React from 'react'
import {useStyletron} from 'baseui'
import {ColumnResultLabelXLProps} from './resultLabel.types'

const ColumnResultLabelXL = ({label, value}: ColumnResultLabelXLProps) => {
	const [css, theme] = useStyletron()
	return (
		<div>
			<LabelLarge color={theme.colors.primary100}>
				{label.toUpperCase()}
			</LabelLarge>
			<DisplayMedium color={theme.colors.primary100}>
				<strong>{value} €</strong>
			</DisplayMedium>
		</div>
	)
}

export default ColumnResultLabelXL
