"use client"

import React, { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, GraduationCap, DollarSign, Award } from "lucide-react"

const WhyChooseUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)

  const reasons = [
    {
      title: "Impeccable Placements",
      description:
        "We are dedicated to your career success, boasting an impressive track record of placements with top companies.",
      icon: Star,
    },
    {
      title: "50+ Diverse Programs Offered",
      description:
        "Explore your academic interests with a wide range of undergraduate and postgraduate programs to choose from.",
      icon: GraduationCap,
    },
    {
      title: "Scholarship Programs Available",
      description: "We offer financial aid opportunities to deserving students, making a quality education accessible.",
      icon: DollarSign,
    },
    {
      title: "Awards & Renowned Rankings",
      description:
        "Recognized for our excellence, we consistently receive prestigious awards and rank highly in national/regional college rankings.",
      icon: Award,
    },
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(3)
      } else if (window.innerWidth >= 768) {
        setVisibleItems(2)
      } else {
        setVisibleItems(1)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reasons.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reasons.length) % reasons.length)
  }

  return (
    <div className="text-white">
      <div className="w-full h-full bg-[#00112d] py-12">
        <div className="w-10/12 mx-auto py-12 flex flex-col">
          <p className="text-3xl font-medium pb-3">Why Choose Us</p>
          <p className="text-xl pl-2 border-l-4 border-[#fea700]">
            Best Campus Experience, Best Placements and Best Culture
          </p>

          <div className="relative py-12">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
              >
                {reasons.map((reason, index) => (
                  <div
                    key={index}
                    className={`w-full flex p-3 flex-shrink-0`}
                    style={{ flex: `0 0 ${100 / visibleItems}%` }}
                  >
                    <div className="bg-white flex items-center h-full rounded-md text-[#00112d] p-8 w-full">
                      <div className="flex flex-shrink-0 bg-gray-100 text-[#fea700] items-center justify-center p-5 w-20 h-20 rounded-md text-3xl">
                        {React.createElement(reason.icon, { size: 32 })}
                      </div>
                      <div className="ml-3">
                        <h3 className="text-2xl font-medium pb-2">{reason.title}</h3>
                        <p className="text-sm">{reason.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#fea700] h-10 w-10 rounded-full flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#fea700] h-10 w-10 rounded-full flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs

