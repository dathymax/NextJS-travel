import SomeWhere from '@/components/sections/somewhere';
import Trending from '@/components/sections/trending';
import React from 'react'
import tour from "@/mock/data/tour.json"

const ToursPage = async () => {
    const tourList = tour;

    return (
        <div>
            <SomeWhere tourList={tourList} />
            <Trending />
        </div>
    )
}

export default ToursPage