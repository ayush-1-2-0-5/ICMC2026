"use client"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown } from 'lucide-react'

type NavItem = {
  label: string;
  items?: string[];
}

const navItems: NavItem[] = [
  { label: "HOME" },
  { 
    label: "ABOUT",
    items: [
      "Institute",
      "C3-SDF",
      "CMFC",
      "ICMC"
    ]
  },
  { label: "SPEAKERS" },
  { label: "COMMITTEE" },
  { 
    label: "CALL FOR PAPERS",
    items: [
      "Contribution Tracks",
      "Author Guidelines",
      "Review Process", 
      "Submit Your Paper",
      "Accepted Papers"
    ]
  },
  { label: "REGISTRATION" },
  { label: "PAST EDITIONS" },
  { 
    label: "VENUE",
    items: [
      "LNMIIT",
      "How To Reach?",
      "Accommodation",
      "Around the Campus", 
      "Nearby Tourist Places",
      "VISA Information"
    ]
  },
  { label: "WORKSHOP" },
  { label: "CONTACT US" }
]

export function NavHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const router = useRouter()


  useEffect(() => {
    // Close dropdown and mobile menu when the route changes
    setIsOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  return (
    <header className="z-50 fixed-header">
      <div className="bg-gradient-to-r from-orange-600 to-orange-400 text-white">
        <nav className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link href="https://lnmiit.ac.in" target="_blank" aria-label="LNMIIT Website">
                <Image className="bg-white p-1" src="/lnmiitnewlogo.png" alt="LNMIIT Logo" width={75} height={75} />
              </Link>
              <div className="text-center md:text-left">
                <h1 className="text-xl md:text-2xl font-bold">12th International Conference on Mathematics and Computing</h1>
                <p className="text-sm">8th - 10th January 2026 | Jaipur, India</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Link href="https://lnmiit.ac.in/coe/c3sdf/" target="_blank" aria-label="C3-sdf">
                <Image className="rounded-full bg-white p-1" src="/c3-sdf.jpg" alt="c3-sdf Logo" width={75} height={75} />
              </Link>
              <Link href="https://crsind.in/" target="_blank" aria-label="CRSI">
                <Image className="rounded-full bg-white p-1" src="/crsi.jpg" alt="CRSI Logo" width={75} height={75} />
              </Link>
              <Link href="https://lnmiit.ac.in/coe/cmfc/" target="_blank" aria-label="cmfc Logo">
                <Image className="rounded-full bg-white p-1" src="/logo3.jpg" alt="cmfc Logo" width={75} height={75} />
              </Link>
            </div>
          </div>
        </nav>
      </div>
      
      <div className="bg-[#c17f59] py-2 relative">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link 
                  href={item.label === "HOME" ? "/" : `/${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-white hover:text-orange-100 transition-colors px-3 py-2 flex items-center gap-1"
                  onClick={(e) => {
                    if (item.items) {
                      e.preventDefault();
                      setOpenDropdown(openDropdown === item.label ? null : item.label);
                    }
                  }}
                >
                  {item.label}
                  {item.items && (
                    <ChevronDown 
                      className={`h-4 w-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  )}
                </Link>
                {item.items && openDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-[#c17f59] mt-2 py-2 rounded-md shadow-lg z-10">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem}
                        href={
                          item.label === "VENUE" && subItem === "LNMIIT"
                            ? "https://lnmiit.ac.in/"
                            : item.label === "VENUE" && subItem === "Nearby Tourist Places"
                            ? "https://www.makemytrip.com/tripideas/places-to-visit-in-jaipur"
                            : `/${item.label.toLowerCase().replace(/\s+/g, '-')}/${subItem.toLowerCase().replace(/\s+/g, '-')}`
                        }
                        className="block px-4 py-2 text-white hover:bg-[#a66c4a]"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
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
                          <Link
                            key={subItem}
                            href={
                              item.label === "VENUE" && subItem === "LNMIIT"
                                ? "https://lnmiit.ac.in/"
                                : item.label === "VENUE" && subItem === "Nearby Tourist Places"
                                ? "https://www.makemytrip.com/tripideas/places-to-visit-in-jaipur"
                                : `/${item.label.toLowerCase().replace(/\s+/g, '-')}/${subItem.toLowerCase().replace(/\s+/g, '-')}`
                            }
                            className="block text-white hover:bg-[#a66c4a] py-2 px-2"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    href={item.label === "HOME" ? "/" : `/${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-white hover:text-orange-100 py-2 w-full text-left block"
                  >
                    <span>{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

