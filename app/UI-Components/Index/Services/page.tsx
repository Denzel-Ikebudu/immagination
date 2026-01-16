"use client";

import Image from "next/image";
import Link from "next/link";


const servicesData = [
  {
    id: "01",
    title: "Premium Print & Production",
    description:
      "We design and print eye-catching banners, flyers, and customized products like diaries, pens, T-shirts, and handbills. We also offer professional branding for frames—if it can be printed, we can do it.",
    image: "/services/Service1.jpg", 
  },
  {
    id: "02",
    title: "Branded Apparel & Merchandise",
    description:
      "Elevating your brand’s physical presence through high-end custom polos, T-shirts, and corporate gift items. We use quality materials and expert craftsmanship to ensure your brand is represented with excellence.",
    image: "/hero-image-immagination.png", 
  },
  {
    id: "03",
    title: "Graphic Design & Brand Identity",
    description:
      "Crafting comprehensive identity systems for startups and established brands, including memorable logos, visual guidelines, and strategic positioning to create a cohesive brand voice.",
    image: "/services/service-4.jpg",
  },
  {
    id: "04",
    title: "Print and Design Tutor",
    description:
      "Providing expert guidance for aspiring creatives and businesses. Through one-on-one mentorship and strategic consulting, we help you master digital tools and build a professional creative foundation.",
    image: "/services/service-5.jpg",
  },
];

export default function Services() {
  return (
    <>
      <div id="service-section" className="px-[8%] lg:px-[12%] pt-20 pb-60 service relative bg-black">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3 title pt-8">
            <span className="rounded-full title-span border border-gray-400 px-6 py-2 GolosText uppercase font-bold text-white text-sm">
              Our Services
            </span>
          </div>
          <div className="w-full lg:w-2/3">
            <h1 className="Montserrat text-4xl md:text-5xl mb-5 text-white leading-tight">
              Explore our{" "}
              <span className="text-[#0CB006]">
                comprehensive design and printing
              </span>{" "}
              services
            </h1>
            <p className="text-gray-400 GolosText text-lg max-w-2xl">
              We specialize in transforming visions into reality. Explore our
              portfolio of innovative printing and design projects crafted with
              precision.
            </p>
          </div>
        </div>

        {/* --- Service Cards Mapping --- */}
        <div className="mt-16">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="service-card border-b border-gray-700 cursor-pointer py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 group transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row w-full md:w-[70%] gap-4 md:gap-12">
                {/* Number with your Vibrant Yellow */}
                <h4 className="text-4xl Montserrat text-(--white) font-bold">
                  {service.id}
                </h4>
                <div className="service-content">
                  <h2 className="mb-3 text-3xl md:text-4xl Montserrat text-white group-hover:text-[#0CB006] transition-colors duration-300">
                    {service.title}
                  </h2>
                  <p className="GolosText text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden h-[210px] w-full md:w-[300px] flex-shrink-0">
                <Image
                  src={service.image}
                  alt={`${service.title} Showcase`}
                  width={300}
                  height={210}
                  className="w-full h-full object-cover rounded-2xl border-2 border-transparent group-hover:border-[#FFD700] transition-all duration-500 transform group-hover:scale-105"
                />
              </div>

              {/* Arrow Icon */}
              <div className="hidden md:block">
                <i className="bi bi-arrow-up-right text-3xl text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"></i>
              </div>
            </div>
          ))}
        </div>

        {/* --- Call to Action Button --- */}
        <div className="mt-12">
          <Link href="/UI-Components/Pages/Gallery">
            <button
              className="border border-gray-500/50 px-8 py-4 rounded-full GolosText font-semibold text-white 
              hover:bg-[#0CB006] hover:text-black hover:border-transparent transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              View Gallery <i className="bi bi-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}