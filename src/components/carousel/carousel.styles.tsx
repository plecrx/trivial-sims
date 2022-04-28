import styled from '@emotion/styled'
import {Button} from 'baseui/button'
import Slider from 'react-slick'
import {Block} from 'baseui/block'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Container = styled.div`
	position: relative;

	@media only screen and (min-width: 1025px) {
		width: 85%;
	}
	@media only screen and (max-width: 1024px) {
		width: 140%;
	}
`

export const PreviousButton = styled(Button)`
	z-index: 2;
	width: 8%;
	position: absolute;
	border-radius: 8px 0 0 8px;
	opacity: 0.5;
	top: 0;
	left: 0;
	height: 100%;
`

export const NextButton = styled(Button)`
	position: absolute;
	border-radius: 0 8px 8px 0;
	opacity: 0.5;
	width: 8%;
	top: 0;
	right: 0;
	height: 100%;
	background: linear-gradient(to left, #596275, 20%, transparent);
`

export const CarouselWrapper = styled.div`
	width: 100%;
`

export const CustomSlider = styled(Slider)`
	background: lightgrey;
	border-radius: 8px;
`

export const Wrapper = styled.div`
	display: flex !important;
	margin: 32px 0;
	padding: 16px;
	height: 424px;
	width: auto;
`

export const Card = styled(Block)`
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

export const CardContent = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 16px;
`

export const CTAButton = styled(Button)`
	align-self: start;
	max-height: 60px;
	font-weight: bold;
	font-size: 14px;
	border-radius: 8px;
`
