import Image from "next/image"
export default function InstituteAbout() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#c17f59] text-center mb-12">
            ABOUT LNMIIT
          </h1>
          <div className="mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <Image
                src="/lnmiitlogo.jpg"
                alt="LNMIIT Logo"
                width={200}
                height={200}
                className="rounded-full bg-white p-2"
              />
              <p className="text-lg text-black leading-relaxed">
                LNMIIT is at the frontier of academic and intellectual here-to learn, research, teach, work, and grow-join students and scholars in the pursuit of true knowledge, and a better world.
              </p>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#c17f59] mb-4">Foundation</h2>
            <div className="bg-white/50 rounded-lg p-6 shadow-sm">
              <p className="text-lg text-black leading-relaxed">
                The LNMIIT Jaipur, with a large campus, infrastructure and distinguished faculty is aimed to be world-class institute of excellence.
              </p>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#c17f59] mb-4">Vision</h2>
            <div className="bg-white/50 rounded-lg p-6 shadow-sm">
              <p className="text-lg text-black leading-relaxed">
                To establish world-class platform for creation of knowledge through quality research and its dissemination through technologically-enabled teaching – learning pedagogy in the field of science, technology, engineering, arts and management. To become a catalyst in the societal and national development, by ensuring continuous interaction with industry and other academic and research institutions in India and abroad.
              </p>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#c17f59] mb-4">Mission</h2>
            <div className="bg-white/50 rounded-lg p-6 shadow-sm">
              <ul className="list-disc text-black list-inside space-y-4 text-lg">
                <li>To offer state of the art undergraduate programs in IT & ITES as well as core disciplines with emphasis on strong fundamentals.</li>
                <li>To establish centers of excellence in emerging areas to provide significant breakthrough required to solve real world problems.</li>
                <li>To make The LNMIIT as the most preferred institute for higher education across the country.</li>
                <li>To create intellectual property through innovations, quality research publications and patents.</li>
                <li>To instill core values of excellence, integrity, teamwork, professional ethics and environmental concerns.</li>
                <li>To foster and nurture leadership and entrepreneurial qualities and lifelong learning amongst students, research scholars, faculty and staff of The LNMIIT.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

