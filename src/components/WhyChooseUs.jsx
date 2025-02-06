"use client"

import React, { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, GraduationCap, DollarSign, Award } from "lucide-react"

const WhyChooseUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)

  const reasons = [
    {
      title: "Academic Excellence",
      description:
        "A meticulously crafted curriculum that meets national and global legal education standards.",
      icon: Star,
    },
    {
      title: "State-of-the-Art Infrastructure",
      description:
        "Modern moot court halls, digital library, legal research centers, and smart classrooms.",
      icon: GraduationCap,
    },
    {
      title: "Career-Oriented Programs",
      description: "Moot court competitions, debates, legal workshops, leadership training, and international exposure.",
      icon: DollarSign,
    },
    {
      title: "100% Placement Assistance",
      description:
        "Strong industry networks and collaborations with top law firms and corporate legal teams.",
      icon: Award,
    },
    {
      title: "Legal Research & Innovation Hub",
      description:
        "Dedicated to fostering legal research, policy development, and case law studies.",
      icon: Award,
    },
    {
      title: "Social Responsibility",
      description:
        "Legal aid clinics, free counseling services, and legal awareness drives for the underprivileged.",
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
    <div className="text-white font-[Raleway]">
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
                    <div className="bg-white flex items-center h-full rounded-md text-[#00112d] p-8 w-full shadow-lg transform transition-transform duration-500 hover:scale-105 hover:rotate-3 hover:bg-gradient-to-r from-yellow-200 to-green-300">
                      <div className="flex flex-shrink-0 bg-gray-100 text-[#fea700] items-center justify-center p-5 w-20 h-20 rounded-md text-3xl">
                        {React.createElement(reason.icon, { size: 32 })}
                      </div>
                      <div className="ml-3">
                        <h3 className="text-2xl font-medium pb-2">{reason.title}</h3>
                        <p className="text-sm font-medium">{reason.description}</p>
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

