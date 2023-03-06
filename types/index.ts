export type ExploreTypes = {
    id: number | string
    name: string
    img: string
    time: string
    distance: string | number
}

export type DestinationTypes = {
    id: number | string
    name: string
    location: number | string
    stars: number | string
    price: number | string
    img: string
}

export type TrendingTypes = {
    id: number | string
    name: string
    location: string
    img: string
    activities: number | string
    places: number | string
    days: string
    price: number | string | bigint
}

export type TestimonialTypes = {
    id: number | string | null
    name: string
    avatar: string
    text: string
}