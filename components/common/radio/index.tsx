import React from 'react'
import "./index.scss"

const Radio = () => {
    return (
        <label className="switch">
            <input className="switch__input" type="checkbox" />
            <span className="switch__inner">
                <span className="switch__box">
                </span>
            </span>
        </label>
    )
}

export default Radio