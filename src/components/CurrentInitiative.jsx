import React from 'react'
import { Award, BookOpen, Users, Lightbulb } from 'lucide-react'

const initiatives = [
  {
    icon: <Award className="w-6 h-6 text-[#fea700]" />,
    title: 'NAAC Accreditation',
    description: 'SVIET achieved a B++ grade with a score of 2.94 in 2024.',
  },
  {
    icon: <BookOpen className="w-6 h-6 text-[#fea700]" />,
    title: 'Academic Excellence',
    description: 'Committed to providing top-quality education across all disciplines.',
  },
  
]

const CurrentInitiative = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-white to-gray-100 font-[Raleway]">
      <div className="w-10/12 mx-auto">
        <div className=" mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-black border-l-4 border-[#fea700] pl-2">
            Current <span className='text-[#fea700]'> Initiatives</span> & Achievements
          </h2>
          <p className="text-lg text-black font-medium tracking-wide">
            At SVGOI, we are dedicated to nurturing future leaders through a combination of academic rigor, 
            cultural diversity, and state-of-the-art facilities. Our recent NAAC accreditation is a testament 
            to our commitment to excellence in education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border-b-2 border-[#fea700]"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-black">{item.title}</h3>
              </div>
              <p className="text-black">{item.description}</p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}

export default CurrentInitiative

