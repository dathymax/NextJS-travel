import React from 'react'
import "./nearby.css"
import Image from "next/image"
import { ExploreTypes } from '@/types'

const explores: ExploreTypes[] = [
    {
        id: 1,
        name: "Ponagar Tower",
        img: "https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/ex-nb.jpg?raw=true",
        time: "15 minutes drive",
        distance: 1480
    },
    {
        id: 2,
        name: "Ponagar Tower",
        img: "https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/ex-nb.jpg?raw=true",
        time: "15 minutes drive",
        distance: 1480
    },
    {
        id: 3,
        name: "Ponagar Tower",
        img: "https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/ex-nb.jpg?raw=true",
        time: "15 minutes drive",
        distance: 1480
    },
    {
        id: 4,
        name: "Ponagar Tower",
        img: "https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/ex-nb.jpg?raw=true",
        time: "15 minutes drive",
        distance: 1480
    },
    {
        id: 5,
        name: "Ponagar Tower",
        img: "https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/ex-nb.jpg?raw=true",
        time: "15 minutes drive",
        distance: 1480
    },
    {
        id: 6,
        name: "Ponagar Tower",
        img: "https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/ex-nb.jpg?raw=true",
        time: "15 minutes drive",
        distance: 1480
    },
]

const NearBy: React.FC = () => {
    return (
        <section id='explore'>
            <div className="heading">
                <h2>Explore Nearby</h2>
                <p>5,400 beautiful places to go</p>
            </div>

            <div className="wrapper">
                {
                    explores.map(explore => {
                        return (
                            <div className="card" key={explore.id}>
                                <Image src={explore.img} alt={explore.name} width={100} height={100} />
                                <a href="#">{explore.name}</a>
                                <p>{explore.time}</p>
                                <span>{explore.distance}</span>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default NearBy