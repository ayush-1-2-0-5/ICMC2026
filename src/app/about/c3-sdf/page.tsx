import Image from 'next/image'
import { Footer } from "@/components/footer"

export default function C3SDFPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#c17f59] text-center mb-8">Center for Cryptology, Cybersecurity and Digital Forensics (C3-SDF)</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-48 h-48 relative flex-shrink-0">
              <Image
                src="/c3-sdf.jpg"
                alt="C3-SDF Logo"
                width={192}
                height={192}
                className="rounded-full"
              />
            </div>
            <div className="flex-1">
              <p className="text-lg text-black mb-6">
                Studying Cryptology, Cybersecurity, and Digital Forensics can be an excellent choice, especially in today's technology-driven world where security and privacy are paramount.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-[#c17f59] mb-4">What Are We Doing?</h2>
            <p className="text-lg text-black mb-6">
              With the rapid growth of information technology, security and privacy are the major concerns in the global market. The center C3-SDF has been established keeping in view of societal, technical and legal perspectives with respect to information and cyber security. This focuses on the primary objective to bring together researchers, educationalists and practitioners in the field of cryptology, cyber security and digital forensics.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-[#c17f59] mb-4">Our Aim</h2>
            <p className="text-lg text-black mb-4">
              Combining these three disciplines can provide you with a comprehensive skill set to address various aspects of information security.
            </p>
            <p className="text-lg text-black mb-2">The C3-SDF aims to:</p>
            <ul className="list-disc list-inside text-lg text-black">
              <li>Lead research and development in emerging areas of cryptography, information security, cybersecurity and digital forensics.</li>
              <li>Develop and validate new techniques for securing tomorrow's global information system infrastructure by exploring theoretical and practical applications and long-term academic research.</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#c17f59] mb-4">Industrial Collaboration</h2>
            <p className="text-lg text-black">
              The Centre focuses on cutting-edge research and development in the relevant fields to build next-generation experts.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

