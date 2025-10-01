import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-secondary">
      <div className="container px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <p className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">Just In</p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">AIR MAX PULSE</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-xl text-pretty">
              Experience the next evolution of Air technology. Designed for comfort, built for performance, and crafted
              for style.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Button size="lg" className="rounded-full px-8 font-medium">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 font-medium bg-transparent">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px]">
            <img src="/nike-air-max-pulse-sneaker-product-shot-white-back.jpg" alt="Nike Air Max Pulse" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
