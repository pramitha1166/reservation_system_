export interface Location {
    locatio_id: number,
    country: string,
    city: string
}

export interface SearchLocation {
    id: number,
    location: string
}

export interface SearchLocationList {
    result: Array<SearchLocation>,
    total: number
}