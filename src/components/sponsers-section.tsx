"use client"

import Link from "next/link";
const icmcLinks = {
  "ICMC 2025": "https://events.iitbhilai.ac.in/icmc2025/",
  "ICMC 2024": "http://icmc2024.kalasalingam.ac.in/",
  "ICMC 2023": "https://www.bits-goa.ac.in/ICMC/",
  "ICMC 2022": "https://link.springer.com/book/10.1007/978-981-19-9307-7",
  "ICMC 2021": "https://link.springer.com/book/10.1007/978-981-16-6890-6",
  "ICMC 2020": "https://link.springer.com/book/10.1007/978-981-15-8061-1",
  "ICMC 2019": "https://link.springer.com/book/10.1007/978-981-15-5411-7",
  "ICMC 2018": "https://link.springer.com/book/10.1007/978-981-13-0023-3",
  "ICMC 2017": "https://link.springer.com/book/10.1007/978-981-10-4642-1",
  "ICMC 2015": "https://link.springer.com/book/10.1007/978-81-322-2452-5",
  "ICMC 2013": "https://link.springer.com/book/10.1007/978-81-322-1952-1",
};

export function SponsorsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4 space-y-12">
        <div className="space-y-6 items-center">
          <h3 className="text-xl font-semibold text-center  bg-blue-600 text-white py-2 px-6 rounded-full inline-block mx-auto">
            Past ICMC Proceedings
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {(Object.keys(icmcLinks) as Array<keyof typeof icmcLinks>).map((year) => (
              <Link key={year} href={icmcLinks[year]}>
                <div className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-semibold text-center text-blue-600">{year}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

