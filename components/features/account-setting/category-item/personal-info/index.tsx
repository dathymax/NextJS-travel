import Link from 'next/link'
import React from 'react'
import "./personalInfo.scss"

const PersonalInfo: React.FC = () => {
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
                        <input type="text" id='displayName' name="displayName" placeholder='Enter your display name' />
                    </div>
                    <div className="form__item">
                        <label htmlFor="realName">Real name</label>
                        <input type="text" id='realName' name="realName" placeholder='Enter your real name' />
                    </div>
                </div>

                <div className="form__wrapper">
                    <div className="form__item">
                        <label htmlFor="phoneNumber">Phone number</label>
                        <input type="tel" id='phoneNumber' name="phoneNumber" placeholder='Enter your phone number' />
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

export default PersonalInfo