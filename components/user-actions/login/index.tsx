import React from 'react'
import "./login.scss"

type TypeProps = {
    visible?: boolean
}

const LoginForm = ({ visible }: TypeProps) => {
    return (
        visible ?
            <div className='login__container'>
                <form>

                </form>

                <div className="login__overlay"></div>
            </div> : <></>
    )
}

export default LoginForm