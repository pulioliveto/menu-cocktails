import Link from "next/link"
import { Coffee, Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-amber-900 to-orange-900 text-white pt-12 pb-8 mt-12 relative overflow-hidden">
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
        <div className="flex flex-col items-center">
          <Link href="/" className="inline-flex items-center mb-4">
            <Coffee className="h-6 w-6 text-amber-300 mr-2" />
            <h3 className="font-playfair text-3xl italic font-bold text-amber-200">Antico Caffè</h3>
          </Link>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto my-4"></div>

          <div className="flex space-x-6 mb-6">
            <a href="#" className="text-amber-200 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-amber-200 hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-amber-200 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>

          <div className="text-center">
            <p className="text-amber-200 mb-2">Via Roma 123, 00100 Roma</p>
            <p className="text-amber-200 mb-4">Tel: +39 123 456 7890</p>
            <p className="text-sm text-amber-300/70">
              © {new Date().getFullYear()} Antico Caffè. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
