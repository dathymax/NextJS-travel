import { Popover, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import "./language.scss"
import { TfiWorld } from "react-icons/tfi"
import Image from 'next/image'

const languages = [
    {
        key: "EN",
        label: "EN",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
        isChoose: true
    },
    {
        key: "VI",
        label: "VI",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2560px-Flag_of_Vietnam.svg.png",
        isChoose: false
    },
] as { key: string, label: string, flag: string, isChoose: boolean }[]

const Language: React.FC = () => {
    return (
        <div className='language'>
            <Popover.Group className="hidden lg:flex lg:gap-x-12">
                <Popover className="relative">
                    <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 bg-transparent cursor-pointer">
                        <TfiWorld className="primary--hover flex items-center justify-center mr-5" />
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
                        <ul className="absolute -right-2 top-full z-10 mt-3 py-2 w-[100px] overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-gray-900/5">
                            {languages.map(language => {
                                return (
                                    <React.Fragment key={language.key}>
                                        <li className="flex gap-2 items-center justify-center py-2 primary--hover">
                                            <Image
                                                src={language.flag}
                                                alt={language.flag}
                                                width={100}
                                                height={100}
                                                className="rounded-full w-[20px] h-[20px]"
                                            />
                                            <p>{language.label}</p>
                                        </li>
                                    </React.Fragment>
                                )
                            })}
                        </ul>
                    </Transition>
                </Popover>
            </Popover.Group>
        </div>
    )
}

export default Language