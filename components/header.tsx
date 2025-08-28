"use client"

import { useState } from "react"
import { Search, Menu, X, Instagram, Twitter, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Quiénes Somos", href: "#quienes-somos" },
    { name: "Portafolio", href: "#portafolio" },
    { name: "Eventos", href: "#eventos" },
    { name: "Contacto", href: "#contacto" },
  ]

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      {/* Top bar with logo, search and social links */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">CA</span>
          </div>
          <h1 className="font-bold text-xl text-foreground hidden md:block">Colectivo Artístico</h1>
        </div>

        {/* Search bar */}
        <div className="hidden md:flex items-center space-x-2 flex-1 max-w-md mx-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Buscar obras, artistas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Social links */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="ghost" size="sm">
            <Instagram className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Twitter className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Facebook className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Navigation menu */}
      <nav className={`border-t border-border ${isMenuOpen ? "block" : "hidden"} md:block`}>
        <div className="container mx-auto px-4">
          <ul className="flex flex-col md:flex-row md:justify-center space-y-2 md:space-y-0 md:space-x-8 py-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile search */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Buscar obras, artistas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex justify-center space-x-3 mt-4">
            <Button variant="ghost" size="sm">
              <Instagram className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Facebook className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
