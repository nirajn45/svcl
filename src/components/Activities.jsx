"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const Activities = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)

  const reasons = [
    {
      imageSrc: "https://utfs.io/f/83a3fe15-9e9d-4d09-9658-4875a006f730-rhoi1k.jpg",
      title: "Financial Assistance",
      description:
        "Our scholarship programs are designed to provide financial assistance to deserving students, enabling them to pursue their academic dreams without financial burden.",
    },
    {
      imageSrc: "https://utfs.io/f/08abd4ea-8f3f-43b0-b1ff-43e242ee92cf-4c428l.jpg",
      title: "Academic Excellence",
      description:
        "Recognizing academic excellence, our scholarships reward students who have demonstrated outstanding performance in their studies.",
    },
    {
      imageSrc: "https://utfs.io/f/67d27ca2-fa8b-45cc-a64d-950125bf5d5e-ot0ax1.avif",
      title: "Community Engagement",
      description:
        "We value community engagement and leadership. Our scholarships support students who actively contribute to their communities and demonstrate leadership skills.",
    },
    {
      imageSrc: "https://utfs.io/f/67d27ca2-fa8b-45cc-a64d-950125bf5d5e-ot0ax1.avif",
      title: "Activity",
      description:
        "Students actively participate in a wide range of activities including legal workshops, debates, and community outreach programs to enhance their legal skills and social responsibility.",
    },
    {
      imageSrc: "https://utfs.io/f/67d27ca2-fa8b-45cc-a64d-950125bf5d5e-ot0ax1.avif",
      title: "Moot Court Activities",
      description:
        "Moot court activities provide students with an opportunity to simulate real-life courtroom proceedings, honing their legal research, argumentation, and public speaking skills through competitive mock trials and debates.",
    },
    {
      imageSrc: "https://utfs.io/f/67d27ca2-fa8b-45cc-a64d-950125bf5d5e-ot0ax1.avif",
      title: "Internships",
      description:
        "Internships offer students valuable hands-on experience in legal practice, allowing them to work with top law firms, courts, NGOs, and corporate legal departments, while gaining practical insights into various areas of law.",
    },
    {
      imageSrc: "https://utfs.io/f/67d27ca2-fa8b-45cc-a64d-950125bf5d5e-ot0ax1.avif",
      title: "Expert Lectures",
      description:
        "Expert lectures feature renowned legal professionals and scholars, providing students with the opportunity to gain valuable insights from industry leaders on current legal trends, case studies, and real-world legal challenges.",
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

  useEffect(() => {
    const autoplayInterval = setInterval(nextSlide, 5000) // Change slide every 5 seconds
    return () => clearInterval(autoplayInterval)
  }, [nextSlide]) // Added nextSlide to dependencies

  return (
    <div className="text-white font-[Raleway]">
      <div className="w-full h-full bg-[#f9f9f9]">
        <div className="w-10/12 mx-auto py-12">
          <p className="text-3xl font-medium pb-3 text-black">
            Our Vision & <span className="text-[#AF0305]">Values</span>
          </p>
          <p className="text-xl pl-2 border-l-4 border-[#b02027] text-black">
            The goal of education is the advancement of knowledge and the dissemination of truth
          </p>

          <div className="relative py-12">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
              >
                {reasons.map((reason, index) => (
                  <article
                    key={index}
                    className="mx-auto mt-8 mb-12 w-full shadow-lg h-[50vh] transform duration-500 hover:-translate-y-2 cursor-pointer group flex-shrink-0"
                    style={{ flex: `0 0 ${100 / visibleItems}%` }}
                  >
                    <div className="h-[50vh] bg-cover bg-center mx-auto w-[95%] rounded-lg relative overflow-hidden">
                      <Image
                        src={reason.imageSrc || "/placeholder.svg"}
                        alt={reason.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-75 transition-opacity duration-300 rounded-lg flex flex-col justify-end p-6">
                        <h1 className="text-white text-xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300 border-l-4 border-[#b02027] px-4">
                          {reason.title}
                        </h1>
                        <p className="opacity-0 text-white text-[21px] group-hover:opacity-80 transform duration-500">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#AF0305] h-10 w-10 rounded-full flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#AF0305] h-10 w-10 rounded-full flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Activities

