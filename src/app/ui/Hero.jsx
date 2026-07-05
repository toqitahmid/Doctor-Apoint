"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const bannerData = [
  {
    id: 1,
    title: "Your Health Is Our Top Priority",
    subtitle:
      "Skip the waiting room. Book online appointments instantly with top-rated, certified physicians tailored to your needs.",
    buttonText: "Doctors",
    buttonLink: "/doctors",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: 2,
    title: "Accessible Healthcare From Anywhere",
    subtitle:
      "Connect with specialist doctors via seamless teleconsultations or schedule structured in-person clinic visits easily.",
    buttonText: "Appointments",
    buttonLink: "/apointments",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: 3,
    title: "Compassionate Care, Specialized Expertise",
    subtitle:
      "From pediatrics to cardiology, coordinate your family’s ongoing medical history and schedule checkups under one roof.",
    buttonText: "Register",
    buttonLink: "/register",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2000&q=80",
  },
];

export default function HeroBanner() {
  return (
    <div className="w-full relative h-[75vh] sm:h-[75vh] md:h-[80vh] overflow-hidden shadow-lg mb-8">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect={"fade"} // Professional smooth cross-fade transition
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="w-full h-full"
      >
        {bannerData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center relative flex items-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark tint overlay for pristine readability */}
              <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />

              {/* Text content wrapper */}
              <div className="relative z-10  sm:px-12 text-white space-y-2 max-w-9xl text-center mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                  {slide.title}
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-200 font-light leading-relaxed">
                  {slide.subtitle}
                </p>

                <div className="pt-2">
                  <Link
                    href={slide.buttonLink}
                    className="inline-block bg-cyan-500 text-white font-medium px-7 py-3.5 rounded-xl shadow-md hover:bg-cyan-600 hover:shadow-xl transition-all duration-200 text-sm sm:text-base"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
