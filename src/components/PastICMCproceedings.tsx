import Link from 'next/link';

const icmcYears = [
  { year: "ICMC 2025", link: "https://abc.com/icmc-2025" },
  { year: "ICMC 2024", link: "https://abc.com/icmc-2024" },
  { year: "ICMC 2023", link: "https://abc.com/icmc-2023" },
  { year: "ICMC 2022", link: "https://abc.com/icmc-2022" },
  { year: "ICMC 2021", link: "https://abc.com/icmc-2021" },
  { year: "ICMC 2020", link: "https://abc.com/icmc-2020" },
  { year: "ICMC 2019", link: "https://abc.com/icmc-2019" },
  { year: "ICMC 2018", link: "https://abc.com/icmc-2018" },
  { year: "ICMC 2017", link: "https://abc.com/icmc-2017" },
  { year: "ICMC 2016", link: "https://abc.com/icmc-2016" },
  { year: "ICMC 2015", link: "https://abc.com/icmc-2015" },
  { year: "ICMC 2014", link: "https://abc.com/icmc-2014" },
  { year: "ICMC 2013", link: "https://abc.com/icmc-2013" }
];

export function PastICMCProceedings() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-center bg-blue-600 text-white py-2 px-6 rounded-full inline-block mx-auto">
        Past ICMC Proceedings
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {icmcYears.map(({ year, link }) => (
          <Link key={year} href={link} passHref>
            <div className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-semibold text-center text-blue-600">{year}</h4>
              <p className="text-center text-gray-600">Proceedings and Details</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
