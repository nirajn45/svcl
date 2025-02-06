import React from 'react'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <section className=" w-full mx-auto flex flex-col py-8 lg:py-20 font-[Raleway]">
       <p className="text-4xl pb-3 mb-3 font-semibold w-11/12 mx-auto">
        <span className="text-[#fea700] ">
          About  </span>
        <br/>
        The SVGOI
      </p>
      
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row items-start gap-10">
      <div className="relative lg:w-1/2 mt-8 lg:mt-0">
          <img
            src="https://cofd2uo2s6.ufs.sh/f/LSgXeBx6oTrNJqg1PXsNHCBiEwX2zYqul5kc8reRTQMbL9jU"
            width={800} 
            height={800} 
            alt="SVGOI Campus" 
            className="w-full lg:h-[450px] rounded-lg shadow-lg "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg"></div>
          
        </div>
        <div className=" text-gray-900 sm:text-lg lg:w-1/2 font-medium text-[30px]">
         
          {/* <ul className='text-[16px] max-w-xl space-y-3'>
            {[
              { year: '2005', event: 'Swami Vivekanand College of Pharmacy (SVCP) and Swami Vivekanand College of Education (SVCE) were established.' },
              { year: '2010', event: 'Swami Vivekanand Polytechnic College (SVPC) joined the group.' },
              { year: '2012', event: 'Swami Vivekanand Faculty of Information Technology & Business Management and Swami Vivekanand Industrial Training Centre (SVITC) were introduced.' },
              { year: '2014', event: 'Swami Vivekanand College of Faculty Management & Technology came into existence.' },
              { year: '2017', event: 'Swami Vivekanand College of Management & Technology (SVCMT) was established under MRSPTU.' },
              { year: '2021', event: 'Swami Vivekanand College of Law became the latest addition to the group.' }
            ].map((item, index) => (
              <li key={index} className="p-1 shadow-md">
                <span className='font-semibold text-[#fea700]'>{item.year}:</span> {item.event}
              </li>
            ))}
          </ul> */}
          At Swami Vivekanand College of Law (SVCL), we believe that law is not just a profession but a powerful tool for societal transformation. Inspired by the vision of Swami Vivekananda, our institution is dedicated to nurturing dynamic legal professionals who uphold justice, integrity, and leadership.
          With a legacy of academic excellence, state-of-the-art facilities, and an innovative approach to legal education, SVCL stands as a pillar of legal learning that shapes students into advocates, judges, policymakers, and corporate leaders of tomorrow.

        </div>
        
        
      </div>
    </section>
  )
}

export default AboutUs
