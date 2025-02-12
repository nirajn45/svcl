export default function CareerOpportunities() {
    const opportunities = [
      "Judiciary (Judges, Magistrates)",
      "Legal Practice (Advocacy & Litigation)",
      "Corporate Legal Advisors",
      "Civil Services & Law Officers in Government Departments",
      "NGOs & Human Rights Organizations",
      "Law Firms & Arbitration Specialists",
      "Legal Research & Academia",
    ]
  
    return (
      <section className="py-16 bg-white font-sans font-semibold">
        <div className="container w-11/12 mx-auto ">
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-[#fea700] pl-2">Career Opportunities</h2>
          <p className="text-lg mb-10 text-black font-normal tracking-wide text-justify">
          Explore diverse career opportunities in the legal field with our comprehensive programs. We equip students with the knowledge, skills, and practical experience needed to excel in various legal professions, including advocacy, corporate law, judiciary, legal consultancy, and public service.
          </p>
          <div className="grid md:grid-cols-3 gap-4 gap-y-4">
            {opportunities.map((opportunity, index) => (
              <div key={index} className=" flex justify-center items-center text-center bg-white p-3 rounded-lg shadow-md">
                <p className="text-black text-lg font-semibold">{opportunity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  