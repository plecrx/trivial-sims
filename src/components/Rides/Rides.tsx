import React, {useEffect, useState} from 'react'
import {Ride} from '../../api/RidesApi/types/ride'
import {RidesClient} from '../../api/RidesApi/ridesClient'
import {ListHeading, ListItem} from 'baseui/list'
import styled from '@emotion/styled'
import {H1} from 'baseui/typography'
import {Spinner} from 'baseui/spinner'
import {ArrowDown} from 'baseui/icon'
import {Block} from 'baseui/block'

const Container = styled(Block)`
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
`

const StyledList = styled.div`
	width: 60em;
`

export const Rides = () => {
	const [rides, setRides] = useState<Ride[]>([])
	const [loading, setLoading] = useState<boolean>(false)

	const fetchRides = async () => {
		const baseUrl = 'https://paristaxiflares.herokuapp.com'
		const ridesClient = new RidesClient(baseUrl)
		const _rides = await ridesClient.getRides()
		setRides(_rides)
		setLoading(false)
	}

	useEffect(() => {
		setLoading(true)
		fetchRides()
	}, [])

	return (
		<Container
			overrides={{
				Block: {
					style: ({$theme}) => ({
						backgroundColor: $theme.colors.backgroundPrimary,
					}),
				},
			}}
		>
			<StyledList>
				<ListItem
					artwork={ArrowDown}
					artworkSize={64}
					overrides={{
						Root: {
							style: ({$theme}) => ({
								color: $theme.colors.primary,
								backgroundColor: $theme.colors.backgroundSecondary,
							}),
						},
					}}
				>
					<H1>Choose a trip</H1>
				</ListItem>
				{!loading ? (
					rides.map(ride => (
						<ListHeading
							key={`ride-${ride.id}`}
							heading={ride.date}
							subHeading={ride.startTime}
							endEnhancer={`€${ride.price}`}
							endEnhancerDescription={`${ride.distance} km`}
							overrides={{
								Root: {
									style: ({$theme}) => ({
										backgroundColor: $theme.colors.backgroundSecondary,
										color: $theme.colors.primary,
									}),
								},
							}}
						/>
					))
				) : (
					<Spinner />
				)}
			</StyledList>
		</Container>
	)
}
