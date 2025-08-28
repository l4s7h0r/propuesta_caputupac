"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, User } from "lucide-react"

const artists = [
  {
    id: 1,
    name: "María González",
    specialty: "Arte Digital",
    works: [
      {
        id: 1,
        title: "Reflexiones Urbanas",
        year: "2023",
        medium: "Instalación Interactiva",
        image: "/urban-digital-art-installation-with-interactive-el.png",
        description:
          "Una exploración de la identidad urbana contemporánea a través de proyecciones interactivas que responden al movimiento de los espectadores.",
      },
      {
        id: 2,
        title: "Fragmentos de Memoria",
        year: "2022",
        medium: "Video Arte",
        image: "/abstract-video-art-with-memory-fragments.png",
        description: "Serie de videoarte que examina la construcción de la memoria personal en la era digital.",
      },
    ],
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    specialty: "Investigación Visual",
    works: [
      {
        id: 3,
        title: "Memorias Digitales",
        year: "2023",
        medium: "Proyección Multimedia",
        image: "/digital-memory-projection-with-data-streams.png",
        description: "Investigación visual sobre la preservación de la memoria colectiva en plataformas digitales.",
      },
      {
        id: 4,
        title: "Cartografías Invisibles",
        year: "2022",
        medium: "Instalación",
        image: "/invisible-cartography-art-installation.png",
        description: "Mapeo de espacios urbanos invisibles a través de datos y visualizaciones interactivas.",
      },
    ],
  },
  {
    id: 3,
    name: "Ana López",
    specialty: "Arte Sonoro",
    works: [
      {
        id: 5,
        title: "Ecosistemas Sonoros",
        year: "2023",
        medium: "Instalación Sonora",
        image: "/sound-art-installation-with-organic-forms.png",
        description: "Cartografía sonora que documenta la transformación acústica de espacios naturales y urbanos.",
      },
      {
        id: 6,
        title: "Resonancias",
        year: "2022",
        medium: "Performance Sonoro",
        image: "/sound-performance-with-acoustic-instruments.png",
        description: "Performance que explora las resonancias entre el cuerpo humano y el espacio arquitectónico.",
      },
    ],
  },
]

export function PortfolioSection() {
  const [selectedArtist, setSelectedArtist] = useState(artists[0])

  return (
    <section id="portafolio" className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-foreground font-serif">Portafolio por Artista</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explora las obras individuales de cada miembro del colectivo, cada una con su perspectiva única sobre arte e
            investigación.
          </p>
        </div>

        {/* Artist Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {artists.map((artist) => (
            <Button
              key={artist.id}
              variant={selectedArtist.id === artist.id ? "default" : "outline"}
              onClick={() => setSelectedArtist(artist)}
              className="flex items-center space-x-2"
            >
              <User className="w-4 h-4" />
              <span>{artist.name}</span>
            </Button>
          ))}
        </div>

        {/* Selected Artist Info */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">{selectedArtist.name}</h3>
          <p className="text-primary font-medium">{selectedArtist.specialty}</p>
        </div>

        {/* Artist's Works */}
        <div className="grid md:grid-cols-2 gap-8">
          {selectedArtist.works.map((work) => (
            <Card key={work.id} className="overflow-hidden group">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={work.image || "/placeholder.svg"}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-1">{work.title}</h4>
                    <p className="text-muted-foreground text-sm">
                      {work.medium} • {work.year}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-muted-foreground leading-relaxed">{work.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Works Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="px-8">
            Ver Todas las Obras del Colectivo
          </Button>
        </div>
      </div>
    </section>
  )
}
