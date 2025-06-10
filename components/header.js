"use client"

import Link from "next/link"
import { Coffee } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative">
      {/* Decorative top border */}
      <div className="h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400"></div>
      {/* Main header */}
      <div className="bg-gradient-to-r from-amber-900 to-orange-900 text-white py-8 md:py-12 shadow-lg relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full bg-repeat"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <Link href="/" className="inline-block">
              <div className="flex items-center justify-center mb-2">
                <Coffee className="h-8 w-8 text-amber-300 mr-2" />
                <h1 className="font-playfair text-5xl md:text-6xl italic font-bold">
                  <span className="text-amber-300">Antico</span> Caffè
                </h1>
              </div>
            </Link>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto my-4"></div>
            <p className="text-amber-200 text-lg tracking-widest uppercase font-light">Cocktail Menu</p>
          </div>
        </div>
      </div>{" "}
      {/* Closing tag for main header */}
    </header>
  )
}
