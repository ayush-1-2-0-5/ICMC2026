"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  { label: "Home" },
  { 
    label: "Technical Program",
    items: [
      "Call for Papers",
      "Accepted Papers",
      "Tutorials",
      "Invited Talks",
    ]
  },
  { 
    label: "Registration & Venue",
    items: [
      "Venue & Accommodation",
      "Registration Fee Details",
      "Registration for Indian Participants",
      "Registration for Foreign Participants",
    ]
  },
  { 
    label: "Committees",
    items: [
      "Program Committee",
      "General Chairs",
      "Organizing Committee",
      "Advisory Committee",
    ]
  },
  { label: "Sponsors" },
  { label: "Contact" },
]

export function NavHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="relative">
      <div className="bg-gradient-to-r from-orange-600 to-orange-400 text-white">
        <nav className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link href="https://lnmiit.ac.in" target="_blank" aria-label="LNMIIT Website">
                <Image className="rounded-full bg-white p-1" src="/lnmiitlogo.jpg" alt="LNMIIT Logo" width={75} height={75} />
              </Link>
              <div className="text-center md:text-left">
                <h1 className="text-xl md:text-2xl font-bold">12th International Conference on Mathematics and Computing</h1>
                <p className="text-sm">January 2026 | Jaipur, India</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* <Link href="https://www.ramanujanmathsociety.org/" target="_blank" aria-label="Ramanujan Math Society">
                <Image className="rounded-full bg-white p-1" src="/ramanujan.jpg" alt="Ramanujan Logo" width={75} height={75} />
              </Link> */}
              <Link href="https://crsind.in/" target="_blank" aria-label="CRSI">
                <Image className="rounded-full bg-white p-1" src="/crsi.jpg" alt="CRSI Logo" width={75} height={75} />
              </Link>
              {/* <Link href="https://setsindia.in/" target="_blank" aria-label="SETS India">
                <Image className="rounded-full bg-white p-1" src="/sets.jpg" alt="SETS Logo" width={75} height={75} />
              </Link> */}
            </div>
          </div>
        </nav>
      </div>
      
      <div className="bg-[#c17f59] py-2">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button 
                  className="text-white hover:text-orange-100 transition-colors px-3 py-2 flex items-center gap-1"
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                >
                  {item.label}
                  {item.items && (
                    <ChevronDown 
                      className={`h-4 w-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  )}
                </button>
                {item.items && openDropdown === item.label && (
                  <div className="absolute left-0 mt-1 w-64 bg-[#c17f59] shadow-lg">
                    <div className="py-1">
                      {item.items.map((subItem) => (
                        <span
                          key={subItem}
                          className="block px-4 py-2 text-white hover:bg-[#a66c4a] cursor-default"
                        >
                          {subItem}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex justify-center">
            <button
              className="text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#c17f59] py-4 z-50">
          <div className="flex flex-col items-start gap-2 px-4">
            {navItems.map((item) => (
              <div key={item.label} className="w-full">
                {item.items ? (
                  <div className="w-full">
                    <button 
                      className="flex justify-between items-center w-full text-white hover:text-orange-100 py-2"
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.items.map((subItem) => (
                          <span
                            key={subItem}
                            className="block text-white hover:bg-[#a66c4a] py-2 px-2 cursor-default"
                          >
                            {subItem}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button className="text-white hover:text-orange-100 py-2 w-full text-left">
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

