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
      <section id="faculty" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Faculty</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {facultyList.map((faculty, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <p className="text-center text-gray-700">{faculty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  