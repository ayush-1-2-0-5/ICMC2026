"use client"

import Link from "next/link"
import { Mail, MapPin } from 'lucide-react'
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
      "Math Department",
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


export function Footer() {
  return (
    <footer className="bg-[#c17f59] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">ICMC 2026</h2>
            <p className="text-sm">
              12th International Conference on Mathematics and Computing
            </p>
            <p className="text-sm mt-2">
              January 2026 | Jaipur, India
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
              {navItems.map((item) => (
                <div key={item.label} className="space-y-2">
                  {item.items ? (
                    <>
                      <span className="font-medium block">{item.label}</span>
                      <ul className="ml-4 space-y-1">
                        {item.items.map((subItem) => (
                          <li key={subItem}>
                            <Link
                              href={item.label === "VENUE" && subItem === "LNMIIT" 
                                ? "https://lnmiit.ac.in/" 
                                : `/${item.label.toLowerCase().replace(/\s+/g, '-')}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                              className="text-sm hover:text-orange-100 transition-colors"
                            >
                              {subItem}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={item.label === "HOME" ? "/" : `/${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                      className="hover:text-orange-100 transition-colors block"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p>
                  The LNM Institute of Information Technology,
                  <br />
                  Rupa ki Nangal, Post-Sumel,
                  <br />
                  Via-Jamdoli, Jaipur-302031, (Rajasthan) INDIA
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a 
                  href="mailto:icmc2026@lnmiit.ac.in"
                  className="hover:text-orange-100 transition-colors"
                >
                  ******@lnmiit.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-4 border-t border-white/20 text-center text-sm">
          <p>&copy; 2024 LNMIIT. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

