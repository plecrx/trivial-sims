import React, {useState} from 'react'
import Slider from 'react-slick'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {useRouter} from 'next/router'
import styled from '@emotion/styled'
import {Block} from 'baseui/block'
import {useStyletron} from 'baseui'
import {Button} from 'baseui/button'
import {ChevronRight} from 'baseui/icon'

const CarouselWrapper = styled.div`
	position: relative;

	@media only screen and (min-width: 1025px) {
		width: 70%;
	}
	@media only screen and (max-width: 1024px) {
		width: 110%;
	}
`

const PreviousButton = styled(Button)`
	z-index: 2;
	width: 8%;
	position: absolute;
	border-radius: 8px 0 0 8px;
	opacity: 0.5;
	top: 0;
	left: 0;
	height: 100%;
`

const NextButton = styled(Button)`
	position: absolute;
	border-radius: 0 8px 8px 0;
	opacity: 0.5;
	width: 8%;
	top: 0;
	right: 0;
	height: 100%;
	background: linear-gradient(to left, #596275, 20%, transparent);
`

const CustomSlider = styled(Slider)`
	background-color: #f19164;
	border-radius: 8px;
`

const Wrapper = styled.div`
	display: flex !important;
	margin: 32px 0;
	padding: 16px;
	height: 384px;
	width: 240px;
`

const Card = styled(Block)`
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

const CardContent = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 16px;
`

const CTAButton = styled(Button)`
	align-self: start;
	max-height: 50px;
	font-weight: bold;
	border-radius: 8px;
`

type CarouselProps = {
	items: {
		id: number
		title: string
		description: string
		cta: string
		href: string
		illustrationSlug: string
	}[]
}

const Carousel = ({items}: CarouselProps) => {
	const [sliderRef, setSliderRef] = useState<any>(null)
	const [css, theme] = useStyletron()
	const router = useRouter()

	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		arrows: false,
		centerMode: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1744,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	}

	return (
		<CarouselWrapper>
			<PreviousButton
				onClick={sliderRef?.slickPrev}
				overrides={{
					BaseButton: {
						style: ({$theme}) => ({
							background: `linear-gradient(to right, ${$theme.colors.primaryA}, 20%, transparent)`,
						}),
					},
				}}
			>
				<FaChevronLeft />
			</PreviousButton>
			<div style={{width: '100%'}}>
				<CustomSlider ref={setSliderRef} {...sliderSettings}>
					{items.map(item => (
						<Wrapper key={`immo-item-${item.id}`}>
							<Card
								backgroundColor={theme.colors.backgroundPrimary}
								color={theme.colors.primary}
							>
								<CardContent>
									<div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
										<img
											height='88'
											width='130'
											loading='lazy'
											src={item.illustrationSlug}
											alt=''
										/>
										<strong>{item.title}</strong>
										{item.description}
									</div>
									<CTAButton
										endEnhancer={() => <ChevronRight size={24} />}
										onClick={() => router.push(item.href)}
									>
										{item.cta}
									</CTAButton>
								</CardContent>
							</Card>
						</Wrapper>
					))}
				</CustomSlider>
			</div>
			<NextButton
				onClick={sliderRef?.slickNext}
				overrides={{
					BaseButton: {
						style: ({$theme}) => ({
							background: `linear-gradient(to left, ${$theme.colors.primaryA}, 20%, transparent)`,
						}),
					},
				}}
			>
				<FaChevronRight />
			</NextButton>
		</CarouselWrapper>
	)
}

export default Carousel
