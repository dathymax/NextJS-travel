import React from 'react'
import { TourTypes } from '@/types/features/tours'
import Image from 'next/image'

type PropsType = {
    tour: TourTypes
}

const SomeWhereItem = ({ tour }: PropsType) => {
    return (
        <div>
            <Image src={tour.image} alt={tour.city} width={100} height={300} className="w-[100px] h-[300px] rounded-lg" />
            {tour.city}
        </div>
    )
}

export default SomeWhereItem