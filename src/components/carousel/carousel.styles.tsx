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
