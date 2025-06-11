import Link from "next/link"
import { Star, Clock } from "lucide-react"

export default function CocktailCard({ cocktail }) {
  // Imagen personalizada igual que en [nome].js
  const imagenRuta = `/images/cocktails/${cocktail.nome.toLowerCase().replace(/\s+/g, "-")}.jpg`
  const imagenFinal = cocktail.immagine && !cocktail.immagine.includes('placeholder')
    ? cocktail.immagine
    : imagenRuta

  return (
    <Link href={`/cocktail/${encodeURIComponent(cocktail.nome)}`}>
      <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full flex flex-col">
        <div className="relative h-56 overflow-hidden">
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

          {/* Image */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center p-4">
            <img
              src={imagenFinal}
              alt={cocktail.nome}
              className="h-full w-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = "/placeholder.svg?height=300&width=300"
              }}
            />
          </div>

          {/* Price tag */}
          <div className="absolute top-4 right-4 bg-amber-800 text-white px-3 py-1 rounded-full text-sm font-medium z-20 shadow-md">
            €{cocktail.prezzo.toFixed(2)}
          </div>

          {/* View details button (visible on hover) */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
            <span className="bg-white/90 backdrop-blur-sm text-amber-900 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              Vedi dettagli
            </span>
          </div>
        </div>

        <div className="p-5 flex-grow flex flex-col">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-amber-700 transition-colors">
            {cocktail.nome}
          </h2>

          <div className="flex items-center mb-3">
            <span className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
              {cocktail.categoria}
            </span>
          </div>

          {/* <p className="text-gray-600 text-sm line-clamp-2 flex-grow">{cocktail.descrizione}</p> */}

          <ul className="text-gray-600 text-sm line-clamp-2 flex-grow list-disc list-inside">
            {cocktail.ingredienti.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>

          <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
            <div className="flex items-center text-amber-700">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-xs ml-1">Popolare</span>
            </div>
            <div className="flex items-center text-gray-500 text-xs">
              <Clock className="h-3 w-3 mr-1" />
              <span>5 min</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
