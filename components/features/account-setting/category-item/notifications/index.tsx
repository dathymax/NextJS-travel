import Radio from '@/components/common/radio'
import React from 'react'

const Notifications: React.FC = () => {
    return (
        <section>
            <h2 className='mb-12'>Notification setting</h2>

            <div className="login__feature">
                <h3 className="heading">Messages</h3>
                <div className="flex items-center justify-between w-full">
                    <div className="label">
                        <p>Email</p>
                        <span>Recevice notifications via email</span>
                    </div>
                    <Radio />
                </div>
                <hr className='bg-gray-300 my-5' />

                <div className="flex items-center justify-between w-full">
                    <div className="label">
                        <p>Text messages</p>
                        <span>Recevice notifications via mobile phone</span>
                    </div>
                    <Radio />
                </div>
                <hr className='bg-gray-300 my-5' />

                <div className="flex items-center justify-between w-full">
                    <div className="label">
                        <p>Browser notifications</p>
                        <span>Recevice notifications of your browser</span>
                    </div>
                    <Radio />
                </div>
                <hr className='bg-gray-300 my-14' />
            </div>

            <div className="login__feature">
                <h3 className="heading">Promotions</h3>
                <div className="flex items-center justify-between w-full">
                    <div className="label">
                        <p>Email</p>
                        <span>Recevice notifications via email</span>
                    </div>
                    <Radio />
                </div>
                <hr className='bg-gray-300 my-5' />

                <div className="flex items-center justify-between w-full">
                    <div className="label">
                        <p>Text messages</p>
                        <span>Recevice notifications via mobile phone</span>
                    </div>
                    <Radio />
                </div>
                <hr className='bg-gray-300 my-5' />

                <div className="flex items-center justify-between w-full">
                    <div className="label">
                        <p>Browser notifications</p>
                        <span>Recevice notifications of your browser</span>
                    </div>
                    <Radio />
                </div>
                <hr className='bg-gray-300 my-14' />
            </div>

            <div className="login__feature">
                <h3 className="heading">Reminders</h3>
                <div className="flex items-center justify-between w-full">
                    <div className="label">
                        <p>Email</p>
                        <span>Recevice notifications via email</span>
                    </div>
                    <Radio />
                </div>
                <hr className='bg-gray-300 my-5' />

                <div className="flex items-center justify-between w-full">
                    <div className="label">
                        <p>Text messages</p>
                        <span>Recevice notifications via mobile phone</span>
                    </div>
                    <Radio />
                </div>
                <hr className='bg-gray-300 my-5' />

                <div className="flex items-center justify-between w-full">
                    <div className="label">
                        <p>Browser notifications</p>
                        <span>Recevice notifications of your browser</span>
                    </div>
                    <Radio />
                </div>
                <hr className='bg-gray-300 my-14' />
            </div>
        </section>
    )
}

export default Notifications