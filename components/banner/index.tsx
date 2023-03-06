"use client"

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import "./banner.css"
import Image from 'next/image';

const images: string[] = [
    "https://raw.githubusercontent.com/devat-youtuber/travel-nextjs13beta-images/main/bn1.jpg",
    "https://raw.githubusercontent.com/devat-youtuber/travel-nextjs13beta-images/main/bn2.jpg",
    "https://raw.githubusercontent.com/devat-youtuber/travel-nextjs13beta-images/main/bn3.jpg",
]

const Banner: React.FC = () => {
    return (
        <section id="home" className="banner">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                navigation={true}
                loop={true}
                className="img-container"
            >
                {images.map((image, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Image src={image} alt={image} width={1920} height={1280} priority />
                        </SwiperSlide>
                    )
                })}
            </Swiper>

            <div className="box">
                <strong>
                    Explore The World! <i className="fa-solid fa-globe"></i>
                    <h1>
                        It's a Big World Out There, Go Explore
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, rem!
                    </p>
                    <a href="#">Explore Now</a>
                </strong>
            </div>
        </section>
    )
}

export default Banner