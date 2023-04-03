"use client"

import React, { useState } from 'react';
import { AiFillStar, AiOutlineUser, AiOutlineCheck, AiOutlinePlus } from "react-icons/ai"
import { BsCalendar2Range } from "react-icons/bs"
import { TbFlag3 } from "react-icons/tb"

function ProductCard() {
    const [saved, setSaved] = useState<boolean>(false);

    const handleChangeSaveProduct = (): void => {
        setSaved(prev => !prev)
    }

    return (
        <section
            style={{
                border: "1px solid lightgray"
            }}
            className='product__cart rounded-2xl w-[30%] p-6'
        >
            <div className="heading flex items-center justify-between mb-3">
                <div>
                    <div className="price">
                        <span className="text-gray-300 font-bold text-3xl line-through mr-2">$119</span>
                        <span className='text-black text-3xl font-bold mr-2'>$109</span>
                        <span className="text-gray-600">/night</span>
                    </div>
                    <div className="flex items-center">
                        <AiFillStar className='text-yellow-300 text-xl' /> <span className="font-bold mx-2">4.8</span>
                        <span className='text-[13px] text-gray-400'>(256 reviews)</span>
                    </div>
                </div>
                <div className="user">
                    <img src="/assets/mock/avatar.jpg" alt="avatar" className='w-[60px] h-[60px] rounded-full' />
                </div>
            </div>

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

            <div className="actions flex items-center gap-3 mb-6">
                <div
                    className={`flex items-center justify-center primary--hover--bg w-[30%] rounded-3xl text-center cursor-pointer py-3 font-bold ${saved ? "bg-[var(--primary)] text-white" : ""}`}
                    style={{ border: "2px solid lightgray" }}
                    onClick={handleChangeSaveProduct}
                >
                    Save {saved ? <AiOutlineCheck className='ml-2' /> : <AiOutlinePlus className='ml-2' />}
                </div>
                <div
                    className='bg-[var(--primary)] rounded-3xl text-center cursor-pointer py-3 font-bold w-[70%] text-white'
                    style={{ border: "2px solid transparent" }}
                >
                    Reserve
                </div>
            </div>

            <div className="price-info mb-6">
                <div className="flex items-center px-3 justify-between">
                    <p className='text-[14px] text-gray-500'>$119 x 7 nights</p>
                    <p className='text-[14px] text-black'>$833</p>
                </div>
                <div className="flex items-center px-3 justify-between">
                    <p className='text-[14px] text-gray-500'>10% campaign discount</p>
                    <p className='text-[14px] text-black'>-$125</p>
                </div>
                <div className="flex items-center px-3 justify-between">
                    <p className='text-[14px] text-gray-500'>Service fee</p>
                    <p className='text-[14px] text-black'>$103</p>
                </div>
                <div className="flex items-center px-3 justify-between bg-gray-100 rounded-lg">
                    <p className='text-[14px] text-black'>Total</p>
                    <p className='text-[14px] text-black'>$833</p>
                </div>
            </div>

            <p className='text-[13px] hover:text-[var(--primary)] flex items-center justify-center cursor-pointer'>
                <TbFlag3 className='mr-2' />
                Report this property
            </p>
        </section>
    );
}

export default ProductCard;