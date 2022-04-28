import {NextButton, PreviousButton} from './carousel.styles'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import React from 'react'
import {CarouselButtonProps} from './carousel.types'

const CarouselButton = ({sliderRef, isPrevious}: CarouselButtonProps) => {
	if (isPrevious) {
		return (
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
		)
	}

	return (
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
	)
}

export default CarouselButton
