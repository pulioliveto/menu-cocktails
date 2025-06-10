"use client"

import { useState, useEffect } from "react"
import Layout from "../components/layout"
import SearchFilters from "../components/search-filters"
import CocktailCard from "../components/cocktail-card"
import { cocktails } from "../data/cocktails"
import { GlassWaterIcon as CocktailGlass, Search } from "lucide-react"

export default function Home() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("tutti")
  const [isLoading, setIsLoading] = useState(true)

  // Simular carga para una mejor experiencia de usuario
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  // Filtrar cócteles por búsqueda y categoría
  const filteredCocktails = cocktails.filter((cocktail) => {
    const matchesSearch = cocktail.nome.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = activeCategory === "tutti" || cocktail.categoria === activeCategory
    return matchesSearch && matchesCategory
  })

  // Obtener categorías únicas
  const categories = ["tutti", ...new Set(cocktails.map((cocktail) => cocktail.categoria))]

  return (
    <Layout>
      <SearchFilters
        search={search}
        setSearch={setSearch}
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Hero section */}
      <section className="relative bg-amber-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt="Cocktail background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-900"></div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Scopri la nostra selezione di cocktail
            </h2>
            <p className="text-amber-200 text-lg mb-8">
              Dai classici intramontabili alle nostre creazioni speciali, ogni cocktail è preparato con ingredienti di
              prima qualità
            </p>
            <div className="flex justify-center">
              <a
                href="#menu"
                className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-400 text-amber-900 font-medium rounded-full transition-colors shadow-lg"
              >
                <CocktailGlass className="h-5 w-5 mr-2" />
                Esplora il menu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Menu section */}
      <section id="menu" className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-amber-900 mb-2">Il Nostro Menu</h2>
          <div className="w-24 h-0.5 bg-amber-400 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Seleziona una categoria o cerca il tuo cocktail preferito</p>
        </div>

        {/* Loading state */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md h-80 animate-pulse">
                <div className="h-56 bg-gray-200"></div>
                <div className="p-5">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/4 mb-3"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredCocktails.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">🍹</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Nessun cocktail trovato</h3>
            <p className="text-gray-600 mb-8">Prova con un altro nome o cambia i filtri</p>
            <button
              onClick={() => {
                setSearch("")
                setActiveCategory("tutti")
              }}
              className="inline-flex items-center px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors"
            >
              <Search className="h-4 w-4 mr-2" />
              Mostra tutti i cocktail
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCocktails.map((cocktail) => (
              <CocktailCard key={cocktail.nome} cocktail={cocktail} />
            ))}
          </div>
        )}
      </section>
    </Layout>
  )
}
