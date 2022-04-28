import React from 'react'
import {HeadingXXLarge} from 'baseui/typography'
import {HeadingTitleProps} from './headingTitle.types'

const HeadingTitle = ({title}: HeadingTitleProps) => {
	return (
		<HeadingXXLarge>
			<strong>{title}</strong>
		</HeadingXXLarge>
	)
}

export default HeadingTitle
