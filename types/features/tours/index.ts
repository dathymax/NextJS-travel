export interface TourTypes {
    id: string | number
    city: string
    country: string
    currentPrice: number
    image: string
    startDate: Date | string
    endDate: Date | string
    discount: number
    rate: number
    currency: string
    oldPrice: number
}