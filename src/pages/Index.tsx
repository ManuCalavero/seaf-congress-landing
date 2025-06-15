import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Calendar, MapPin, Users, Award, BookOpen, Clock, Play } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header fijo */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold text-lg">SEAF</span>
            </div>
            <span className="font-semibold text-xl text-gray-900">Congreso SEAF 2025</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-purple-600 transition-colors">Inicio</a>
            <a href="#congreso" className="text-gray-700 hover:text-purple-600 transition-colors">Sobre el Congreso</a>
            <a href="#ponentes" className="text-gray-700 hover:text-purple-600 transition-colors">Ponentes</a>
            <a href="#agenda" className="text-gray-700 hover:text-purple-600 transition-colors">Agenda</a>
            <a href="#inscripcion" className="text-gray-700 hover:text-purple-600 transition-colors">Inscripción</a>
            <a href="#contacto" className="text-gray-700 hover:text-purple-600 transition-colors">Contacto</a>
          </nav>

          <Button className="gradient-bg text-white font-medium" asChild>
            <a href="#inscripcion">Preinscripción abierta</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-16 gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1080&fit=crop" 
            alt="Conference hall" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight">
            Retos de la antropología biológica ante una sociedad en transformación
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Calendar className="w-6 h-6" />
            <p className="text-xl md:text-2xl font-medium">
              10-12 de noviembre 2025 • Valencia, España
            </p>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            Un congreso internacional para repensar la antropología en el contexto de los desafíos sociales, tecnológicos y medioambientales del siglo XXI.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-medium" asChild>
              <a href="#inscripcion">Haz tu preinscripción</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre el congreso */}
      <section id="congreso" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-semibold text-gray-900 mb-8">¿Por qué este congreso?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Organizado por la Sociedad Española de Antropología Física (SEAF), este congreso busca reunir a especialistas de las ciencias biológicas, sociales y de la salud para debatir los retos que enfrenta la antropología biológica en una sociedad cambiante.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                El evento ofrece un espacio riguroso y abierto para compartir avances, metodologías y líneas de pensamiento emergentes.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=600&h=400&fit=crop" 
                alt="Conference presentation" 
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-semibold text-gray-900 mb-8">Conoce más sobre SEAF</h2>
            <p className="text-lg text-gray-700 mb-12">
              Descubre la historia y misión de la Sociedad Española de Antropología Física
            </p>
            
            <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-video relative">
                <img 
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=450&fit=crop" 
                  alt="Conference video preview" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 backdrop-blur-sm">
                    <Play className="w-6 h-6 mr-2" />
                    Ver video institucional
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">¿Por qué deberías participar?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">Networking académico</h3>
                <p className="text-gray-600">Conecta con referentes nacionales e internacionales</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">Investigaciones de frontera</h3>
                <p className="text-gray-600">Acceso a las últimas investigaciones en antropología biológica</p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">Certificado oficial</h3>
                <p className="text-gray-600">Certificado de participación avalado por SEAF</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ponentes */}
      <section id="ponentes" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">Ponentes principales</h2>
            <div className="relative h-64 rounded-lg overflow-hidden mb-8">
              <img 
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=300&fit=crop" 
                alt="Conference speakers" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-transparent flex items-center">
                <div className="container mx-auto px-4">
                  <h3 className="text-2xl font-semibold text-white mb-2">Expertos internacionales</h3>
                  <p className="text-white/90">Líderes mundiales en antropología biológica</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dra. Carmen Díaz",
                affiliation: "Universidad Autónoma de Madrid",
                topic: "Antropología forense y derechos humanos en el siglo XXI"
              },
              {
                name: "Dr. Jean-Luc Martin",
                affiliation: "CNRS – Centre National de la Recherche Scientifique (Francia)",
                topic: "Evolución humana y diversidad genética contemporánea"
              },
              {
                name: "Dra. Ana Rodríguez",
                affiliation: "Universidad de Barcelona",
                topic: "Bioarqueología y sociedades del pasado"
              },
              {
                name: "Dr. Michael Thompson",
                affiliation: "University of Cambridge (Reino Unido)",
                topic: "Ética en la investigación antropológica moderna"
              }
            ].map((speaker, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-yellow-500 rounded-full mx-auto mb-4"></div>
                  <CardTitle className="text-lg font-medium text-center">{speaker.name}</CardTitle>
                  <CardDescription className="text-center text-sm">{speaker.affiliation}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 text-center">{speaker.topic}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section id="agenda" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-semibold text-gray-900 mb-8">Agenda preliminar</h2>
              <p className="text-lg text-gray-700 mb-8">
                Las sesiones se organizarán en torno a cinco grandes líneas temáticas:
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Antropología evolutiva y genética",
                    description: "Perspectivas actuales sobre la evolución humana y diversidad biológica."
                  },
                  {
                    title: "Paleopatología y bioarqueología",
                    description: "Nuevas metodologías en el estudio de restos óseos y condiciones de vida del pasado."
                  },
                  {
                    title: "Antropología forense",
                    description: "Avances en identificación humana y análisis forense."
                  },
                  {
                    title: "Salud y cuerpo en contextos contemporáneos",
                    description: "Intersecciones entre biología, entorno y estilos de vida."
                  },
                  {
                    title: "Ética y sociedad en la práctica antropológica",
                    description: "Debates críticos sobre los usos del conocimiento antropobiológico."
                  }
                ].map((topic, index) => (
                  <Card key={index} className="border-l-4 border-l-purple-600">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium text-gray-900 mb-2">{topic.title}</h3>
                      <p className="text-gray-600">{topic.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=800&fit=crop" 
                alt="Conference agenda" 
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fechas clave */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">Fechas importantes</h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              {[
                { date: "1 de julio 2025", event: "Apertura de inscripciones" },
                { date: "15 de septiembre 2025", event: "Cierre de recepción de comunicaciones" },
                { date: "1 de octubre 2025", event: "Notificación de aceptación" },
                { date: "10–12 de noviembre 2025", event: "Congreso en Valencia, España" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <Calendar className="w-8 h-8 text-purple-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">{item.date}</p>
                    <p className="text-gray-600">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de preinscripción */}
      <section id="inscripcion" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-semibold text-gray-900 mb-8">¿Quieres asistir?</h2>
              <p className="text-lg text-gray-700 mb-8">
                Rellena el siguiente formulario para recibir información detallada sobre el programa, tarifas e inscripción oficial.
              </p>
              
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-base font-medium">Nombre completo</Label>
                      <Input id="name" className="mt-2" />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-base font-medium">Correo electrónico</Label>
                      <Input id="email" type="email" className="mt-2" />
                    </div>
                    
                    <div>
                      <Label htmlFor="institution" className="text-base font-medium">Institución / afiliación</Label>
                      <Input id="institution" className="mt-2" />
                    </div>
                    
                    <div>
                      <Label className="text-base font-medium">¿Deseas participar como ponente?</Label>
                      <Select>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Sí</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="comments" className="text-base font-medium">Comentarios</Label>
                      <Textarea id="comments" className="mt-2" rows={4} />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="newsletter" />
                      <Label htmlFor="newsletter" className="text-sm">
                        Acepto recibir información del congreso por email
                      </Label>
                    </div>
                    
                    <Button className="w-full gradient-bg text-white font-medium" size="lg">
                      Enviar preinscripción
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=800&fit=crop" 
                alt="Registration" 
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Organización */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">Organizado por</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-yellow-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-semibold text-2xl">SEAF</span>
              </div>
              <p className="font-medium text-gray-900">Sociedad Española de</p>
              <p className="font-medium text-gray-900">Antropología Física</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">Patrocinadores</h2>
          <div className="max-w-4xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {[
                  { name: "Universidad Complutense Madrid", logo: "https://images.unsplash.com/photo-1599305445896-76c824ec7abd?w=200&h=100&fit=crop" },
                  { name: "CSIC", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop" },
                  { name: "Fundación La Caixa", logo: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=200&h=100&fit=crop" },
                  { name: "Ministerio de Ciencia", logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&h=100&fit=crop" },
                  { name: "Generalitat Valenciana", logo: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=200&h=100&fit=crop" },
                  { name: "Universidad de Valencia", logo: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=200&h=100&fit=crop" }
                ].map((sponsor, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4">
                    <div className="p-4">
                      <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="flex aspect-[2/1] items-center justify-center p-6">
                          <img 
                            src={sponsor.logo} 
                            alt={sponsor.name}
                            className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">Preguntas frecuentes</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "¿Puedo enviar comunicaciones si aún soy estudiante?",
                answer: "Sí, estudiantes de posgrado y doctorado pueden enviar comunicaciones siguiendo las mismas directrices que los investigadores establecidos."
              },
              {
                question: "¿Habrá certificado de asistencia?",
                answer: "Sí, todos los participantes recibirán un certificado oficial de participación avalado por SEAF."
              },
              {
                question: "¿El congreso tendrá modalidad online?",
                answer: "El congreso se realizará de forma presencial en Valencia, España. Se evaluará la posibilidad de transmisión online para algunas sesiones."
              },
              {
                question: "¿Se puede asistir sin presentar ponencia?",
                answer: "Por supuesto, la asistencia está abierta tanto para quienes presenten comunicaciones como para quienes deseen participar como oyentes."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-yellow-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">SEAF</span>
                </div>
                <span className="font-medium text-xl">Congreso SEAF 2025</span>
              </div>
              <p className="text-gray-400">
                Retos de la antropología biológica ante una sociedad en transformación
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Aviso legal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accesibilidad</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-4">Contacto</h3>
              <p className="text-gray-400 mb-2">congreso@seaf.es</p>
              <p className="text-gray-400">Valencia, España</p>
              <Button className="mt-4 gradient-bg text-white font-medium" asChild>
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
