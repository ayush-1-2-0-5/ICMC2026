const importantDates = [
    { date: "June 30, 2025", event: "Paper Submission deadline" },
    { date: "September 30, 2025", event: "Notification to Authors" },
    { date: "October 10, 2025", event: "Last Date of Author Registration" },
    { date: "October 15, 2025", event: "Final Manuscripts Due" },
    { date: "January 08, 2026", event: "Conference begins" },
  ]
  
  const updates = [
    { date: "November 23, 2024", update: "Website launched" },
    // { date: "Aug 12, 2024", update: "Paper submission link is up" },
    // { date: "Sep 3, 2024", update: "Tentative details about tutorials added" },
    { date: "June 30, 2025", update: "Paper submission closed" },
  ]
  
  export function DatesSection() {
    return (
      <section className="py-16 bg-white/80">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Important Dates */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <h3 className="text-xl font-semibold bg-blue-600 text-white p-4">
                Important Dates
              </h3>
              <div className="p-6 space-y-4">
                {importantDates.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-orange-700 font-medium">{item.date}</span>
                    <span className="text-gray-700">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Website Updates */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <h3 className="text-xl font-semibold bg-blue-600 text-white p-4">
                Website Updates
              </h3>
              <div className="p-6 space-y-4">
                {updates.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-orange-700 font-medium">{item.date}</span>
                    <span className="text-gray-700">{item.update}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  