import { Plane, Train, Car } from 'lucide-react'

export default function HowToReach() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <h1 className="text-4xl font-bold text-[#c17f59] text-center mb-8">How to reach LNMIIT</h1>
          
          {/* Location Description */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-[#c17f59] mb-4">Location</h2>
            <p className="text-lg text-black mb-4">
              LNMIIT's campus is situated in Rupa ki Nangal, via Jamdoli, Jaipur, Rajasthan.
            </p>
            <p className="text-lg text-black mb-6">
              The address is as follows: The LNM Institute of Information Technology, Rupa ki Nangal, 
              Post-Sumel, Via-Jamdoli, Jaipur-302031, (Rajasthan) INDIA
            </p>
            
            {/* Google Maps Embed */}
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.0408304972403!2d75.92340527533687!3d26.936346476684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dba21e8a1d1c9%3A0x5ab565cce4d44c2b!2sThe%20LNM%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1704098433659!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Transportation Section */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-[#c17f59] mb-6">Transportation</h2>
            
            {/* Air */}
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0 w-12 h-12">
                <Plane className="w-12 h-12 text-[#c17f59]" />
              </div>
              <div>
                <p className="text-lg text-black mb-4">
                  Jaipur International Airport is the nearest airport, approximately 25 km away from the campus. 
                  It takes about 45-60 minutes to reach the campus from the airport. Prepaid taxis and cab services 
                  are available from the airport.
                </p>
              </div>
            </div>

            {/* Rail */}
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0 w-12 h-12">
                <Train className="w-12 h-12 text-[#c17f59]" />
              </div>
              <div>
                <p className="text-lg text-black mb-4">
                  Jaipur Junction Railway Station is approximately 22 km from the campus and takes about 
                  45 minutes to reach. Auto-rickshaws, taxis, and app-based cab services are readily available 
                  at the station.
                </p>
              </div>
            </div>

            {/* Road */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12">
                <Car className="w-12 h-12 text-[#c17f59]" />
              </div>
              <div>
                <p className="text-lg text-black mb-4">
                  The campus is well-connected by road and is accessible via Jamdoli on Jaipur-Agra highway. 
                  The Sindhi Camp Bus Stand is approximately 21 km from the campus.
                </p>
                <h3 className="text-xl font-semibold text-[#c17f59] mb-3">Cab Services</h3>
                <ul className="text-lg text-black">
                  <li>Uber: Available through app</li>
                  <li>Ola: Available through app</li>
                  <li>Local Radio Taxi: 0141-2380000</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

