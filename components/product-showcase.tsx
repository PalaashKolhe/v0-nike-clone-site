import { Button } from "@/components/ui/button"

export function ProductShowcase() {
  return (
    <section className="container px-4 py-16 md:py-24">
      <div className="space-y-12">
        {/* Product Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="aspect-square relative rounded-lg overflow-hidden bg-secondary">
              <img
                src="/nike-air-max-pulse-sneaker-side-view-detailed-prod.jpg"
                alt="Nike Air Max Pulse - Side View"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  className="aspect-square rounded-lg overflow-hidden bg-secondary hover:ring-2 hover:ring-primary transition-all"
                >
                  <img
                    src={`/nike-air-max-pulse-angle-.jpg?height=200&width=200&query=nike air max pulse angle ${i}`}
                    alt={`View ${i}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8 lg:sticky lg:top-24">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Nike Air Max Pulse</h2>
              <p className="text-2xl font-semibold">$150</p>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The Air Max Pulse brings a new dimension to the iconic Air Max line. With its innovative cushioning
                system and sleek design, it delivers unparalleled comfort and style for your everyday adventures.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span>Visible Air Max cushioning for superior comfort</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span>Breathable mesh upper with synthetic overlays</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span>Rubber outsole with waffle pattern for traction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span>Padded collar and tongue for enhanced comfort</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Select Size</label>
                <div className="grid grid-cols-5 gap-2">
                  {["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5"].map((size) => (
                    <button
                      key={size}
                      className="aspect-square rounded-lg border-2 border-border hover:border-foreground transition-colors text-sm font-medium"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button size="lg" className="flex-1 rounded-full font-medium">
                  Add to Bag
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-6 bg-transparent">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </Button>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-border">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer font-medium">
                  Delivery & Returns
                  <svg
                    className="h-5 w-5 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  Free standard delivery on orders over $50. Free returns within 30 days.
                </p>
              </details>
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer font-medium">
                  Product Information
                  <svg
                    className="h-5 w-5 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  Style: DM9652-100
                  <br />
                  Colorway: White/Pure Platinum/Black
                  <br />
                  Country/Region of Origin: Vietnam
                </p>
              </details>
            </div>
          </div>
        </div>

        {/* You Might Also Like */}
        <div className="space-y-8 pt-12">
          <h3 className="text-2xl font-bold">You Might Also Like</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Air Max 90", price: "$130", color: "White/Black" },
              { name: "Air Max 270", price: "$160", color: "Triple Black" },
              { name: "Air Max Plus", price: "$170", color: "Blue/White" },
              { name: "Air Max 97", price: "$180", color: "Silver Bullet" },
            ].map((product, i) => (
              <div key={i} className="group cursor-pointer space-y-3">
                <div className="aspect-square rounded-lg overflow-hidden bg-secondary">
                  <img
                    src={`/nike-.jpg?height=400&width=400&query=nike ${product.name} sneaker ${product.color}`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-1">
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-muted-foreground">{product.color}</p>
                  <p className="font-semibold">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
