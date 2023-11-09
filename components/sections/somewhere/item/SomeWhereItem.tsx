import React from 'react'
import { TourTypes } from '@/types/features/tours'
import Image from 'next/image'
import Link from 'next/link'

type PropsType = {
    tour: TourTypes
}

const SomeWhereItem: React.FC<PropsType> = ({ tour }: PropsType) => {

    return (
        <Link href={"/stays-product"} className='basis-1/4 rounded-lg overflow-hidden'>
            <div className='transition-all w-full h-[200px] overflow-hidden'>
                <Image src={tour.image} alt={tour.city} width={10000} height={200} className="transition-all ease-in duration-700 object-cover hover:scale-[1.2]" />
            </div>
            <div className='bg-white p-5'>
                <div className="flex items-center justify-between">
                    <p>{tour.city}</p>
                    <div
                        className='border-2 border-green-500 rounded-md p-1 text-[13px]'
                        style={{ border: "2px solid lightgreen" }}
                    >
                        <p className='m-0 font-bold'>{tour.currency}
                            {tour.oldPrice}</p>
                        <p className='m-0 font-bold text-green-500'>{tour.currency}
                            {tour.currentPrice}</p>
                    </div>
                </div>

                <hr className='my-4' />

                <div className='flex items-center justify-between text-[13px] font-bold'>
                    <p>
                        {`${tour.startDate} - ${tour.endDate}`}
                    </p>

                    <p>
                        {tour.rate}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default SomeWhereItem