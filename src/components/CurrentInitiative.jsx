import React from 'react'
import { Award, BookOpen, Users, Lightbulb } from 'lucide-react'

const initiatives = [
  {
    icon: <Award className="w-6 h-6 text-[#fea700]" />,
    title: 'BA LLB (5-Year Integrated Course) ',
    description: `Start Early, Lead the Legal World Blend of Law & Humanities Opportunities in Litigation, Corporate Law, Judiciary & More`,
  },
  {
    icon: <BookOpen className="w-6 h-6 text-[#fea700]" />,
    title: 'LLB (3-Year Course) ',
    description: 'For Graduates from Any Discipline, Master Legal Concepts & Advocacy, Career in Litigation, Corporate Law, Judiciary & More.',
  },
  
]

const CurrentInitiative = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-white to-gray-100 font-[Raleway]">
      <div className="w-10/12 mx-auto">
        <div className=" mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-black border-l-4 border-[#fea700] pl-2">
            <span className='text-[#fea700]'>Courses</span> Offered
          </h2>
          <p className="text-lg text-black font-medium tracking-wide text-justify">
          SVCL offers a diverse range of courses, including undergraduate and postgraduate programs in law, with specializations in areas such as constitutional law, criminal law, corporate law, and international law, designed to provide students with comprehensive legal knowledge and practical skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border-b-2 border-[#fea700] overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-[0px_4px_15px_rgba(255,165,0,0.4),0px_4px_15px_rgba(30,144,255,0.4)]"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-black">{item.title}</h3>
              </div>
              <p className="text-black text-lg font-medium">{item.description}</p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}

export default CurrentInitiative

