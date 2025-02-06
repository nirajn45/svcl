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

"use client";

import Link from "next/link";

export default function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="w-11/12 container mx-auto px-4 py-5 flex justify-between items-center">
        <Link href="/">
          <img
            src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumu75j21zGDN7MfW9sTV1IA0zrSZwixYbo25LP"
            alt="SVCL Logo"
            width={150}
            height={80}
          />
        </Link>
        <nav>
          <ul className="flex space-x-12 text-[17px] font-medium">
            <li>
              <button onClick={() => scrollToSection("AboutUs")} className="text-gray-700 hover:text-blue-600">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("courses")} className="text-gray-700 hover:text-blue-600">
                Courses
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("faculty")} className="text-gray-700 hover:text-blue-600">
                Faculty
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("activities")} className="text-gray-700 hover:text-blue-600">
                Activities
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-blue-600">
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
