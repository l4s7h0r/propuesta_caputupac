import { Card, CardContent } from "@/components/ui/card"

const founders = [
  {
    id: 1,
    name: "Dr. María González",
    role: "Directora Artística",
    image: "/professional-portrait-of-female-artist-director.png",
    bio: "Doctora en Bellas Artes con especialización en arte digital. Ha expuesto en galerías internacionales y dirigido proyectos de investigación artística.",
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    role: "Investigador Principal",
    image: "/professional-portrait-of-male-researcher.png",
    bio: "Magíster en Estudios Culturales. Su trabajo se centra en la intersección entre tecnología y expresión artística contemporánea.",
  },
]

const members = [
  {
    id: 3,
    name: "Ana López",
    role: "Artista Sonora",
    image: "/portrait-of-sound-artist-with-audio-equipment.png",
    bio: "Especialista en arte sonoro y paisajes acústicos urbanos.",
  },
  {
    id: 4,
    name: "Diego Martín",
    role: "Artista Visual",
    image: "/portrait-of-visual-artist-with-paintbrush.png",
    bio: "Artista multidisciplinario enfocado en instalaciones interactivas.",
  },
  {
    id: 5,
    name: "Laura Vega",
    role: "Investigadora",
    image: "/portrait-of-female-researcher-with-books.png",
    bio: "Doctoranda en Antropología Cultural, especializada en prácticas artísticas contemporáneas.",
  },
  {
    id: 6,
    name: "Roberto Silva",
    role: "Artista Digital",
    image: "/portrait-of-digital-artist-with-computer.png",
    bio: "Desarrollador creativo especializado en arte generativo y realidad aumentada.",
  },
]

export function AboutSection() {
  return (
    <section id="quienes-somos" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground font-serif">Quiénes Somos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Un colectivo interdisciplinario que fusiona arte, investigación y tecnología para crear experiencias que
            desafían los límites tradicionales del arte contemporáneo.
          </p>
        </div>

        {/* Collective Description */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 text-lg text-muted-foreground leading-relaxed">
            <div>
              <p className="mb-4">
                Fundado en 2018, nuestro colectivo nace de la necesidad de crear un espacio donde el arte y la
                investigación académica converjan de manera orgánica y productiva.
              </p>
              <p>
                Creemos que el arte tiene el poder de generar conocimiento y que la investigación puede enriquecer
                profundamente la práctica artística.
              </p>
            </div>
            <div>
              <p className="mb-4">
                Nuestros proyectos abordan temas como la identidad digital, la memoria colectiva, los espacios urbanos y
                la relación entre tecnología y humanidad.
              </p>
              <p>
                Trabajamos con instituciones académicas, galerías y espacios culturales para difundir nuestro trabajo y
                generar diálogos significativos.
              </p>
            </div>
          </div>
        </div>

        {/* Founders */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-foreground font-serif">Fundadores</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder) => (
              <Card key={founder.id} className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={founder.image || "/placeholder.svg"}
                    alt={founder.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-foreground">{founder.name}</h4>
                  <p className="text-primary font-medium mb-3">{founder.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{founder.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center text-foreground font-serif">Nuestro Equipo</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold mb-1 text-foreground">{member.name}</h4>
                  <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
