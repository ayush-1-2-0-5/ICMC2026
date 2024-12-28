import { Footer } from "@/components/footer"

export default function AuthorGuidelines() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#c17f59] text-center mb-12">
            AUTHORS GUIDELINES
          </h1>
          
          <div className="space-y-12">
            {/* Guideline 1 */}
            <div className="flex gap-8 items-start">
              <span className="text-6xl font-bold text-[#c17f59]">1</span>
              <p className="text-lg text-black leading-relaxed mt-3">
                Every paper must be an original and unpublished work and not submitted for publication elsewhere (copyright infringement issues will be the responsibility of authors). Papers must be written in good English. The submissions must be anonymous, i.e., without author name(s), affiliation(s), acknowledgement(s), or obvious references. It should begin with a title, a short abstract, and a list of keywords, and its introduction should summarize the contributions of the paper.
              </p>
            </div>

            {/* Guideline 2 */}
            <div className="flex gap-8 items-start">
              <span className="text-6xl font-bold text-[#c17f59]">2</span>
              <p className="text-lg text-black leading-relaxed mt-3">
                Papers should be at most 16 pages in total, including references and appendices, using 11 point font and reasonable margins. Extra charges of Rs. 500/- or 10 USD per page is required after 10 pages and the maximum limit is 16 pages. Similarities of camera-ready paper will be less than or equal to 15% from all sources (including self) and less than or equal to 4% from a single source (self also).
              </p>
            </div>

            {/* Guideline 3 */}
            <div className="flex gap-8 items-start">
              <span className="text-6xl font-bold text-[#c17f59]">3</span>
              <p className="text-lg text-black leading-relaxed mt-3">
                The authors are encouraged to prepare their submissions as per the given guidelines. Submitted papers must be in PDF format and should be submitted electronically via submission link.
              </p>
            </div>

            {/* Guideline 4 */}
            <div className="flex gap-8 items-start">
              <span className="text-6xl font-bold text-[#c17f59]">4</span>
              <p className="text-lg  text-black leading-relaxed mt-3">
                All papers submitted as per the guidelines will be evaluated based on parameters such as originality, technical and/or research content/depth, correctness, relevance to conference theme, contributions, and readability. The authors of the accepted papers will be allowed to make corrections in accordance with the suggestions of the reviewers and submit final camera-ready papers within the stipulated deadline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

