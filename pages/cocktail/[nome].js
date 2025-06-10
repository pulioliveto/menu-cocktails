"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { cocktails } from "../../data/cocktails"
import { Search, Filter, ChevronDown } from "lucide-react"
import Layout from "../../components/layout"

export default function CocktailPage() {
  const router = useRouter()
  const { nome } = router.query

  // Buscar el cocktail por nombre (ignorando mayúsculas/minúsculas)
  const cocktail = cocktails.find(
    (c) => c.nome.toLowerCase() === String(nome || "").toLowerCase()
  )

  // Ruta sugerida para la imagen personalizada
  const imagenRuta = `/images/cocktails/${cocktail ? cocktail.nome.toLowerCase().replace(/\s+/g, "-") : "default"}.jpg`

  // Si cocktail.immagine es placeholder, usa la imagen personalizada si existe
  let imagenFinal = cocktail && cocktail.immagine && !cocktail.immagine.includes('placeholder')
    ? cocktail.immagine
    : imagenRuta

  // Verificar si la imagen personalizada existe realmente
  // Si no existe, usar un fallback
  // (Esto solo funciona en el lado del cliente, así que agregamos un useEffect para comprobar)
  const [imgSrc, setImgSrc] = useState(imagenFinal)
  useEffect(() => {
    if (!cocktail) return
    const testImg = new window.Image()
    testImg.onload = () => setImgSrc(imagenFinal)
    testImg.onerror = () => setImgSrc('/placeholder.svg?height=300&width=300')
    testImg.src = imagenFinal
  }, [imagenFinal, cocktail])

  if (!cocktail) {
    return (
      <Layout>
        <div className="container mx-auto py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Cocktail non trovato</h2>
          <p className="text-gray-600 mb-8">Il cocktail richiesto non esiste.</p>
          <button onClick={() => router.back()} className="px-6 py-2 bg-amber-500 text-amber-900 rounded-full font-medium">Torna indietro</button>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-2xl min-h-[80vh] flex flex-col justify-center">
        <button
          onClick={() => router.back()}
          className="self-start mb-6 px-6 py-2 bg-amber-200 text-amber-900 rounded-full font-medium shadow hover:bg-amber-300 transition"
        >
          ← Volver atrás
        </button>
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center w-full">
          <img src={imgSrc} alt={cocktail.nome} className="w-48 h-48 object-cover rounded-lg mb-6 shadow-md" />
          <h1 className="text-4xl font-playfair font-bold text-amber-900 mb-2">{cocktail.nome}</h1>
          <span className="inline-block bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full mb-4">{cocktail.categoria}</span>
          <p className="text-lg text-gray-700 mb-4">{cocktail.descrizione}</p>
          <div className="w-full mb-4">
            <h3 className="text-xl font-semibold text-amber-800 mb-2">Ingredienti</h3>
            <ul className="list-disc list-inside text-gray-800">
              {cocktail.ingredienti.map((ing, i) => {
                const match = ing.match(/^(\d+ml)?\s*([A-Za-zÀ-ÿ' ]+)/)
                const cantidad = match && match[1] ? match[1] : ''
                const nombreBebida = match && match[2] ? match[2].trim() : ''
                const resto = ing.replace(`${cantidad ? cantidad + ' ' : ''}${nombreBebida}`, '').trim()
                return (
                  <li key={i} className="mb-2">
                    {cantidad && <span className="text-base text-amber-700 font-semibold mr-1">{cantidad}</span>}
                    <span className="text-lg font-bold text-amber-900 mr-1">{nombreBebida}</span>
                    <span className="text-base text-gray-700">{resto}</span>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="w-full mb-4">
            <h3 className="text-xl font-semibold text-amber-800 mb-2">Preparazione</h3>
            <p className="text-gray-800">{cocktail.preparazione}</p>
          </div>
          {cocktail.guarnizione && (
            <div className="w-full mb-4">
              <h3 className="text-xl font-semibold text-amber-800 mb-2">Guarnizione</h3>
              <p className="text-gray-800">{cocktail.guarnizione}</p>
            </div>
          )}
          <div className="w-full flex justify-end items-center mt-4">
            <span className="bg-amber-800 text-white px-4 py-2 rounded-full font-bold text-lg shadow">€{cocktail.prezzo.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

