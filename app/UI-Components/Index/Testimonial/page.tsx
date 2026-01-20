"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Image from "next/image";
import test1 from "@/public/testimonial-1.jpg"
import test2 from "@/public/testimonial-2.jpg"

const TestimonialData = [
  {
    id: "1",
    desc: "I thought the print out will be blurry, but i was blown away. Thank you, thank you, Thank you so much sir, we would add you to our empowerment list, I am more than grateful for the work",
    image: test1,
    name: "Mr. Owoh Rejoice",
  },
  {
    id: "2",
    desc: "More than i had anticipated! Thank you for how you paid attention to details, It is really beautiful and worth the price.",
    image: test2,
    name: "Miss. Peace Madueke",
  }
]


export default function Testimonial() {
  return (
    <>
      <div className="testimonial flex flex-col-reverse lg:flex-row gap- bg-[#EEE]">
        <div className="w-full lg:w-1/2 testimonial-image"></div>
        <div className="w-full lg:w-1/2 pe-[8%] lg:pe-[12%] ps-[8%] lg:ps-5 py-20 pb-0 md:pb-20">
          <div>
            <div className="flex flex-col gap-10">
              <div className="w-full pt-8">
                <span className="rounded-full title-span border border-gray-400 px-6 GolosText uppercase font-bold">
                  Our clients say
                </span>
              </div>
              <div className="w-full lg:w-1.2">
                <h1 className="Montserrat text-4xl md:text-6xl">
                  Here's what{" "}
                  <span className="text-(--G1)"> warm words our clients</span>{" "}
                  say
                </h1>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5 mt-5">
              <h1 className="text-5xl Montserrat">4.80</h1>
              <div className="flex flex-col items-center">
                <div className="stars-icon flex items-center gap-1 bg-(--G1) text-white px-3 py-1 rounded-full">
                  <i className="bi bi-star-fill text-xs"></i>
                  <i className="bi bi-star-fill text-xs"></i>
                  <i className="bi bi-star-fill text-xs"></i>
                  <i className="bi bi-star-fill text-xs"></i>
                  <i className="bi bi-star-fill text-xs"></i>
                </div>
                <p className="GolosText">88+ reviews</p>
              </div>
              <p className="w-full lg:w-[50%] font-semibold GolosText"> From concept to reality, the team turned my vision into a reality. I couldn't be happier with this!</p>
            </div>
          </div>
          <div className="mt-10 ">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              loop= {true}
              autoplay={{
                delay: 2000
              }}
              modules={[Autoplay]}
              speed={1500}
            >
              {TestimonialData.map((test, index) => (
                <SwiperSlide key={index}>
                  <p className="GolosText text-xl font-semibold tracking-wide">{test.desc}</p>
                  <div className="flex items-center gap-3 mt-8">
                    <Image
                      src={test.image}
                      alt={test.name}
                      className="rounded-full w-[70px] h-[70px] object-cover"
                    />
                    <div className="flex flex-col">
                      <h3 className="GolosText text-2xl font-semibold">{test.name}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
