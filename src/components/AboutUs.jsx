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
        <div className=" text-gray-900 sm:text-lg lg:w-1/2 font-medium">
        At Swami Vivekanand College of Law (SVCL), we believe that law is not just a profession but a powerful tool for societal transformation. Inspired by the vision of Swami Vivekananda, our institution is dedicated to nurturing dynamic legal professionals who uphold justice, integrity, and leadership. <br /><br />

        With a legacy of academic excellence and state-of-the-art facilities, SVCL provides a strong foundation for students to excel in the legal field. Our innovative approach to legal education ensures that students are well-equipped to face the challenges of a rapidly changing world. <br /><br />

        SVCL stands as a pillar of legal learning, shaping students into advocates, judges, policymakers, and corporate leaders of tomorrow. We are committed to fostering an environment that promotes growth, critical thinking, and a deep understanding of the law's impact on society.
        </div>
        
        
      </div>
    </section>
  )
}

export default AboutUs
