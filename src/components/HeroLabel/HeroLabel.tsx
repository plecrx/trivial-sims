import {DisplayMedium} from 'baseui/typography'
import React from 'react'
import styled from '@emotion/styled'
import {Block} from 'baseui/block'

const HeroContainer = styled(Block)`
	margin: 16px 0;
`

type HeroLabelProps = {
	label: string
}

const HeroLabel = ({label}: HeroLabelProps) => (
	<HeroContainer>
		<DisplayMedium>
			<strong>{label}</strong>
		</DisplayMedium>
	</HeroContainer>
)

export default HeroLabel
