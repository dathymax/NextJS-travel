"use client"

import React, { useState } from 'react';
import "./somewhere.scss";
import TourItem from './item/SomeWhereItem';
import { TourTypes } from '@/types/features/tours';
import { AiOutlineDollarCircle } from "react-icons/ai"

type PropsTypes = {
    tourList: TourTypes[]
}

const categories = [
    {
        key: "featured",
        icon: <AiOutlineDollarCircle className='mr-2' />,
        name: "Featured"
    },
    {
        key: "familyFriendly",
        icon: <AiOutlineDollarCircle className='mr-2' />,
        name: "Family-friendly"
    },
    {
        key: "onSale",
        icon: <AiOutlineDollarCircle className='mr-2' />,
        name: "On sale"
    },
    {
        key: "subNav",
        icon: <AiOutlineDollarCircle className='mr-2' />,
        name: "Sub nav"
    },
]

const SomeWhere: React.FC<PropsTypes> = ({ tourList }: PropsTypes) => {
    const [activeCat, setActiveCat] = useState<string>("featured");

    console.log(activeCat)

    const handleChangeActiveCat = (key: string): void => {
        setActiveCat(key)
    }

    return (
        <section className='tour-page bg-slate-200 rounded-2xl p-14'>
            <div className="tour-page__heading mb-12">
                <h2 className='font-bold text-4xl mb-2'>Go somewhere</h2>
                <p className='text-gray-600 text-xl'>Let's go on an adventure</p>
            </div>

            <div className="tour-page__categories mb-10 flex items-center justify-between">
                <ul className="list-none">
                    {categories.map(category => {
                        return (
                            <li
                                key={category.key}
                                className={`tour-page__categories-item ${activeCat === category.key ? "active" : ""} primary--hover--bg cursor-pointer text-gray-600 inline-flex items-center px-2 py-1 mr-5 rounded-xl`}
                                onClick={() => handleChangeActiveCat(category.key)}
                            >
                                {category.icon}
                                {category.name}
                            </li>
                        )
                    })}
                </ul>

                <div className='bg-white p-3 rounded-xl'>
                    <p>
                        Recently added
                    </p>
                </div>
            </div>

            <div className='flex items-center gap-10'>
                {tourList.map(tour => {
                    return <TourItem key={tour.id} tour={tour} />
                })}
            </div>
        </section>
    )
}

export default SomeWhere