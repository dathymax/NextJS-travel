import SomeWhere from '@/components/sections/somewhere';
import Trending from '@/components/sections/trending';
import React from 'react'
import tour from "@/mock/data/tour.json"

export async function getTours() {
    const tourList = tour;

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