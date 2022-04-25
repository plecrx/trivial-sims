import {HeadingXXLarge} from 'baseui/typography'
import React from 'react'

type HeadingTitleProps = {
	title: string
}

const HeadingTitle = ({title}: HeadingTitleProps) => {
	return (
		<HeadingXXLarge>
			<strong>{title}</strong>
		</HeadingXXLarge>
	)
}

export default HeadingTitle
