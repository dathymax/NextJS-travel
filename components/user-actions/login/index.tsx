import React, { useState } from 'react'
import "./login.scss"

type TypeProps = {
    visible?: boolean
    setVisible: (args: boolean) => void
}

const LoginForm = ({ visible, setVisible }: TypeProps) => {
    const [mode, setMode] = useState<boolean>(false);

    const handleSwitchMode = (): void => {
        setMode(prev => !prev)
    }

    return (
        visible ?
            <div className='login__feature'>
                <form className='rounded-3xl'>
                    {!mode
                        ? <div className="login__form">
                            <h2 className="login__form--heading">
                                Login
                            </h2>

                            <label htmlFor="email">Email</label>
                            <input type="text" id='email' name="email" placeholder='Enter your email' required />

                            <label htmlFor="password">Password</label>
                            <input type="text" id='password' name="password" placeholder='Enter your password' required />

                            <input type="submit" value={"Login"} />
                        </div>

                        : <div className="register__form">
                            <h2 className="login__form--heading">
                                Register
                            </h2>

                            <label htmlFor="fullName">Full name</label>
                            <input type="text" id='fullName' name="fullName" placeholder='Enter your full name' required />

                            <label htmlFor="email">Email</label>
                            <input type="text" id='email' name="email" placeholder='Enter your email' required />

                            <label htmlFor="password">Password</label>
                            <input type="text" id='password' name="password" placeholder='Enter your password' required />

                            <label htmlFor="confirmPassword">Confirm password</label>
                            <input type="text" id='confirmPassword' name="confirmPassword" placeholder='Enter your password' required />

                            <input type="submit" value={"Register"} />
                        </div>
                    }

                    <hr />

                    <p className='text-gray-600 cursor-pointer text-center' onClick={handleSwitchMode}>
                        {!mode ? "Register for an account" : "Already have an account? Login"}
                    </p>
                </form>

                <div className="login__overlay" onClick={() => setVisible(false)}></div>
            </div> : <></>
    )
}

export default LoginForm