import React from 'react'
import "./loginAndSecurity.scss"

const LoginAndSecurity: React.FC = () => {
    return (
        <section>
            <h2 className='mb-12'>Login and security</h2>

            <div className="login__feature">
                <h3 className="heading">Login</h3>
                <div className="flex items-center justify-between w-full">
                    <div className="label">
                        <p>Password</p>
                        <span>Last update 1 month ago</span>
                    </div>
                    <div className="feature primary--hover--bg cursor-pointer">
                        Update password
                    </div>
                </div>
                <hr className='bg-gray-300 my-10' />
            </div>

            <div className="login__feature">
                <h3 className="heading">Social accounts</h3>
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between w-full">
                        <div className="label">
                            <p>Facebook</p>
                            <span>Not connected</span>
                        </div>
                        <div className="feature primary--hover--bg cursor-pointer">
                            Connect
                        </div>
                    </div>

                    <hr className='bg-gray-300 w-[1px] h-[50px] mx-8' />

                    <div className="flex items-center justify-between w-full">
                        <div className="label">
                            <p>Apple account</p>
                            <span>Not connected</span>
                        </div>
                        <div className="feature primary--hover--bg cursor-pointer">
                            Connect
                        </div>
                    </div>
                </div>
                <hr className='bg-gray-300 my-10' />
            </div>

            <div className="login__feature">
                <h3 className="heading">Device history</h3>
                <div className="flex items-center justify-between">
                    <div className="label">
                        <p>Session</p>
                        <span>May 14, 2021 at 08:36pm</span>
                    </div>
                    <div className="feature primary--hover--bg cursor-pointer">
                        Logout device
                    </div>
                </div>
                <hr className='bg-gray-300 my-3' />

                <div className="flex items-center justify-between">
                    <div className="label">
                        <p>macOs Big Sur. Chrome</p>
                        <span>May 14, 2021 at 08:36pm</span>
                    </div>
                    <div className="feature primary--hover--bg cursor-pointer">
                        Logout device
                    </div>
                </div>
                <hr className='bg-gray-300 my-3' />

                <div className="flex items-center justify-between">
                    <div className="label">
                        <p>Session</p>
                        <span>May 14, 2021 at 08:36pm</span>
                    </div>
                    <div className="feature primary--hover--bg cursor-pointer">
                        Logout device
                    </div>
                </div>
                <hr className='bg-gray-300 my-3' />
            </div>
        </section>
    )
}

export default LoginAndSecurity