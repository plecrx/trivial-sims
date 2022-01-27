import React, {useEffect, useState, Fragment} from "react";
import {Ride} from "../../api/RidesApi/types/ride";
import {RidesClient} from "../../api/RidesApi/ridesClient";
import { ListHeading, ListItem, ListItemLabel } from 'baseui/list'
import styled from '@emotion/styled'
import { Display, Display3, Display4, H4, H5, Label1, Label2 } from 'baseui/typography'

const Container = styled.div`
    margin-inline: 20em
`

export const Rides = () => {
    const [rides, setRides] = useState<Ride[]>([]);

    const fetchRides = async () => {
        const baseUrl = 'https://paristaxiflares.herokuapp.com'
        const ridesClient = new RidesClient(baseUrl)
        const _rides = await ridesClient.getRides()
        setRides(_rides);
    };

    useEffect(() => {
        fetchRides();
    }, []);

    return (
        <Container>
            <ListHeading heading={<Display4>Popular</Display4>}/>
            {rides.map(ride => (
                    <ListItem endEnhancer={() => <ListItemLabel>€{ride.price}</ListItemLabel>}>
                        <ListItemLabel description={
                            <Fragment>
                                <>{ride.startTime}</>
                                <div style={{width: '18px'}} />
                                <>{ride.distance} km</>
                            </Fragment>}
                        >
                            {ride.date}</ListItemLabel>
                    </ListItem>
            ))}
        </Container>
    )
}
