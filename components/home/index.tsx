import Image from 'next/image'
import React from 'react'
import TSNHeader from '../common/header'
import Background from '@/assets/backgrounds/hero.jpg';
import "./home.scss";

const HomePage = () => {
    return (
        <div className='home__introduce h-screen'>
            <TSNHeader />
            <Image src={Background} alt="Background" className='home__introduce__hero w-full h-[80vh] rounded-2xl saturate-50 drop-shadow-2xl' />
            <div className="home__introduce__title text-white">
                <h2 className="font-bold text-5xl">
                    Air, sleep, dream
                </h2>
                <p className='mt-2'>
                    Find and book a great experience.
                </p>
                <p className='mt-2 bg-blue-500 w-[60%] text-center rounded-3xl p-2 cursor-pointer'>
                    Start your search
                </p>
            </div>
            <div className="home__introduce__actions rounded-2xl shadow-2xl">
                <ul className="list-none navigation__menu">
                    <li className='navigation__menu__item active pb-3 inline-block mr-10 text-[14px] font-bold cursor-pointer hover:text-green-400'>Stays</li>
                    <li className='navigation__menu__item pb-3 inline-block mr-10 text-[14px] font-bold cursor-pointer hover:text-green-400'>Flights</li>
                    <li className='navigation__menu__item pb-3 inline-block mr-10 text-[14px] font-bold cursor-pointer hover:text-green-400'>Cars</li>
                    <li className='navigation__menu__item pb-3 inline-block mr-10 text-[14px] font-bold cursor-pointer hover:text-green-400'>Things to do</li>
                </ul>
            </div>
        </div>
    )
}

export default HomePage