import Link from "next/link"
import { Search, Heart, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <svg className="h-8 w-12" viewBox="0 0 69 32" fill="currentColor">
              <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-.64 2.56.16 4.4 1.04 2.4 4.4 2.4 2.4 0 5.92-1.28L67.36 1.28q.72-.32 1.2-.32.64 0 .64.8 0 .48-.64 2.24z" />
            </svg>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              New & Featured
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Men
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Women
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Kids
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Sale
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input type="text" placeholder="Search" className="bg-transparent border-none outline-none text-sm w-40" />
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
