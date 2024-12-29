'use client'

import React from 'react'
import { Star, Info } from 'lucide-react'
import Image from 'next/image'

export default function AroundCampus() {
  const nearbyHotels = [
    {
      name: "Hotel Empyrean",
      address: "Durg Bypass, Padmanabhpur, Pushpak Nagar, near Maruti Suzuki Arena, Bhilai, Chhattisgarh 490020",
      contact: "06260341616",
      distanceCampus: "5.9 km",
      distanceStation: "3.5 km",
      distanceStand: "5.5 km"
    },
    {
      name: "Chouhan Resort",
      address: "NH 6, Durg Padmanabhpur, Smriti Nagar, Chhattisgarh 490020",
      contact: "07947131275",
      distanceCampus: "5.9 km",
      distanceStation: "3.5 km",
      distanceStand: "5.5 km"
    },
    {
      name: "The Grand Dhillon",
      address: "A-1, Nehru Nagar Square, G.E. Road, Priyadarsani Parisar West, Bhilai, Chhattisgarh 490020",
      contact: "07884044000",
      distanceCampus: "6.7 km",
      distanceStation: "3.8 km",
      distanceStand: "5.8 km"
    },
    {
      name: "Hotel Lotus",
      address: "Shastri Nagar, Bhilai, Chhattisgarh 490023",
      contact: "01246201519",
      distanceCampus: "6.9 km",
      distanceStation: "7.6 km",
      distanceStand: "9.6 km"
    }
  ]

  const featuredHotels = [
    {
      name: "Fairmont Jaipur",
      rating: 4.6,
      reviews: 65,
      image: "/fairmount.jpg",
      description: "A royal elegance in a historic setting. Nestled amongst the majestic Aravalli hills.",
      price: "US$352"
    },
    {
      name: "Rambagh Palace",
      rating: 4.9,
      reviews: 66,
      image: "/rambagh.jpg",
      description: "Centrally located in Jaipur, offering luxury accommodations with full-service spa.",
      price: "US$977"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#c17f59] text-center mb-8">Around the Campus</h1>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-[#c17f59] mb-6">Hotels near Campus</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-black">
                    <th className="text-left p-3 bg-gray-50">Hotel Name</th>
                    <th className="text-left p-3 bg-gray-50">Address</th>
                    <th className="text-left p-3 bg-gray-50">Contact No.</th>
                    <th className="text-left p-3 bg-gray-50">Distance from Campus</th>
                    <th className="text-left p-3 bg-gray-50">Distance from Station</th>
                    <th className="text-left p-3 bg-gray-50">Distance from Bus Stand</th>
                  </tr>
                </thead>
                <tbody>
                  {nearbyHotels.map((hotel, index) => (
                    <tr key={index} className="border-b text-black hover:bg-gray-50">
                      <td className="p-3 font-medium">{hotel.name}</td>
                      <td className="p-3">{hotel.address}</td>
                      <td className="p-3">{hotel.contact}</td>
                      <td className="p-3">{hotel.distanceCampus}</td>
                      <td className="p-3">{hotel.distanceStation}</td>
                      <td className="p-3">{hotel.distanceStand}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#c17f59] mb-6">Featured Hotels</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredHotels.map((hotel, index) => (
                <div key={index} className="border text-black rounded-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(hotel.rating) ? 'fill-current' : 'fill-none'}`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        {hotel.rating}/5 ({hotel.reviews} reviews)
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{hotel.description}</p>
                    <div className="flex justify-between items-center">
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </main>
  )
}

