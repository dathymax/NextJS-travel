import React from 'react';
import "./somewhere.scss";
import TourItem from './item/SomeWhereItem';
import { TourTypes } from '@/types/features/tours';
import { AiOutlineDollarCircle } from "react-icons/ai"

type PropsTypes = {
    tourList: TourTypes[]
}

const SomeWhere = ({ tourList }: PropsTypes) => {
    return (
        <section className='tour-page bg-slate-200 rounded-2xl p-14'>
            <div className="tour-page__heading mb-12">
                <h2 className='font-bold text-4xl mb-2'>Go somewhere</h2>
                <p className='text-gray-600 text-xl'>Let's go on an adventure</p>
            </div>

            <div className="tour-page__categories mb-10 flex items-center justify-between">
                <ul className="list-none">
                    <li className='tour-page__categories-item primary--hover--bg cursor-pointer active text-gray-600 inline-flex items-center px-2 py-[1.] mr-5 rounded-xl'>
                        <AiOutlineDollarCircle className='mr-2' />
                        Featured
                    </li>
                    <li className='tour-page__categories-item primary--hover--bg cursor-pointer text-gray-600 inline-flex items-center px-2 py-[1.] mr-5 rounded-xl'>
                        <AiOutlineDollarCircle className='mr-2' />
                        Family-friendly
                    </li>
                    <li className='tour-page__categories-item primary--hover--bg cursor-pointer text-gray-600 inline-flex items-center px-2 py-[1.] mr-5 rounded-xl'>
                        <AiOutlineDollarCircle className='mr-2' />
                        On sale
                    </li>
                    <li className='tour-page__categories-item primary--hover--bg cursor-pointer text-gray-600 inline-flex items-center px-2 py-[1.] mr-5 rounded-xl'>
                        <AiOutlineDollarCircle className='mr-2' />
                        Sub nav
                    </li>
                </ul>

                <div className='bg-white p-3 rounded-xl'>
                    <p>
                        Recently added
                    </p>
                </div>
            </div>

            <div>
                {tourList.map(tour => {
                    return <TourItem key={tour.id} tour={tour} />
                })}
            </div>
        </section>
    )
}

export default SomeWhere