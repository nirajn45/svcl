export default function Faculty() {
    const facultyList = [
      "Dr. Harpreet Kaur",
      "Dr. Kusum",
      "Ms. Seema Devi",
      "Ms. Shefali Mahendru",
      "Ms. Shivalika Sharma",
      "Ms. Shivani Sharma",
      "Ms. Navjot Kaur",
      "Ms. Bhawna Mehta",
      "Ms. Rehiana",
      "Mr. Rohit Kumar",
      "Mr. Ajit Pathak",
      "Mr. Mukul",
    ]
  
    return (
      <section id="faculty" className="py-16 bg-gray-100 font-semibold font-[Raleway]">
        <div className="container w-11/12 mx-auto px-4">
          <div className="w-full flex ">
            <div className="">
              <h2 className="text-3xl font-semibold mb-5 text-black border-l-4 border-[#fea700] pl-2">
                Our <span className='text-[#fea700]'> Faculty</span>
              </h2>
            </div>
          </div>
          <p className="text-lg mb-10 text-black font-medium tracking-wide text-justify">
          The faculty is composed of experienced and dedicated professionals who are passionate about fostering a supportive and engaging learning environment. With a focus on academic excellence and innovation, they guide students through both theoretical and practical knowledge.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {facultyList.map((faculty, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow-md">
                <p className="text-center text-black text-xl ">{faculty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  