import Image from "next/image"

export function AboutSection() {
  return (
    <section className="bg-gradient-to-b from-orange-100 to-orange-50 py-16">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          {/* About the Institute */}
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/4 flex justify-center md:justify-start">
              <Image
                src="/lnmiitlogo.jpg"
                alt="LNMIIT Logo"
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
            <div className="w-full md:w-3/4">
              <h2 className="text-3xl font-bold text-[#c17f59] mb-4">About the Institute</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                The LNM Institute of Information Technology (LNMIIT) Jaipur was established in 2002 as a public-private partnership between the Government of Rajasthan and the Lakshmi & Usha Mittal Foundation. LNMIIT offers undergraduate, postgraduate, and doctoral programs in various engineering disciplines, with a strong focus on research and innovation in technology and sciences.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/4 flex justify-center md:justify-start">
              <Image
                src="/icmcnewlogo.jpg"
                alt="Conference Logo"
                width={200}
                height={200}
                className="rounded-full bg-white p-2"
              />
            </div>
            <div className="w-full md:w-3/4">
              <h2 className="text-3xl font-bold text-[#c17f59] mb-4">About the Conference</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                ICMC 2026 aims to bring together both novice and experienced scientists with developers, to meet new colleagues, collect new ideas and establish new cooperation between research groups and provide a platform for researchers from academic and industry to present their original work and exchange ideas, information, techniques and applications in the field of Computational Applied Mathematics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

