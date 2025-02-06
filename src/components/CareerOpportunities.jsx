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
      <section className="py-16 bg-white font-[Raleway] font-semibold">
        <div className="container mx-auto px-20">
          <h2 className="text-3xl font-bold text-center mb-8">Career Opportunities</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg flex justify-center items-center text-center">
                <p className="text-gray-700 text-xl">{opportunity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  