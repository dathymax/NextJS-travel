import { DestinationTypes } from '@/types'
import Image from 'next/image'
import React from 'react'
import "./destinations.css"

const destinations: DestinationTypes[] = [
    {
        id: 1,
        name: "Vinpearl",
        location: "Nha Trang",
        stars: 4.8,
        price: 99,
        img: "https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/d-1.jpg?raw=true",
    },
    {
        id: 2,
        name: "Vinpearl",
        location: "Nha Trang",
        stars: 4.8,
        price: 99,
        img: "https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/d-2.jpg?raw=true",
    },
    {
        id: 3,
        name: "Vinpearl",
        location: "Nha Trang",
        stars: 4.8,
        price: 99,
        img: "https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/d-3.jpg?raw=true",
    },
    {
        id: 4,
        name: "Vinpearl",
        location: "Nha Trang",
        stars: 4.8,
        price: 99,
        img: "https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/d-4.jpg?raw=true",
    },
    {
        id: 5,
        name: "Vinpearl",
        location: "Nha Trang",
        stars: 4.8,
        price: 99,
        img: "https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/d-5.jpg?raw=true",
    },
    {
        id: 6,
        name: "Vinpearl",
        location: "Nha Trang",
        stars: 4.8,
        price: 99,
        img: "https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/d-6.jpg?raw=true",
    },
]

const Destinations: React.FC = () => {
    return (
        <section id='destinations'>
            <div className="heading">
                <h2>Popular Destinations</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, molestias!
                </p>
            </div>

            <div className="grid">
                {
                    destinations.map((destination, index) => {
                        return (
                            <div key={destination.id} className={`card card-${index}`}>
                                <Image src={destination.img} alt={destination.name} width={600} height={600} />

                                <div className="box">
                                    <span className="star">
                                        <i className="fa-solid fa-star"></i> {destination.stars}
                                    </span>

                                    <div className="group">
                                        <div className="text">
                                            <strong>{destination.name}</strong>
                                            <span>
                                                <i className="fas fa-map-marker-alt"></i> {destination.location}
                                            </span>
                                        </div>

                                        <span className="price">${destination.price}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Destinations