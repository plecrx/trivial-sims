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

const PreviousButton = styled(Button)`
	z-index: 2;
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
	top: 0;
	right: 0;
	height: 100%;
	background: linear-gradient(to left, #596275, 20%, transparent);
`

const CustomSlider = styled(Slider)`
	background-color: rgb(0, 104, 85);
	height: 400px;
	display: flex;
	align-items: center;
`

const Wrapper = styled.div`
	width: 272px;
	height: 320px;
	padding: 8px;
`

const Card = styled(Block)`
	height: 100%;
	border-radius: 8px;
	border: 1px solid rgb(211, 211, 211);
	padding: 24px;
	transition: border-color 300ms ease-in-out 0s;
`

const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`

type CarouselProps = {
	items: any[]
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
		centerPadding: '60px',
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
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
		<div style={{position: 'relative'}}>
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
			<div>
				<CustomSlider ref={setSliderRef} {...sliderSettings}>
					{items.map(
						(item: {
							id: number
							illustrationSlug: string
							title: string
							content: string
							href: string
							cta: string
						}) => (
							<Wrapper key={`immo-item-${item.id}`}>
								<Card
									onClick={() => router.push(item.href)}
									backgroundColor={theme.colors.backgroundPrimary}
									color={theme.colors.primary}
								>
									<CardContent>
										<img
											height='88'
											width='130'
											loading='lazy'
											src={item.illustrationSlug}
											alt=''
										/>
										<strong>{item.title}</strong>
										{item.content}
										<a href={item.href}>{item.cta}</a>
									</CardContent>
								</Card>
							</Wrapper>
						),
					)}
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
		</div>
	)
}

export default Carousel
