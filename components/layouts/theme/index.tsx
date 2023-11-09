"use client"

import React, { useEffect, useState } from 'react'
import "./theme.scss"

const colors = [
    { name: "custom", rgb: "custom" },
    { name: "blue", rgb: "65, 134, 255" },
    { name: "green", rgb: "3, 170, 0" },
    { name: "orange", rgb: "255, 135, 75" },
]

const Theme: React.FC = () => {
    const [name, setName] = useState<string | null>("");
    const [rgb, setRgb] = useState<string | null>("");

    const changeColor = (color: { name: string, rgb: string }) => {
        if (color.name === "custom") {
            const inputColor = document.createElement("input");
            inputColor.type = "color";
            inputColor.click();
            inputColor.addEventListener("change", () => {
                // setRgb(hexToRgb(inputColor.value).toString())
                setName(color.name)
            })
        } else {
            setRgb(color.rgb)
            setName(color.name)
        }
    }

    // function hexToRgb(hex: string) {
    //     return ["0x" + hex[1] + hex[2] | 0, "0x" + hex[3] + hex[4] | 0, "0x" + hex[5] + hex[6] | 0]
    // }

    useEffect(() => {
        if (!rgb || !name) return;

        document.documentElement.style.setProperty("--primary-rgb", rgb)

        localStorage.setItem("travel-rgb", rgb)
        localStorage.setItem("travel-name", name)
    }, [rgb, name])

    useEffect(() => {
        const rgb = localStorage.getItem("travel-rgb") || "65, 134, 255";
        const name = localStorage.getItem("travel-name") || "blue";

        setName(name);
        setRgb(rgb);
    }, [])

    return (
        <div className='theme'>
            {
                colors.map(color => {
                    return (
                        <button
                            key={color.name}
                            className={`${color.name} ${color.name === name ? "active" : ""}`}
                            aria-label={color.name}
                            onClick={() => changeColor(color)}
                        />
                    )
                })
            }
        </div>
    )
}

export default Theme