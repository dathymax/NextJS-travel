"use client"

import React from 'react'
import { TfiWorld } from "react-icons/tfi"
import { AiOutlineBell } from "react-icons/ai"
import AvatarMock from '@/assets/mock/avatar.jpg';
import Image from 'next/image';
import Link from 'next/link';
import "./navigation.scss"
import { usePathname } from 'next/navigation';

type PropsType = {
    pathname: string
}

const Navigation = () => {
    const pathname = usePathname();

    return (
        <div className="navigation flex items-center justify-between m-auto px-10 py-3 mb-5">
            <h2 className='font-bold text-2xl pr-5'>TSN</h2>
            <ul className="navigation__menu list-none">
                <li className={`navigation__menu__item ${pathname === "/" ? "active" : ""} mx-5 font-medium text-lg inline-block cursor-pointer hover:text-green-400`}>
                    <Link href={"/"}>
                        Home
                    </Link>
                </li>
                <li className={`navigation__menu__item ${pathname === "/about" ? "active" : ""} mx-5 font-medium text-lg inline-block cursor-pointer hover:text-green-400`}>
                    <Link href={"/about"}>
                        About
                    </Link>
                </li>
                <li className={`navigation__menu__item ${pathname === "/destinations" ? "active" : ""} mx-5 font-medium text-lg inline-block cursor-pointer hover:text-green-400`}>
                    <Link href="/destinations">
                        Destinations
                    </Link>
                </li>
                <li className={`navigation__menu__item ${pathname === "/tours" ? "active" : ""} mx-5 font-medium text-lg inline-block cursor-pointer hover:text-green-400`}>
                    <Link href="/tours">
                        Tours
                    </Link>
                </li>
                <li className={`navigation__menu__item ${pathname === "/blog" ? "active" : ""} mx-5 font-medium text-lg inline-block cursor-pointer hover:text-green-400`}>
                    <Link href="/blog">
                        Blog
                    </Link>
                </li>
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