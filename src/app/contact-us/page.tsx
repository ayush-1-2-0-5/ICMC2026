'use client'

import React from 'react'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function ContactUs() {
  const organizers = [
    {
      role: "Conference Chair",
      name: "Prof. Rahul Banerjee",
      email: "rahul@lnmiit.ac.in",
    },
    {
      role: "Organizing Secretary",
      name: "Dr. *******",
      email: "******@lnmiit.ac.in",
    },
    {
      role: "Technical Program Chair",
      name: "Dr. *****",
      email: "********@lnmiit.ac.in",
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#c17f59] text-center mb-8">Contact Us</h1>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Institute Address */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-[#c17f59] mb-6">
                  The LNM Institute of Information Technology
                </h2>
                <div className="flex items-start gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <p>
                    Rupa ki Nangal, Post-Sumel,<br />
                    Via-Jamdoli, Jaipur-302031,<br />
                    Rajasthan, INDIA
                  </p>
                </div>
              </div>

              {/* Organizers */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-[#c17f59] mb-6">Conference Organizers</h2>
                <div className="space-y-6">
                  {organizers.map((organizer, index) => (
                    <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                      <h3 className="font-semibold text-black text-lg">{organizer.role}</h3>
                      <p className="text-gray-600">{organizer.name}</p>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${organizer.email}`} className="hover:text-[#c17f59]">
                          {organizer.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-[#c17f59] mb-6">Quick Contact</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="w-5 h-5" />
                    <span>+91-141-2688090</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="w-5 h-5" />
                    <a href="mailto:info@lnmiit.ac.in" className="hover:text-[#c17f59]">
                      info@lnmiit.ac.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map and Image */}
            <div className="space-y-8">
              {/* Institute Image */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative h-[300px]">
                  <Image
                    src="/lnmiit2.jpg"
                    alt="LNMIIT Campus"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="h-[300px]  rounded-lg overflow-hidden">
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
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

