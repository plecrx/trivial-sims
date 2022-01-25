import HttpClient from "../httpClient";
import {Ride} from "./types/ride";

export class RidesClient extends HttpClient {
    async getRides(): Promise<Ride[]> {

        const response = await this.instance.get<Ride[]>('/rides') ;

        if (response){
            return response.data;
        }

        return [];
    }
}
