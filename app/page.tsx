import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProductShowcase } from "@/components/product-showcase"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductShowcase />
      <Footer />
    </main>
  )
}
