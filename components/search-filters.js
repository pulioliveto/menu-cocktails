"use client"

import { useState, useEffect } from "react"
import { Search, Filter, ChevronDown } from "lucide-react"

export default function SearchFilters({ search, setSearch, categories, activeCategory, setActiveCategory }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Close filter dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isFilterOpen && !event.target.closest(".filter-container")) {
        setIsFilterOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isFilterOpen])

  return (
    <div className="bg-gradient-to-r from-amber-800 to-orange-800 text-white py-6 shadow-md sticky top-0 z-30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Search input */}
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Cerca un cocktail..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-3 px-4 pl-12 bg-amber-700/70 backdrop-blur-sm border border-amber-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-white placeholder-amber-200/80 transition-all"
            />
            <Search className="h-5 w-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-300" />

            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-300 hover:text-white"
              >
                <span className="sr-only">Clear search</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Mobile filter dropdown */}
          <div className="relative filter-container md:hidden w-full">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-amber-700/70 backdrop-blur-sm border border-amber-600/50 rounded-lg text-amber-200"
            >
              <div className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                <span>{activeCategory === "tutti" ? "Tutte le categorie" : activeCategory}</span>
              </div>
              <ChevronDown className={`h-4 w-4 transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
            </button>

            {isFilterOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-amber-800 border border-amber-700 rounded-lg shadow-lg overflow-hidden z-50">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category)
                      setIsFilterOpen(false)
                    }}
                    className={`w-full text-left px-4 py-3 transition-colors ${
                      activeCategory === category
                        ? "bg-amber-600 text-white font-medium"
                        : "text-amber-200 hover:bg-amber-700"
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop category filters */}
          <div className="hidden md:flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-amber-400 text-amber-900 font-semibold shadow-md"
                    : "bg-amber-700/70 backdrop-blur-sm text-amber-200 hover:bg-amber-600"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
