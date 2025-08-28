"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const featuredWorks = [
  {
    id: 1,
    title: "Reflexiones Urbanas",
    artist: "María González",
    image: "/abstract-urban-art-installation-with-geometric-sha.png",
    description: "Una exploración de la identidad urbana a través de instalaciones interactivas",
  },
  {
    id: 2,
    title: "Memorias Digitales",
    artist: "Carlos Ruiz",
    image: "/digital-art-projection-with-flowing-data-streams.png",
    description: "Investigación sobre la preservación de la memoria en la era digital",
  },
  {
    id: 3,
    title: "Ecosistemas Sonoros",
    artist: "Ana López",
    image: "/sound-art-installation-with-organic-forms.png",
    description: "Cartografía sonora de espacios naturales y urbanos",
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Exposición Colectiva 2024",
    date: "15 Mar 2024",
    location: "Galería Central",
    type: "Exposición",
  },
  {
    id: 2,
    title: "Taller de Arte Digital",
    date: "22 Mar 2024",
    location: "Estudio Creativo",
    type: "Taller",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredWorks.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredWorks.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredWorks.length) % featuredWorks.length)
  }

  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute top-10 left-10 caputupac-sun text-secondary w-8 h-8 z-10">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
        </svg>
      </div>
      <div className="absolute top-20 right-20 caputupac-circle w-6 h-6 text-accent z-10"></div>
      <svg className="caputupac-fish absolute top-32 left-1/4 w-12 h-8 text-primary z-10" viewBox="0 0 32 20">
        <path d="M2 10 Q8 5 16 10 Q24 15 30 10 M16 10 L20 6 M16 10 L20 14 M18 10 Q20 8 22 10" />
      </svg>

      {/* Hero Carousel */}
      <div className="relative h-[70vh] overflow-hidden">
        {featuredWorks.map((work, index) => (
          <div
            key={work.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={work.image || "/placeholder.svg"} alt={work.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-accent/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4 relative">
                <div className="mb-8">
                  <h1 className="text-5xl md:text-7xl font-bold mb-2 font-serif tracking-wider">CAPUTUPAC</h1>
                  <p className="text-xl md:text-2xl opacity-90 italic font-light">colectivo de arte</p>
                  <p className="text-lg md:text-xl mt-4 opacity-80 uppercase tracking-widest">
                    hacer arte con todo y sin nada
                  </p>
                  <p className="text-base md:text-lg mt-2 opacity-70">destruir&construir</p>
                </div>
                <div className="border-t border-white/30 pt-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{work.title}</h2>
                  <p className="text-lg md:text-xl mb-2 opacity-90">por {work.artist}</p>
                  <p className="text-base md:text-lg opacity-80 max-w-2xl mx-auto">{work.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 border border-white/30"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 border border-white/30"
          onClick={nextSlide}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {featuredWorks.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-secondary" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Introduction and Events */}
      <div className="container mx-auto px-4 py-16 relative">
        <svg className="caputupac-wave absolute top-8 right-10 w-16 h-8 text-secondary opacity-30" viewBox="0 0 48 24">
          <path d="M0 12 Q12 6 24 12 T48 12" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
        <div className="absolute bottom-20 left-20 caputupac-circle w-8 h-8 text-accent opacity-40"></div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Introduction */}
          <div className="relative">
            <svg
              className="caputupac-fish absolute -top-4 -right-4 w-10 h-6 text-primary opacity-50"
              viewBox="0 0 32 20"
            >
              <path d="M2 10 Q8 5 16 10 Q24 15 30 10 M16 10 L20 6 M16 10 L20 14 M18 10 Q20 8 22 10" />
            </svg>
            <h3 className="text-3xl font-bold mb-6 text-foreground font-serif">
              Explorando la Intersección entre Arte e Investigación
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Somos un colectivo interdisciplinario que fusiona la práctica artística con la investigación académica.
              Desde 2018, hemos desarrollado proyectos que cuestionan los límites entre el arte, la ciencia y la
              tecnología.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestro trabajo abarca desde instalaciones interactivas hasta investigaciones teóricas, siempre con el
              objetivo de generar nuevos diálogos y perspectivas sobre los desafíos contemporáneos.
            </p>
          </div>

          {/* Upcoming Events */}
          <div className="relative">
            <div className="absolute -top-2 -left-2 caputupac-sun text-secondary w-6 h-6 opacity-60">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-foreground font-serif">Próximos Eventos</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground">{event.title}</h4>
                      <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                        {event.type}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {event.location}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button className="mt-6 w-full bg-transparent" variant="outline">
              Ver Todos los Eventos
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
