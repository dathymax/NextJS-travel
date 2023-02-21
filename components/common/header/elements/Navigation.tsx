import React from 'react'
import { TfiWorld } from "react-icons/tfi"
import { AiOutlineBell } from "react-icons/ai"
import AvatarMock from '@/assets/mock/avatar.jpg';
import Image from 'next/image';

const Navigation = () => {
    return (
        <div className="navigation flex items-center justify-between m-auto px-10 py-3">
            <h2 className='font-bold text-2xl pr-5'>TSN</h2>
            <ul className="navigation__menu list-none">
                <li className='navigation__menu__item active mx-5 font-medium text-lg inline-block cursor-pointer hover:text-green-400'>Home</li>
                <li className='navigation__menu__item mx-5 font-medium text-lg inline-block cursor-pointer hover:text-green-400'>About</li>
                <li className='navigation__menu__item mx-5 font-medium text-lg inline-block cursor-pointer hover:text-green-400'>Destinations</li>
                <li className='navigation__menu__item mx-5 font-medium text-lg inline-block cursor-pointer hover:text-green-400'>Tours</li>
                <li className='navigation__menu__item mx-5 font-medium text-lg inline-block cursor-pointer hover:text-green-400'>Blog</li>
            </ul>
            <div className='flex items-center cursor-pointer'>
                <div className="flex items-center justify-center mx-10 hover:text-green-400">
                    <TfiWorld />
                    <span className='ml-3'>
                        Language
                    </span>
                </div>
                <AiOutlineBell className='text-xl cursor-pointer hover:text-green-400' />
                <Image src={AvatarMock} alt="Avatar" className='rounded-full object-cover w-[40px] h-[40px] mx-5 cursor-pointer' />
            </div>
        </div>
    )
}

export default Navigation