"use client"

import AvatarMock from '@/assets/mock/avatar.jpg';
import { Popover, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { memo, Fragment } from 'react'
import "./user.scss"

const links = [
    { href: '/user-profile', label: 'Profile' },
    { href: '/account-setting', label: 'Account setting' },
] as { href: string, label: string }[]

const User: React.FC = () => {

    const handleLogOut = (): void => {
        console.log("Logged out!")
    }

    return (
        <div className='user'>
            <Popover.Group className="hidden lg:flex lg:gap-x-12">
                <Popover className="relative">
                    <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 bg-transparent">
                        <Image
                            src={AvatarMock}
                            alt="Avatar"
                            className='rounded-full object-cover w-[40px] h-[40px] mx-5 cursor-pointer'
                        />
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <ul className="absolute -right-6 top-full z-10 mt-3 py-2 w-[250px] overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-gray-900/5">
                            {links.map(link => {
                                return (
                                    <li key={link.href}>
                                        <Link href={link.href}>
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                            })}
                            <li onClick={handleLogOut}>
                                <Link href={"#"}>
                                    Sign out
                                </Link>
                            </li>
                        </ul>
                    </Transition>
                </Popover>
            </Popover.Group>
        </div>
    )
}

export default memo(User)