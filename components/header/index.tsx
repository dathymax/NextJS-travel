"use client"

import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { TfiWorld } from "react-icons/tfi"
import { AiOutlineBell } from "react-icons/ai"
import AvatarMock from '@/assets/mock/avatar.jpg';
import Image from 'next/image';
import "./header.scss";

const categories = [
    { name: "home", link: "/" },
    { name: "about", link: "/about" },
    { name: "destinations", link: "/destinations" },
    { name: "tours", link: "/tours" },
    { name: "blog", link: "/blog" },
]

const Header = () => {
    const [userId, setUserId] = useState(0);
    const [visible, setVisible] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;

        if (scrolled > 0) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible)

        return () => {
            window.removeEventListener("scroll", toggleVisible)
        }
    }, [])

    return (
        <header
            style={{
                background: "var(--bg-main)",
                boxShadow: visible ? "2px 20px 30px var(--shadow-color)" : "none"
            }}
        >
            <nav>
                <Link href="/" className="logo">
                    <i className="fa-solid fa-person-hiking"></i> TSN
                </Link>

                <div className="menu__btn" onClick={() => setShowMenu(prev => !prev)}>
                    {showMenu ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
                </div>

                <ul style={{ height: showMenu ? 250 : 0 }}>
                    {
                        categories.map(category => {
                            return (
                                <li key={category.name} className="navigation__menu__item">
                                    <Link href={category.link}>
                                        {category.name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className='navigation__user-actions flex items-center cursor-pointer'>
                    <TfiWorld className="primary--hover flex items-center justify-center mr-5" />
                    <AiOutlineBell className='primary--hover text-xl cursor-pointer' />
                    {userId
                        ? <Image src={AvatarMock} alt="Avatar" className='rounded-full object-cover w-[40px] h-[40px] mx-5 cursor-pointer' />
                        : <div className='mx-5 flex items-center'>
                            <div className="text-[var(--secondary)] primary--hover font-medium cursor-pointer rounded-3xl px-2">
                                Login
                            </div>
                            <div className="cursor-pointer bg-[var(--primary)] text-white rounded-3xl ml-4 hover:opacity-80 px-3 py-1">
                                Register
                            </div>
                        </div>}
                </div>
            </nav>
        </header>
    )
}

export default Header