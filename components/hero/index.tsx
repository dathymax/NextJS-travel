import React from 'react'
import Image from 'next/image';
import Background from '@/assets/backgrounds/hero.jpg';
import { CiLocationArrow1 } from "react-icons/ci";
import { BsSearch, BsCalendar2Event } from 'react-icons/bs';
import { AiOutlineUser } from "react-icons/ai";
import "./hero.scss";

const HeroBanner = () => {
    return (
        <div className='hero__introduce h-screen'>
            <Image src={Background} alt="Background" className='hero__introduce__hero w-full h-[80vh] rounded-2xl saturate-50 drop-shadow-2xl' />
            <div className="hero__introduce__title text-white">
                <h2 className="font-bold text-7xl">
                    Air, sleep, dream
                </h2>
                <p className='mt-2'>
                    Find and book a great experience.
                </p>
                <p className='mt-2 transition-all bg-transparent border-white border-2 w-[60%] text-center rounded-3xl p-2 cursor-pointer hover:bg-white hover:text-black'>
                    Start your search
                </p>
            </div>
            <div className="hero__introduce__actions rounded-2xl shadow-2xl">
                <ul className="list-none navigation__menu category__menu">
                    <li className='navigation__menu__item active pb-3 inline-block mr-10 text-[14px] font-bold cursor-pointer hover:text-green-400'>Stays</li>
                    <li className='navigation__menu__item pb-3 inline-block mr-10 text-[14px] font-bold cursor-pointer hover:text-green-400'>Flights</li>
                    <li className='navigation__menu__item pb-3 inline-block mr-10 text-[14px] font-bold cursor-pointer hover:text-green-400'>Cars</li>
                    <li className='navigation__menu__item pb-3 inline-block mr-10 text-[14px] font-bold cursor-pointer hover:text-green-400'>Things to do</li>
                </ul>
                <div className="hero__introduce__actions__menu my-10 flex items-center justify-between">
                    <div className="mx-3 flex items-start">
                        <CiLocationArrow1 className='mr-3 mt-1 text-gray-600' />
                        <h2 className='font-bold'>
                            Location
                            <p className='text-[12px] font-normal text-gray-400'>
                                Where are you going?
                            </p>
                        </h2>
                    </div>
                    <div className="mx-3 flex items-start">
                        <BsCalendar2Event className='mr-3 mt-1 text-gray-600' />
                        <h2 className='font-bold'>
                            Check in
                            <p className='text-[12px] font-normal text-gray-400'>
                                Add date
                            </p>
                        </h2>
                    </div>
                    <div className="mx-3 flex items-start">
                        <BsCalendar2Event className='mr-3 mt-1 text-gray-600' />
                        <h2 className='font-bold'>
                            Check out
                            <p className='text-[12px] font-normal text-gray-400'>
                                Add date
                            </p>
                        </h2>
                    </div>
                    <div className="mx-3 flex items-start">
                        <AiOutlineUser className='mr-3 mt-1 text-gray-600' />
                        <h2 className='font-bold'>
                            Travelers
                            <p className='text-[12px] font-normal text-gray-400'>
                                Add guests
                            </p>
                        </h2>
                    </div>
                    <div className='rounded-full bg-blue-500 p-5 text-white cursor-pointer hover:bg-blue-400'>
                        <BsSearch className='text-xl' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner