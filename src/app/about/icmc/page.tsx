import Image from 'next/image'
import { Footer } from "@/components/footer"

export default function ICMCAbout() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#c17f59] text-center mb-8">About ICMC 2026</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-48 h-48 relative flex-shrink-0">
              <Image
                src="/icmclogo.jpg"
                alt="ICMC Logo"
                width={192}
                height={192}
                className="rounded-full"
              />
            </div>
            <div className="flex-1">
              <p className="text-lg text-black mb-6">
                The conference started its journey from 2013 at Haldia Institute of Technology, India. 
                The flag of the conference was carried by different renowned institutes like IIT (BHU), 
                BITS (GOA) KIIT, Bhubaneswar, Sikkim University, India etc.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-[#c17f59] mb-4">Conference Objectives</h2>
            <p className="text-lg text-black mb-6">
              ICMC 2026 aims to bring together both novice and experienced scientists with developers, 
              to meet new colleagues, collect new ideas and establish new cooperation between research 
              groups and provide a platform for researchers from academic and industry to present their 
              original work and exchange ideas, information, techniques and applications in the field 
              of Computational Applied Mathematics.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#c17f59] mb-4">Research Areas</h2>
            <p className="text-lg text-black mb-4">The conference covers a wide range of topics including, but not limited to:</p>
            <ul className="grid grid-cols-1 text-black md:grid-cols-2 gap-4 list-disc list-inside text-lg">
              <li>Operations Research</li>
              <li>Numerical Analysis</li>
              <li>Computational Fluid Mechanics</li>
              <li>Soft Computing</li>
              <li>Cryptology & Security Analysis</li>
              <li>Image Processing</li>
              <li>Big Data</li>
              <li>Cloud Computing</li>
              <li>Data Analytics</li>
              <li>IoT</li>
              <li>Pervasive Computing</li>
              <li>Other emerging areas of research</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

