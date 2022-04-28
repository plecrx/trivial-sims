import MainLayout from '../../layouts/main.layout'
import React from 'react'
import {useStyletron} from 'baseui'
import {SIZE} from 'baseui/button'
import {ArrowRight} from 'baseui/icon'
import {useRouter} from 'next/router'

import {StyledButton} from './noPageFound.styles'
const NoPageFound = () => {
	const [css, theme] = useStyletron()
	const router = useRouter()

	return (
		<MainLayout
			className={css({
				backgroundColor: theme.colors.tagPrimaryOutlinedHover,
				flexDirection: 'column',
				padding: '32px',
			})}
		>
			<img
				height='200'
				width='200'
				loading='lazy'
				src={'/warning_orange.svg'}
				alt=''
			/>
			<StyledButton
				size={SIZE.large}
				endEnhancer={() => <ArrowRight size={24} />}
				onClick={() => router.back()}
			>
				Retourner au menu
			</StyledButton>
		</MainLayout>
	)
}

export default NoPageFound
