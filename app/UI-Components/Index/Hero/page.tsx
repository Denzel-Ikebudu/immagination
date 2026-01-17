"use client"

import Image from "next/image"
import HeroImg from "@/public/hero-image-immagination.png"
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Hero() {
    return (
        <>
            <div className="hero bg-(--black) text-(--white) overflow-hidden">
                <div className="hero-bg-elm2"></div>
                <div className= "w-full px-[8%] lg:px-[12%] py-13">
                    <div className ="flex flex-col lg:flex-row gap-5 justify-between items-center">
                        <div className="w-full lg:w-1/2 relative">
                            <div className="">
                                <span className="hero-span border border-gray-400 GolosText font-bold px-5 py-2 rounded-full">
                                    Trusted Design Partner
                                </span>
                                <h1 className="text-5xl lg:text-7xl Montserrat my-5 leading-none">Bringing your <br /><span className="text-(--G1)">    thoughts to life</span></h1>
                                <p className="text-gray-400 w-full md:w-[60%]">Whether it’s your personal brand, office identity, or a commercial project, we are dedicated to bringing your vision to life with unmatched precision and flair</p>
                                <button className="mt-9 border border-gray-500/50 px-5 py-3 rounded-full GolosText font-semibold hover:bg-gradient-to-r from-(--G1) to-(--G2)
                                    hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer group">
                                    <Link href="/UI-Components/Pages/Services">
                                        Our Services <i className="bi bi-arrow-right ps-1"></i>
                                    </Link>
                                </button>
                            
                            </div>
                        </div>
                            <div className="w-full lg:w-1/2 z-10">
                                <div className="hero-image">
                                    <Image 
                                        src={HeroImg}
                                        alt="HeroImg"
                                        className="w-full h-full rounded-2xl"
                                    />
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            
            <div className="bg-(--black) text-(--white) px-[8%] lg:px-[12%] pb-10">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                }}
                className="partner-swiper"
            >
                <SwiperSlide>
                <div className="flex flex-col items-center justify-center space-y-2 text-center">
                    <i className="bi bi-palette text-5xl text-indigo-600"></i>
                    <span className="text-xl font-bold">We Design</span>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="flex flex-col items-center justify-center space-y-2 text-center">
                    <i className="bi bi-award text-5xl text-green-600"></i>
                    <span className="text-xl font-bold">We Brand</span>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col items-center justify-center space-y-2 text-center">
                        <i className="bi bi-printer text-5xl text-red-600"></i>
                        <span className="text-xl font-bold">We Print</span>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </>
    );
};