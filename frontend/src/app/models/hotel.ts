import { Location } from "./location";

export interface Hotel {
    hotel_id: number,
    name: string,
    description: string,
    image: string,
    swimmingPool: boolean,
    airportShuttle: boolean,
    freeWifi: boolean,
    nonSmokingRooms: boolean,
    bar: boolean,
    goodBreakFast: boolean,
    roomService: boolean,
    location: Location
}

export interface Hotels {
    result: Array<Hotel>,
    totalItems: number,
    totalPages: number,
    currentPage: number
}