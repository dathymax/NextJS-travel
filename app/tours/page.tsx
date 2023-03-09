import SomeWhere from '@/components/somewhere'
import Trending from '@/components/trending'
import React from 'react'

export async function getTours() {
    const tourList = [
        {
            id: 1,
            country: "Viet Nam",
            city: "Ha Noi",
            price: 500000,
            image: "/assets/mock/tour-image.jpg",
            startDate: new Date(),
            endDate: new Date(),
            discount: 150000,
            rate: 5
        }
    ];

    return tourList;
}

const ToursPage = async () => {
    const tourList = await getTours();

    return (
        <div>
            <SomeWhere tourList={tourList} />
            <Trending />
        </div>
    )
}

export default ToursPage