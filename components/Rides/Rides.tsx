import {useEffect, useState} from "react";
import {Ride} from "../../api/RidesApi/types/ride";
import {RidesClient} from "../../api/RidesApi/ridesClient";
import {RideItem} from "./components/RideItem";

export const Rides = () => {
    const [rides, setRides] = useState<Ride[]>([]);

    const fetchRides = async () => {
        const baseUrl = 'https://paristaxiflares.herokuapp.com'
        const ridesClient = new RidesClient(baseUrl)
        const rides = await ridesClient.getRides()
        setRides(rides);
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
