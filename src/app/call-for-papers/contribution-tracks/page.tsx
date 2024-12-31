import { Footer } from "@/components/footer"

export default function ContributionTracks() {
  const tracks = [
    {
      number: "II",
      name: "Analysis and Topology",
      chair: "Swadesh Kumar Sahoo, IIT Indore, India",
      coChairs: "To be announced"
    },
    {
      number: "IV",
      name: "Applied Mathematics and Computational Methods",
      chair: "Gopal Chandra Shit, Jadavpur University, India",
      coChairs: "To be announced"
    },
    {
      number: "V",
      name: "Probability and Statistics",
      chair: "Abhijit Datta Banik, IIT Bhubaneswar, India",
      coChairs: "To be announced"
    },
    {
      number: "VI",
      name: "Communication and Computing",
      chair: "Jaydeb Bhaumik, Jadavpur University, India",
      coChairs: "To be announced"
    },
    {
      number: "VIII",
      name: "Computational Intelligence",
      chair: "Sanasam Ranbir Singh, IIT Guwahati, India",
      coChairs: [
        "Sourav Mandal, XIM University, Bhubaneswar, India",
        "More to be announced"
      ]
    },
    {
      number: "IX",
      name: "Security and Privacy",
      chairs: [
        "Arup Kumar Pal, IIT Dhanbad, India"
      ],
      coChairs: "To be announced"
    },
    {
      number: "X",
      name: "Blockchain Technology and Its Applications",
      chair: "Sangram Ray, NIT Sikkim, India",
      coChairs: [
        "Kartick Sutradhar, Indian Institute of Information Technology Sri City, India",
        "Suman Majumder, Nanyang Technological University (N.T.U), Singapore"
      ]
    },
    {
      number: "XI",
      name: "Network and Computing Technologies",
      chair: "Saru Kumari, Chaudhary Charan Singh University, India",
      coChairs: [
        "Tanmoy Maitra, KIIT University, Bhubaneswar, Odisha, India"
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#c17f59] text-center mb-8">Contribution Tracks</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {tracks.map((track, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-[#c17f59] mb-4">
                Track {track.number}: {track.name}
              </h2>
              <div className="space-y-2">
                <p className="font-semibold text-black">
                  {track.chairs ? 'Track Chairs:' : 'Track Chair:'}
                </p>
                {track.chairs ? (
                  <ul className="list-disc text-black list-inside">
                    {track.chairs.map((chair, idx) => (
                      <li key={idx}>{chair}</li>
                    ))}
                  </ul>
                ) : (

                  <p className="text-black">{track.chair}</p>
                )}
                <p className="font-semibold text-black mt-4">Track Co-Chairs:</p>
                {Array.isArray(track.coChairs) ? (
                  <ul className="list-disc text-black list-inside">
                    {track.coChairs.map((coChair, idx) => (
                      <li key={idx}>{coChair}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-black">{track.coChairs}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

