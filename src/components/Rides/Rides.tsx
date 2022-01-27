import React, {useEffect, useState} from "react";
import {Ride} from "../../api/RidesApi/types/ride";
import {RidesClient} from "../../api/RidesApi/ridesClient";
import {RideItem} from "./components/RideItem";

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
        <div >
            {rides.map(ride => (
                <RideItem key={`ride-${ride.id}`} ride={ride}/>
            ))}
        </div>
    )
}
