import { Footer } from "@/components/footer"

export default function CallForPapers() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#c17f59] text-center mb-8">Call for Papers</h1>
        <p className="text-lg text-center mb-8 text-black">
          We invite submissions for the 12th International Conference on Mathematics and Computing (ICMC 2026).
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#c17f59] mb-4">Important Links</h2>
            <ul className="list-disc list-inside">
              <li><a href="/call-for-papers/contribution-tracks" className="text-blue-600 hover:underline">Contribution Tracks</a></li>
              <li><a href="/call-for-papers/author-guidelines" className="text-blue-600 hover:underline">Author Guidelines</a></li>
              <li><a href="/call-for-papers/review-process" className="text-blue-600 hover:underline">Review Process</a></li>
              <li><a href="/call-for-papers/submit-your-paper" className="text-blue-600 hover:underline">Submit Your Paper</a></li>
              <li><a href="/call-for-papers/accepted-papers" className="text-blue-600 hover:underline">Accepted Papers</a></li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#c17f59] mb-4">Key Dates</h2>
            <ul className="space-y-2 text-black">
              <li><strong>Submission Deadline:</strong> September 15, 2025</li>
              <li><strong>Notification of Acceptance:</strong> November 1, 2025</li>
              <li><strong>Camera-ready Submission:</strong> December 1, 2025</li>
              <li><strong>Conference Dates:</strong> January 15-17, 2026</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

