import { Popover, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import "./notification.scss"
import { AiOutlineBell } from "react-icons/ai"
import Image from 'next/image'

const notifications = [
    {
        id: 1,
        label: "Notify 1",
        author: "Jtadd1",
        avatar: "https://cdn.popsww.com/blog/sites/2/2022/02/zoro-sau-2-nam.jpg",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing...."
    },
    {
        id: 2,
        label: "Notify 2",
        author: "Jtadd2",
        avatar: "https://cdn.popsww.com/blog/sites/2/2022/02/zoro-sau-2-nam.jpg",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing...."
    },
    {
        id: 3,
        label: "Notify 3",
        author: "Jtadd3",
        avatar: "https://cdn.popsww.com/blog/sites/2/2022/02/zoro-sau-2-nam.jpg",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing...."
    },
    {
        id: 4,
        label: "Notify 4",
        author: "Jtadd4",
        avatar: "https://cdn.popsww.com/blog/sites/2/2022/02/zoro-sau-2-nam.jpg",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing...."
    },
] as { id: number, label: string, author: string, avatar: string, content: string }[]

const Notification = () => {
    return (
        <div className='notification'>
            <Popover.Group className="hidden lg:flex lg:gap-x-12">
                <Popover className="relative">
                    <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                        <AiOutlineBell className='primary--hover text-xl cursor-pointer' />
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
                        <ul className="absolute -right-10 top-full z-10 mt-3 py-2 w-[400px] overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-gray-900/5">
                            {notifications.map(notification => {
                                return (
                                    <>
                                        <li key={notification.id} className="flex gap-10 items-center justify-center py-2 primary--hover">
                                            <div>
                                                <Image
                                                    src={notification.avatar}
                                                    alt={notification.author}
                                                    width={100}
                                                    height={100}
                                                    className="rounded-full w-[50px] h-[50px]"
                                                />
                                                <p className='m-0'>{notification.author}</p>
                                            </div>
                                            <div>
                                                <p>{notification.label}</p>
                                                {notification.content}
                                            </div>
                                        </li>
                                        <hr />
                                    </>
                                )
                            })}
                        </ul>
                    </Transition>
                </Popover>
            </Popover.Group>
        </div>
    )
}

export default Notification