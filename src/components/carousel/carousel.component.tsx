import React, {useState} from 'react'
import {useRouter} from 'next/router'
import {useStyletron} from 'baseui'
import {
	CarouselWrapper,
	Container,
	CustomSlider,
	Wrapper,
} from './carousel.styles'
import {CarouselProps} from './carousel.types'
import CarouselButton from './carouselButton.component'
import Card from '../card/card.component'

const Carousel = ({items}: CarouselProps) => {
	const [sliderRef, setSliderRef] = useState<any>(null)
	const [css, theme] = useStyletron()

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
		<Container>
			<CarouselButton sliderRef={sliderRef} isPrevious />
			<CarouselWrapper>
				<CustomSlider ref={setSliderRef} {...sliderSettings}>
					{items.map(item => (
						<Wrapper key={`immo-item-${item.id}`}>
							<Card
								title={item.title}
								headerImage={item.illustrationSlug}
								backgroundColor={theme.colors.backgroundPrimary}
								color={theme.colors.primary}
								actionButton={{href: item.href, label: item.cta}}
							>
								{item.description}
							</Card>
						</Wrapper>
					))}
				</CustomSlider>
			</CarouselWrapper>
			<CarouselButton sliderRef={sliderRef} isPrevious={false} />
		</Container>
	)
}

export default Carousel
