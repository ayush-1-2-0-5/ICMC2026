'use client'

import React from 'react'

type MemberWithDelegation = {
  name: string;
  delegation: string;
  institution: string;
}

type MemberWithoutDelegation = {
  name: string;
  institution: string;
}

type Member = MemberWithDelegation | MemberWithoutDelegation

type Committee = {
  title: string;
  members: Member[];
}

export default function CommitteePage() {
  const committees: Committee[] = [
    {
      title: "Patron",
      members: [
        {
          name: "Rahul Banerjee",
          institution: "LNMIIT Jaipur"
        }
      ]
    },
    {
      title: "General Chair",
      members: [
        {
          name: "P. K. Saxena",
          delegation: "Scientific Consultant-Cyber Security",
          institution: "DRDO, Ministry of Defence, Government of India"
        },
        {
            name: "P. D. Srivastava",
            delegation: "Former Professor and Head, Department of Mathematics",
            institution: "IIT Kharagpur,India"
        }
      ]
    },
    {
      title: "Programme Chairs",
      members: [
        {
          name: "S Ponnusamy",
          institution: "IIT Madras, India"
        },
        {
          name: "Jayaprakash Kar",
          institution: "LNMIIT, Jaipur"
        }
      ]
    }
  
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#c17f59] text-center mb-12">Committees</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {committees.map((committee, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-[#4B0082] mb-6">
                  {committee.title}
                </h2>
                <div className="space-y-6">
                  {committee.members.map((member, memberIndex) => (
                    <div key={memberIndex} className="flex flex-col gap-2">
                      <h3 className="text-xl text-gray-800 font-medium">
                        {member.name}
                      </h3>
                      {'delegation' in member && (
                        <p className="text-gray-700">
                          {member.delegation}
                        </p>
                      )}
                      <p className="text-gray-600 italic">
                        {member.institution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

