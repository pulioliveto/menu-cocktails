import Head from "next/head"
import Header from "./header"
import Footer from "./footer"

export default function Layout({
  children,
  title = "Antico Caffè - Cocktail Menu",
  description = "Scopri i nostri cocktail classici e speciali",
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  )
}
