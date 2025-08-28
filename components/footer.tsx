import { MapPin, Mail, Phone, Instagram, Twitter, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Quiénes Somos", href: "#quienes-somos" },
  { name: "Portafolio", href: "#portafolio" },
  { name: "Eventos", href: "#eventos" },
  { name: "Contacto", href: "#contacto" },
]

const experiences = [
  "Exposición Internacional de Arte Digital 2023",
  "Residencia Artística en Centro Cultural Europeo",
  "Colaboración con Universidad de Barcelona",
  "Premio Nacional de Innovación Artística 2022",
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">CA</span>
              </div>
              <h3 className="font-bold text-lg text-foreground">Colectivo Artístico</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Explorando las intersecciones entre arte, investigación y tecnología desde 2018.
            </p>
            <div className="flex space-x-2">
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

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Experiencias Destacadas</h4>
            <ul className="space-y-2">
              {experiences.map((experience, index) => (
                <li key={index} className="text-muted-foreground text-sm leading-relaxed">
                  {experience}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <div className="text-muted-foreground text-sm">
                  <p>Calle Arte 45</p>
                  <p>28001 Madrid, España</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">contacto@colectivoartistico.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">+34 123 456 789</span>
              </div>
            </div>
          </div>
        </div>

        {/* Founders */}
        <div className="border-t border-border mt-8 pt-8">
          <h4 className="font-semibold text-foreground mb-4 text-center">Fundadores</h4>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span>Dr. María González - Directora Artística</span>
            <span>Carlos Ruiz - Investigador Principal</span>
          </div>
        </div>

        {/* Map placeholder and Copyright */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Nuestra Ubicación</h4>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm">Mapa Interactivo</p>
                  <p className="text-xs">Distrito Cultural, Madrid</p>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm">
                © 2024 Colectivo de Artistas-Investigadores. Todos los derechos reservados.
              </p>
              <p className="text-muted-foreground text-xs mt-2">
                Sitio web diseñado con pasión por el arte y la investigación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
