import "../styles/globals.css"
import { Poppins, Playfair_Display } from "next/font/google"

// Definir las fuentes
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
})

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable} ${playfair.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
