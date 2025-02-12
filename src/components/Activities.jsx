"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Activities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  const activities = [
    {
      imageSrc: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAum7KHcM3CMctTlLnUsdGg6eRqzSorOXmFha9xE",
      title: "Activities",
      description:
        "Engage in a variety of activities, from legal workshops and debates to community outreach programs, fostering both professional skills and social responsibility.",
    },
    {
      imageSrc: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumDN8QGsc3imC02hJzTjuAPrdk64eXYnEVlBgZ",
      title: "Moot Court Activities",
      description:
        "Simulate real courtroom experiences through moot court competitions, enhancing legal research, argumentation, and advocacy skills.",
    },
    {
      imageSrc: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumV4iTaH3gFkCwLrRjtm2nJhzUIixOYXBA8NDb",
      title: "Internship",
      description:
        "Gain hands-on legal experience by interning at prestigious law firms, courts, NGOs, and corporate legal departments.",
    },
    {
      imageSrc: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAump9xBWlQ6ntRyaQormsAvUSgqZTJcibOuXfBW",
      title: "Expert Lectures",
      description:
        "Learn from distinguished legal professionals and scholars through expert lectures that provide insights into contemporary legal trends and case studies.",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(3);
      } else if (window.innerWidth >= 768) {
        setVisibleItems(2);
      } else {
        setVisibleItems(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % activities.length);
    }, 5000);
    return () => clearInterval(autoplayInterval);
  }, [activities.length]);

  return (
    <div className="text-white font-sans">
      <div className="w-full h-full bg-[#f9f9f9]">
        <div className="w-11/12 mx-auto py-12">
          <p className="text-3xl font-medium mb-5 pl-2 border-l-4 border-[#fea700] text-black">Activities</p>
          <p className="text-lg mb-10 text-black font-normal tracking-wide text-justify">
          SVCL is committed to revolutionizing legal education, fostering innovation, and advancing knowledge for society and industry. Our goal is to cultivate exceptional legal talent, shaping the future leaders of law and justice.
          </p>

          <div className="relative py-12">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
              >
                {[...activities, ...activities].map((activity, index) => (
                  <article
                    key={index}
                    className="mx-auto mt-8 mb-12 w-full shadow-lg h-[50vh] transform duration-500 hover:-translate-y-2 cursor-pointer group flex-shrink-0"
                    style={{ flex: `0 0 ${100 / visibleItems}%` }}
                  >
                    <div className="h-[50vh] bg-cover bg-center mx-auto w-[95%] rounded-lg relative overflow-hidden">
                      <img
                        src={activity.imageSrc || "/placeholder.svg"}
                        alt={activity.title}
                        layout="fill"
                        style={{ objectFit: "cover" }}
                        className="rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-75 transition-opacity duration-300 rounded-lg flex flex-col justify-end p-6">
                        <h1 className="text-white text-xl mb-5 transform translate-y-20 font-sans group-hover:translate-y-0 duration-300 border-l-4 border-[#fea700] px-2">
                          {activity.title}
                        </h1>
                        <p className="opacity-0 font-sans text-white text-lg text-justify font-normal group-hover:opacity-80 transform duration-500">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <button
              onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + activities.length) % activities.length)}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#fea700] h-10 w-10 rounded-full flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % activities.length)}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#fea700] h-10 w-10 rounded-full flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
