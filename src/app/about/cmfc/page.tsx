import Link from 'next/link'

export default function CMFCAbout() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#c17f59] text-center mb-8">Centre for Mathematical & Financial Computing (C-MFC)</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
           
            <div className="flex-1">
              <p className="text-lg text-black mb-6">
                Welcome to the newly formed interdisciplinary Centre for Mathematical & Financial Computing (C-MFC) 
                at The LNM Institute of Information Technology, Jaipur. The centre is supported by DST-FIST grant 
                received by the Department of Mathematics. The centre has been established as a physical centre at 
                the Research, Innovation, and Entrepreneurship Park (RIEP) at the LNMIIT Jaipur.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-[#c17f59] mb-4">What Are We Doing?</h2>
            <p className="text-lg text-black mb-6">
              The C-MFC is dedicated to advancing research and education in the fields of mathematical and financial computing. 
              We focus on developing innovative solutions to complex problems in finance, economics, and related fields through 
              the application of advanced mathematical and computational techniques.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-[#c17f59] mb-4">Our Aim</h2>
            <p className="text-lg text-black mb-4">The CMFC aims to:</p>
            <ul className="list-disc list-inside text-lg text-black mb-6">
              <li>Work towards identification of key needs that merits its research attention.</li>
              <li>Carry out industry-relevant and other forms of applied as well as basic research involving various forms and sub-areas of mathematical computing, modelling and simulation as well as various areas.</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#c17f59] mb-4">Collaboration and Impact</h2>
            <p className="text-lg text-black mb-6">
              The C-MFC is committed to fostering collaboration between academia and industry. We strive to develop 
              cutting-edge solutions that have real-world applications and contribute to the advancement of both 
              mathematical and financial fields. Our research and educational programs aim to prepare the next 
              generation of experts in mathematical and financial computing.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="https://lnmiit.ac.in/CMFC/" 
              className="text-[#c17f59] hover:text-[#a06647] text-lg font-semibold"
            >
              Visit our official website
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

