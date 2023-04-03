import React from 'react'
import "./index.scss"

type TypeProps = {
    children: React.ReactNode
}

const Checkbox = ({ children }: TypeProps) => {
    return (
        <label className="checkbox">
            <input className="checkbox__input" type="checkbox" />
            <span className="checkbox__inner">
                <span className="checkbox__tick"></span>
                <span className="checkbox__text">{children}</span>
            </span>
        </label>
    )
}

export default Checkbox