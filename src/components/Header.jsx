// "use client";

// import Link from "next/link"
// import Image from "next/image"

// export default function Header() {
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" })
//     }
//   }

//   return (
//     <header className="bg-white shadow-md fixed w-full z-10">
//       <div className="w-11/12 container mx-auto px-4 py-5 flex justify-between items-center">
//         <Link href="/">
//           <img
//             src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumu75j21zGDN7MfW9sTV1IA0zrSZwixYbo25LP"
//             alt="SVCL Logo"
//             width={150}
//             height={80}
//           />
//         </Link>
//         <nav>
//           <ul className="flex space-x-12 text-[17px] font-medium">
//             <li>
//               <button onClick={() => scrollToSection("AboutUs")} className="text-gray-700 hover:text-blue-600">
//                 About
//               </button>
//             </li>
//             <li>
//               <button onClick={() => scrollToSection("courses")} className="text-gray-700 hover:text-blue-600">
//                 Courses
//               </button>
//             </li>
//             <li>
//               <button onClick={() => scrollToSection("faculty")} className="text-gray-700 hover:text-blue-600">
//                 Faculty
//               </button>
//             </li>
//             <li>
//               <button onClick={() => scrollToSection("activities")} className="text-gray-700 hover:text-blue-600">
//                 Activities
//               </button>
//             </li>
//             <li>
//               <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-blue-600">
//                 Contact
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   )
// }

"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <header
      className={`fixed w-full z-10 font-[Raleway] transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white"}`}
    >
      <div className="container mx-auto px-4 w-11/12 py-3 sm:py-4 md:py-1 flex justify-between items-center">
        <Link href="/">
          <img
            src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumPraQSDZ89C4GnNKHTXFvruVyAOm6ZwU2Sibo"
            alt="SVCL Logo"
            width={120}
            height={60}
            className="w-28 sm:w-32 md:w-40 h-auto"
          />
        </Link>
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav
          className={`absolute lg:relative top-full left-0 w-full lg:w-auto lg:flex bg-white lg:bg-transparent shadow-md lg:shadow-none transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-12 text-base sm:text-lg font-medium p-5 lg:p-0">
            {["about", "courses", "faculty", "vision", "activities", "contact"].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 w-full text-left lg:w-auto"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

