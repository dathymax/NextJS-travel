import React from 'react';
import { AiOutlineUser } from "react-icons/ai"
import { BsCalendar2Range } from "react-icons/bs"

function ProductCartBookingInfo() {
    return (
        <div className="bg-gray-100 my-6 rounded-2xl gap-3 divide-x-2 divide-slate-800 p-6 wrap">
            <div className='flex items-center justify-between mb-4'>
                <div className="flex items-center w-[50%]">
                    <BsCalendar2Range className='text-gray-400 font-bold mr-3 text-xl' />
                    <div className='checkin'>
                        <p className='text-[12px] m-0'>Check-in</p>
                        <p className='text-md text-black font-[600] m-0'>May 15, 2023</p>
                    </div>
                </div>
                <div className="flex items-center w-[50%]">
                    <BsCalendar2Range className='text-gray-400 font-bold mr-3 text-xl' />
                    <div className='checkout'>
                        <p className='text-[12px] m-0'>Check-out</p>
                        <p className='text-md text-black font-[600] m-0'>May 22, 2023</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex items-center w-[50%]">
                    <AiOutlineUser className='text-gray-400 font-bold mr-3 text-xl' />
                    <div className='guest'>
                        <p className='text-[12px] m-0'>Guest</p>
                        <p className='text-md text-black font-[600] m-0'>2 guests</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCartBookingInfo;