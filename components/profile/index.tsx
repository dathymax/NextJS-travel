import React from 'react'
import "./profile.scss"
import Background from '@/assets/backgrounds/hero.jpg';
import Image from 'next/image';
import AvatarMock from '@/assets/mock/avatar.jpg';
import { TbWorld } from "react-icons/tb"
import { AiOutlineInstagram } from "react-icons/ai"
import { RiFacebookCircleLine } from "react-icons/ri"
import Link from 'next/link';
import { RxTwitterLogo } from "react-icons/rx"

const UserProfile = () => {
    return (
        <div className='user'>
            <div className="user__wallpaper h-[40vh]">
                <Image src={Background} alt="Background" className='w-full rounded-2xl saturate-50 drop-shadow-2xl object-cover' />
            </div>

            <div className="user__body w-[80%] m-auto">
                <div className="profile w-[30%]">
                    <Image src={AvatarMock} alt="Avatar" className='rounded-full object-cover w-[150px] h-[150px] cursor-pointer m-auto' />

                    <h2 className="profile__name font-medium text-2xl my-5">
                        Jtadd Do
                    </h2>

                    <p className='flex items-center justify-center'>
                        <TbWorld />
                        <Link href='https://dathymax.github.io/travel-frontend/' target={"_blank"} className="text-[12px] font-medium text-black ml-2">
                            https://dathymax.github.io/travel-frontend/
                        </Link>
                    </p>

                    <div className="profile__contact my-10 w-[35%] m-auto text-center">
                        <Link href={"#"} className="w-full text-center block px-[7px] py-[5px]">
                            Contact
                        </Link>
                    </div>

                    <div className="profile__socials flex items-center justify-between w-[30%] m-auto">
                        <RxTwitterLogo />
                        <AiOutlineInstagram />
                        <RiFacebookCircleLine />
                    </div>
                </div>
                <div className="user__wrapper w-[70%]">
                    <div className="heading">
                        <h2 className="heading__welcome">
                            Hello, I'm Jtadd Do
                        </h2>

                        <Link href={"/account-setting"} className="text-black font-medium text-[14px] heading__edit primary--hover--bg">
                            Edit profile
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile