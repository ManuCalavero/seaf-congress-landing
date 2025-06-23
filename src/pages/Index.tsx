
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Users, Award, BookOpen, Clock, Play, ArrowRight, CheckCircle, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 header-blur z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm">SEAF</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Congreso SEAF 2025</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="nav-link">Inicio</a>
            <a href="#congreso" className="nav-link">Congreso</a>
            <a href="#ponentes" className="nav-link">Ponentes</a>
            <a href="#agenda" className="nav-link">Agenda</a>
            <a href="#inscripcion" className="nav-link">Inscripción</a>
          </nav>

          <Button className="btn-primary" asChild>
            <a href="#inscripcion">Inscríbete</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-20 webflow-hero text-white relative overflow-hidden min-h-screen flex items-center">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
              Retos de la antropología biológica ante una
              <span className="block text-gradient bg-white text-transparent bg-clip-text mt-4">
                sociedad en transformación
              </span>
            </h1>
            
            <div className="flex items-center justify-center space-x-4 mb-8 text-lg">
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">10-12 Nov 2025</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Valencia, España</span>
              </div>
            </div>
            
            <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90 font-light">
              Un congreso internacional para repensar la antropología en el contexto de los desafíos sociales, tecnológicos y medioambientales del siglo XXI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary text-lg" asChild>
                <a href="#inscripcion">
                  Haz tu preinscripción
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button size="lg" className="btn-secondary text-lg" asChild>
                <a href="#congreso">Más información</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 section-modern">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="stats-number">200+</div>
              <p className="text-gray-600 font-medium mt-2">Participantes esperados</p>
            </div>
            <div>
              <div className="stats-number">3</div>
              <p className="text-gray-600 font-medium mt-2">Días de congreso</p>
            </div>
            <div>
              <div className="stats-number">20+</div>
              <p className="text-gray-600 font-medium mt-2">Ponentes internacionales</p>
            </div>
            <div>
              <div className="stats-number">5</div>
              <p className="text-gray-600 font-medium mt-2">Líneas temáticas</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="congreso" className="py-20 section-accent">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black text-gray-900 mb-8">¿Por qué este congreso?</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Organizado por la Sociedad Española de Antropología Física (SEAF), este congreso busca reunir a especialistas de las ciencias biológicas, sociales y de la salud para debatir los retos que enfrenta la antropología biológica en una sociedad cambiante.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                El evento ofrece un espacio riguroso y abierto para compartir avances, metodologías y líneas de pensamiento emergentes.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700 font-medium">Networking académico internacional</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700 font-medium">Investigaciones de frontera</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700 font-medium">Certificado oficial SEAF</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="card-modern rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=600&h=400&fit=crop" 
                  alt="Conference presentation" 
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 section-modern">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-black text-gray-900 mb-6">Conoce más sobre SEAF</h2>
            <p className="text-xl text-gray-600 mb-12">
              Descubre la historia y misión de la Sociedad Española de Antropología Física
            </p>
            
            <div className="card-modern rounded-3xl overflow-hidden">
              <div className="aspect-video relative">
                <img 
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=450&fit=crop" 
                  alt="Conference video preview" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                    <Play className="w-6 h-6 mr-2" />
                    Ver video institucional
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="ponentes" className="py-20 section-accent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">Ponentes principales</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Líderes mundiales en antropología biológica compartirán sus investigaciones más recientes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dra. Carmen Díaz",
                affiliation: "Universidad Autónoma de Madrid",
                topic: "Antropología forense y derechos humanos",
                image: "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=300&h=300&fit=crop&crop=face"
              },
              {
                name: "Dr. Jean-Luc Martin",
                affiliation: "CNRS Francia",
                topic: "Evolución humana y diversidad genética",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
              },
              {
                name: "Dra. Ana Rodríguez",
                affiliation: "Universidad de Barcelona",
                topic: "Bioarqueología y sociedades del pasado",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
              },
              {
                name: "Dr. Michael Thompson",
                affiliation: "University of Cambridge",
                topic: "Ética en la investigación antropológica",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
              }
            ].map((speaker, index) => (
              <Card key={index} className="card-modern text-center">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold">{speaker.name}</CardTitle>
                  <CardDescription className="text-sm font-medium text-gray-500">{speaker.affiliation}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{speaker.topic}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-20 section-modern">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">Líneas temáticas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              El congreso se estructura en cinco grandes áreas de investigación
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Antropología evolutiva y genética",
                description: "Perspectivas actuales sobre la evolución humana y diversidad biológica.",
                icon: "🧬"
              },
              {
                title: "Paleopatología y bioarqueología",
                description: "Nuevas metodologías en el estudio de restos óseos y condiciones de vida del pasado.",
                icon: "🦴"
              },
              {
                title: "Antropología forense",
                description: "Avances en identificación humana y análisis forense.",
                icon: "🔬"
              },
              {
                title: "Salud y cuerpo contemporáneos",
                description: "Intersecciones entre biología, entorno y estilos de vida.",
                icon: "🏥"
              },
              {
                title: "Ética y sociedad",
                description: "Debates críticos sobre los usos del conocimiento antropobiológico.",
                icon: "⚖️"
              }
            ].map((topic, index) => (
              <Card key={index} className="card-modern">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{topic.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{topic.title}</h3>
                  <p className="text-gray-600">{topic.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 section-accent">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black text-center text-gray-900 mb-16">Fechas importantes</h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-8">
              {[
                { date: "1 de julio 2025", event: "Apertura de inscripciones" },
                { date: "15 de septiembre 2025", event: "Cierre de recepción de comunicaciones" },
                { date: "1 de octubre 2025", event: "Notificación de aceptación" },
                { date: "10–12 de noviembre 2025", event: "Congreso en Valencia, España" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="feature-icon flex-shrink-0">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{item.date}</p>
                    <p className="text-gray-600">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="inscripcion" className="py-20 section-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-5xl font-black text-white mb-8">¿Quieres asistir?</h2>
              <p className="text-xl text-gray-300 mb-12">
                Rellena el siguiente formulario para recibir información detallada sobre el programa, tarifas e inscripción oficial.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-gray-300">Acceso completo al congreso</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-gray-300">Material del congreso incluido</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-gray-300">Certificado oficial de participación</span>
                </div>
              </div>
            </div>
            
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-lg font-semibold text-white">Nombre completo</Label>
                    <Input id="name" className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-lg font-semibold text-white">Correo electrónico</Label>
                    <Input id="email" type="email" className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                  </div>
                  
                  <div>
                    <Label htmlFor="institution" className="text-lg font-semibold text-white">Institución / afiliación</Label>
                    <Input id="institution" className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                  </div>
                  
                  <div>
                    <Label className="text-lg font-semibold text-white">¿Deseas participar como ponente?</Label>
                    <Select>
                      <SelectTrigger className="mt-2 bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Sí</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="comments" className="text-lg font-semibold text-white">Comentarios</Label>
                    <Textarea id="comments" className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/60" rows={4} />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" className="border-white/30" />
                    <Label htmlFor="newsletter" className="text-white">
                      Acepto recibir información del congreso por email
                    </Label>
                  </div>
                  
                  <Button className="w-full btn-primary text-lg py-4" size="lg">
                    Enviar preinscripción
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-lg">SEAF</span>
                </div>
                <span className="font-bold text-xl">Congreso SEAF 2025</span>
              </div>
              <p className="text-gray-400 text-lg">
                Retos de la antropología biológica ante una sociedad en transformación
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Enlaces</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Aviso legal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accesibilidad</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Contacto</h3>
              <p className="text-gray-400 mb-3">congreso@seaf.es</p>
              <p className="text-gray-400 mb-6">Valencia, España</p>
              <Button className="btn-primary" asChild>
                <a href="#inscripcion">Preinscríbete ahora</a>
              </Button>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Sociedad Española de Antropología Física (SEAF). Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
