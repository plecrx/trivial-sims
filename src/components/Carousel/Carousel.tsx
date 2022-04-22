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

const Card = styled(Block)`
	min-height: 360px;
	border: 1px solid rgb(211, 211, 211);
	padding: 24px;
	transition: border-color 300ms ease-in-out 0s;
	cursor: pointer;
`

const SimContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	width: 100%;
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
		<div style={{}}>

			<Slider ref={setSliderRef} {...sliderSettings}>
				{items.map(
					(item: {
						id: number
						illustrationSlug: string
						title: string
						content: string
						href: string
						cta: string
					}) => (
						<Card
							key={`immo-item-${item.id}`}
							onClick={() => router.push(item.href)}
							backgroundColor={theme.colors.backgroundTertiary}
						>
							<SimContent>
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
							</SimContent>
						</Card>
					),
				)}
			</Slider>
			<div style={{display: 'flex', justifyContent: 'end'}}>
				<Button onClick={sliderRef?.slickPrev}>
					<FaChevronLeft />
				</Button>
				<Button onClick={sliderRef?.slickNext}>
					<FaChevronRight />
				</Button>
			</div>
		</div>
	)
}

export default Carousel
