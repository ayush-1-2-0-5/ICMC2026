'use client'

import React from 'react'
import Image from 'next/image'

export default function Accommodation() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#c17f59] text-center mb-8">Accommodation</h1>
        
        <div className="max-w-4xl mx-auto">
          {/* Venue Overview */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-[#c17f59] mb-6">Venue</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative h-[300px]">
                <Image
                  src="/centralplaza.jpg"
                  alt="LNMIIT Campus"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="relative h-[300px]">
                <Image
                  src="/lnmiit2.jpg"
                  alt="LNMIIT Building"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            <p className="text-lg text-black">
              The conference will be held at The LNM Institute of Information Technology, 
              located in the historic city of Jaipur. The campus provides a perfect blend 
              of modern facilities and serene environment for academic discussions.
            </p>
          </div>

          {/* Guest House Section */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-[#c17f59] mb-6">Guest House Accommodation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative h-[300px]">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Guest House Exterior"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="relative h-[300px]">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Guest House Room"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 text-lg text-black">
              <p>
                A limited number of accommodations are available in the Institute's guest house 
                on payment basis. It will be assigned as per the details received from the 
                registration form and availability.
              </p>
              <ul className="list-disc list-inside">
                <li>Air-conditioned rooms with modern amenities</li>
                <li>24/7 wifi connectivity</li>
                <li>Dining facility available</li>
                <li>Priority given to invited speakers and international delegates</li>
              </ul>
            </div>
          </div>

          {/* Hostel Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#c17f59] mb-6">Hostel Accommodation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative h-[300px]">
                <Image
                  src="/hostel1.png"
                  alt="Hostel Building"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="relative h-[300px]">
                <Image
                  src="/hostel2.png"
                  alt="Hostel Room"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 text-lg text-black">
              <p>
                Student participants can be accommodated in the institute hostels 
                subject to availability. The rooms are on sharing basis and provide 
                basic amenities needed for a comfortable stay.
              </p>
              <ul className="list-disc list-inside">
                <li>Separate hostels for male and female participants</li>
                <li>Basic furnishing and clean bedding provided</li>
                <li>Common room facilities</li>
                <li>Access to campus mess</li>
              </ul>
              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <p className="font-semibold">Note:</p>
                <p>
                  Accommodation requests will be processed on a first-come-first-served basis. 
                  Participants are encouraged to book their accommodation well in advance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

