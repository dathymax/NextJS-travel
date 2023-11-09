"use client"

import React from 'react'
import "./testimonials.scss"
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { TestimonialTypes } from '@/types';

const testimonials: TestimonialTypes[] = [
    {
        id: 1,
        name: "Hera Cosmetic",
        avatar: "https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/t-member.jpg?raw=true",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, accusantium.",
    },
    {
        id: 2,
        name: "Hera Cosmetic",
        avatar: "https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/t-member.jpg?raw=true",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, accusantium.",
    },
    {
        id: 3,
        name: "Hera Cosmetic",
        avatar: "https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/t-member.jpg?raw=true",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, accusantium.",
    },
    {
        id: 4,
        name: "Hera Cosmetic",
        avatar: "https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/t-member.jpg?raw=true",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, accusantium.",
    },
]

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials">
            <div className="img-container">
                <Image
                    src={"https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/ts.png?raw=true"}
                    alt="https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/ts.png?raw=true"
                    width={488}
                    height={482}
                />
            </div>

            <div className="slider">
                <h2>Client&apos;s Reviews</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, reprehenderit.</p>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    loop={true}
                    className="img-container"
                >
                    {
                        testimonials.map(testimonial => {
                            return (
                                <SwiperSlide key={testimonial.id}>
                                    <div className="card">
                                        <div className="text">
                                            <i className="fas fa-quote-left"></i>
                                            <p>{testimonial.text}</p>
                                            <strong>{testimonial.name}</strong>
                                        </div>

                                        <div className="avatar">
                                            <Image
                                                src={testimonial.avatar}
                                                alt={testimonial.avatar}
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials