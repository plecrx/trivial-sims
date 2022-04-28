export type CarouselProps = {
	items: {
		id: number
		title: string
		description: string
		cta: string
		href: string
		illustrationSlug: string
	}[]
}

export type CarouselButtonProps = {
	sliderRef: any
	isPrevious: boolean
}
