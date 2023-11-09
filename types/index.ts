export interface ExploreTypes {
    id: number | string
    name: string
    img: string
    time: string
    distance: string | number
}

export interface DestinationTypes {
    id: number | string
    name: string
    location: number | string
    stars: number | string
    price: number | string
    img: string
}

export interface TrendingTypes {
    id: number | string
    name: string
    location: string
    img: string
    activities: number | string
    places: number | string
    days: string
    price: number | string | bigint
}

export interface TestimonialTypes {
    id: number | string | null
    name: string
    avatar: string
    text: string
}