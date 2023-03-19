import Checkbox from '@/common/checkbox'
import React from 'react'

const Payments: React.FC = () => {
    return (
        <section>
            <h2 className='mb-12'>Payment methods</h2>

            <div className="login__feature mb-10">
                <h3 className="heading">Credit card</h3>
                <div className="flex items-center justify-between w-full">
                    <div className="label">
                        <p>Visa ••••••1667</p>
                        <span>Expiration: 03/2026</span>
                    </div>
                    <div className="feature primary--hover--bg cursor-pointer">
                        Add payment method
                    </div>
                </div>
            </div>

            <div className="login__feature mb-10">
                <h3 className="heading mb-6">Add new credit card</h3>

                <form className='information__form'>
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

                    <Checkbox>
                        Save card
                    </Checkbox>
                </form>

                <hr className='my-10' />
            </div>

            <div className="login__feature">
                <h3 className="heading">Coupons</h3>
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between w-full">
                        <div className="label">
                            <p>Coupons</p>
                            <span>No coupon added</span>
                        </div>
                        <div className="feature primary--hover--bg cursor-pointer">
                            Add
                        </div>
                    </div>

                    <hr className='bg-gray-300 w-[1px] h-[50px] mx-8' />

                    <div className="flex items-center justify-between w-full">
                        <div className="label">
                            <p>Gift credit</p>
                            <span>No gift credit added</span>
                        </div>
                        <div className="feature primary--hover--bg cursor-pointer">
                            Add
                        </div>
                    </div>
                </div>
                <hr className='bg-gray-300 my-10' />
            </div>
        </section>
    )
}

export default Payments