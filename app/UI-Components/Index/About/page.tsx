"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import AboutImg1 from "@/public/About-1.jpg";
import AboutImg2 from "@/public/About-2.jpg";
import AboutImg3 from "@/public/About-3.jpg";

// import CountUp from "react-countup"

const CountUp = dynamic(() => import("react-countup"), { ssr: false });

const statsData = [
  {
    value: 3,
    suffix: "+",
    title: "Year experience",
    desc: "Elevating brands with expert design strategy for over 3 years",
  },
  {
    value: 105,
    suffix: "+",
    title: "Projects completed",
    desc: "Over 250 successful projects delivered with quality and core",
  },
  {
    value: 95,
    suffix: "%",
    title: "Client satisfaction",
    desc: "All of our clients are satisfied with our work and service",
  },
];

export default function About() {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-20 about">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3 title pt-8">
            <span className="rounded-full title-span border border-gray-400 px-6 GolosText uppercase font-bold">
              {" "}
              About Immagination
            </span>
          </div>
          <div className="w-full lg:w-2/3">
            <h1 className="Montserrat text-4xl md:text-6xl">
              We Shape{" "}
              <span className="text-(--G1)">Brand Identities Through Purposeful</span>{" "}
                Design and Printing
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-20">
          <div className="about-image">
            <Image
              src={AboutImg1}
              alt="AboutImg1"
              className="rounded-3xl transition-all duration-300 hover:-translate-y-1.5"
            />
          </div>
          <div className="about-image lg:pt-10">
            <Image
              src={AboutImg2}
              alt="AboutImg1"
              className="rounded-3xl transition-all duration-300 hover:-translate-y-1.5"
            />
          </div>
          <div className="about-image lg:pt-20">
            <Image
              src={AboutImg3}
              alt="AboutImg1"
              className="rounded-3xl transition-all duration-300 hover:-translate-y-1.5"
            />
          </div>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statsData.map((item, index) => (
          <div key={index} className="about-card text-(--black)">
            <h2 className="text-5xl tracking-wider Montserrat font-bold mb-6 text-(--black)">
              <CountUp
                start={0}
                end={item.value}
                duration={2.5}
                enableScrollSpy
              />
              {item.suffix}
            </h2>
            <div className="about-content py-6 border-t border-gray-400">
              <h3 className="mb-3 text-2xl Montserrat">{item.title}</h3>
              <p className="text-gray-400 GolosText">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
