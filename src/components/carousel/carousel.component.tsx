import React, {useState} from 'react'
import {useRouter} from 'next/router'
import {useStyletron} from 'baseui'
import {ChevronRight} from 'baseui/icon'
import {
	Card,
	CardContent, CarouselWrapper,
	Container,
	CTAButton,
	CustomSlider,
	Wrapper
} from './carousel.styles'
import {CarouselProps} from './carousel.types'
import CarouselButton from './carouselButton.component'

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
		<Container>
			<CarouselButton sliderRef={sliderRef} isPrevious />
			<CarouselWrapper>
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
			</CarouselWrapper>
			<CarouselButton sliderRef={sliderRef} isPrevious={false} />
		</Container>
	)
}

export default Carousel
