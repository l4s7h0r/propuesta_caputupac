import { MapPin, Clock, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const upcomingEvents = [
  {
    id: 1,
    title: 'Exposición Colectiva: "Intersecciones"',
    date: "15 Mar 2024",
    time: "19:00",
    location: "Galería Central",
    address: "Av. Principal 123, Centro",
    type: "Exposición",
    capacity: "200 personas",
    image: "/art-gallery-exhibition-opening-with-people-viewing.png",
    description:
      "Muestra colectiva que presenta los trabajos más recientes del grupo, explorando las intersecciones entre arte, tecnología y sociedad contemporánea.",
  },
  {
    id: 2,
    title: 'Taller: "Arte Digital Interactivo"',
    date: "22 Mar 2024",
    time: "10:00",
    location: "Estudio Creativo",
    address: "Calle Arte 45, Distrito Cultural",
    type: "Taller",
    capacity: "25 personas",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Taller práctico donde los participantes aprenderán técnicas básicas de arte digital interactivo utilizando herramientas contemporáneas.",
  },
  {
    id: 3,
    title: 'Conferencia: "El Futuro del Arte-Investigación"',
    date: "5 Abr 2024",
    time: "16:00",
    location: "Universidad Nacional",
    address: "Campus Central, Auditorio Principal",
    type: "Conferencia",
    capacity: "300 personas",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Mesa redonda con investigadores internacionales sobre las tendencias emergentes en la práctica artística académica.",
  },
  {
    id: 4,
    title: 'Performance: "Resonancias Urbanas"',
    date: "18 Abr 2024",
    time: "20:00",
    location: "Plaza de las Artes",
    address: "Centro Histórico",
    type: "Performance",
    capacity: "500 personas",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Performance colectivo que transforma el espacio público en un laboratorio de experimentación sonora y visual.",
  },
]

const eventTypeColors = {
  Exposición: "bg-primary text-primary-foreground",
  Taller: "bg-secondary text-secondary-foreground",
  Conferencia: "bg-accent text-accent-foreground",
  Performance: "bg-muted text-muted-foreground",
}

export function EventsSection() {
  return (
    <section id="eventos" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-foreground font-serif">Próximos Eventos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Únete a nuestras actividades: exposiciones, talleres, conferencias y performances que exploran las fronteras
            del arte contemporáneo.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden">
              <div className="aspect-[5/3] overflow-hidden">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${eventTypeColors[event.type as keyof typeof eventTypeColors]}`}
                  >
                    {event.type}
                  </span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-foreground">{event.date}</div>
                    <div className="text-sm text-muted-foreground">{event.time}</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{event.title}</h3>

                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    <span>{event.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    <span>Capacidad: {event.capacity}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">{event.description}</p>

                <Button className="w-full">Reservar Lugar</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Events */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver Calendario Completo
          </Button>
        </div>
      </div>
    </section>
  )
}
