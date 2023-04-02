"use client"

import { UserProfileType } from '@/types/features/user'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import "./personalInfo.scss"

type TypeProps = {
    userInfo: UserProfileType
}

const PersonalInfo: React.FC<TypeProps> = ({ userInfo }: TypeProps) => {
    const { setValue, register } = useForm<UserProfileType>({ defaultValues: userInfo });

    useEffect(() => {
        if (userInfo) {
            setValue("displayName", userInfo.displayName)
            setValue("realName", userInfo.realName)
        }
    }, [userInfo])

    return (
        <section className='information'>
            <div className="heading flex items-center justify-between mb-12">
                <h2>Personal info</h2>
                <Link href={"/user-profile"} className={"heading__link primary--hover--bg"}>View profile</Link>
            </div>

            <form className='information__form'>
                <p className='mb-6'>Account info</p>

                <div className="form__wrapper">
                    <div className="form__item">
                        <label htmlFor="displayName">Display name</label>
                        <input type="text" id='displayName' placeholder='Enter your display name' {...register("displayName")} />
                    </div>
                    <div className="form__item">
                        <label htmlFor="realName">Real name</label>
                        <input type="text" id='realName' placeholder='Enter your real name' {...register("realName")} />
                    </div>
                </div>

                <div className="form__wrapper">
                    <div className="form__item">
                        <label htmlFor="phone">Phone number</label>
                        <input type="tel" id='phone' name="phone" placeholder='Enter your phone number' />
                    </div>
                    <div className="form__item">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' name="email" placeholder='Enter your email' />
                    </div>
                </div>

                <div className="form__wrapper">
                    <div className="form__item">
                        <label htmlFor="bio">Bio</label>
                        <input type="text" id='bio' name="bio" placeholder='About yourself in a few words' />
                    </div>
                </div>
            </form>
        </section>
    )
}

export default React.memo(PersonalInfo);