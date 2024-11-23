const importantDates = [
    { date: "Sept 20, 2024", event: "Paper Submission deadline" },
    { date: "Oct 18, 2024", event: "Author notification" },
    { date: "Dec 18, 2024", event: "Conference begins" },
  ]
  
  const updates = [
    { date: "Mar 4, 2024", update: "Website launched" },
    { date: "Aug 12, 2024", update: "Paper submission link is up" },
    { date: "Sep 3, 2024", update: "Tentative details about tutorials added" },
    { date: "Sep 20, 2024", update: "Paper submission closed" },
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
  
  