import React from 'react'
import {DisplayMedium} from 'baseui/typography'
import {HeroContainer} from './heroLabel.styles'
import {HeroLabelProps} from './heroLabel.types'

const HeroLabel = ({label}: HeroLabelProps) => (
	<HeroContainer>
		<DisplayMedium>
			<strong>{label}</strong>
		</DisplayMedium>
	</HeroContainer>
)

export default HeroLabel
