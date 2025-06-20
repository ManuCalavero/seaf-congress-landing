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
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Formas geométricas de fondo */}
      <div className="geometric-shape circle w-32 h-32 top-20 right-10 animate-pulse"></div>
      <div className="geometric-shape square w-24 h-24 top-96 left-20"></div>
      <div className="geometric-shape triangle top-[600px] right-32"></div>
      <div className="geometric-shape circle w-16 h-16 top-[800px] left-1/4 animate-bounce"></div>
      <div className="geometric-shape square w-20 h-20 bottom-96 right-1/4"></div>

      {/* Header fijo */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center relative">
              <span className="text-white font-semibold text-lg relative z-10">SEAF</span>
            </div>
            <span className="font-semibold text-xl text-gray-900">Congreso SEAF 2025</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Inicio</a>
            <a href="#congreso" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Sobre el Congreso</a>
            <a href="#ponentes" className="text-gray-700 hover:text-red-500 transition-colors font-medium">Ponentes</a>
            <a href="#agenda" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Agenda</a>
            <a href="#inscripcion" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">Inscripción</a>
            <a href="#contacto" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Contacto</a>
          </nav>

          <Button className="gradient-bg text-white font-bold shadow-lg hover:shadow-xl transition-all" asChild>
            <a href="#inscripcion">Preinscripción abierta</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-16 gradient-bg text-white relative overflow-hidden min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Retos de la antropología biológica ante una 
            <span className="block text-6xl md:text-8xl bg-white text-transparent bg-clip-text mt-4">
              sociedad en transformación
            </span>
          </h1>
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
              <Calendar className="w-8 h-8" />
            </div>
            <p className="text-2xl md:text-3xl font-bold">
              10-12 de noviembre 2025 • Valencia, España
            </p>
          </div>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-medium opacity-90">
            Un congreso internacional para repensar la antropología en el contexto de los desafíos sociales, tecnológicos y medioambientales del siglo XXI.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-bold text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105" asChild>
              <a href="#inscripcion">Haz tu preinscripción</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Separador geométrico */}
      <div className="section-divider"></div>

      {/* Sobre el congreso */}
      <section id="congreso" className="py-20 geometric-bg text-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-black text-white mb-8">¿Por qué este congreso?</h2>
              <p className="text-xl text-white/90 leading-relaxed mb-6 font-medium">
                Organizado por la Sociedad Española de Antropología Física (SEAF), este congreso busca reunir a especialistas de las ciencias biológicas, sociales y de la salud para debatir los retos que enfrenta la antropología biológica en una sociedad cambiante.
              </p>
              <p className="text-xl text-white/90 leading-relaxed font-medium">
                El evento ofrece un espacio riguroso y abierto para compartir avances, metodologías y líneas de pensamiento emergentes.
              </p>
            </div>
            <div className="relative">
              <div className="vibrant-card rounded-2xl overflow-hidden shadow-2xl">
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

      {/* Separador */}
      <div className="section-divider"></div>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-black text-gray-900 mb-8">Conoce más sobre SEAF</h2>
            <p className="text-xl text-gray-700 mb-12 font-medium">
              Descubre la historia y misión de la Sociedad Española de Antropología Física
            </p>
            
            <div className="vibrant-card rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video relative">
                <img 
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=450&fit=crop" 
                  alt="Conference video preview" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 backdrop-blur-sm font-bold">
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
      <section className="py-20 geometric-bg text-white">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-black text-center text-white mb-16">¿Por qué deberías participar?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="vibrant-card card-hover bg-white/10 backdrop-blur-sm border-0 text-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-bg rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Networking académico</h3>
                <p className="text-white/80 text-lg">Conecta con referentes nacionales e internacionales</p>
              </CardContent>
            </Card>
            
            <Card className="vibrant-card card-hover bg-white/10 backdrop-blur-sm border-0 text-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-bg rounded-full mx-auto mb-6 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Investigaciones de frontera</h3>
                <p className="text-white/80 text-lg">Acceso a las últimas investigaciones en antropología biológica</p>
              </CardContent>
            </Card>

            <Card className="vibrant-card card-hover bg-white/10 backdrop-blur-sm border-0 text-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-bg rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Certificado oficial</h3>
                <p className="text-white/80 text-lg">Certificado de participación avalado por SEAF</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ponentes */}
      <section id="ponentes" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-8">Ponentes principales</h2>
            <div className="vibrant-card relative h-64 rounded-2xl overflow-hidden mb-8">
              <img 
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=300&fit=crop" 
                alt="Conference speakers" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/80 to-transparent flex items-center">
                <div className="container mx-auto px-4">
                  <h3 className="text-3xl font-bold text-white mb-2">Expertos internacionales</h3>
                  <p className="text-white/90 text-xl">Líderes mundiales en antropología biológica</p>
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
              <Card key={index} className="vibrant-card card-hover">
                <CardHeader>
                  <div className="w-20 h-20 gradient-bg rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">{speaker.name.split(' ')[1][0]}</span>
                  </div>
                  <CardTitle className="text-xl font-black text-center">{speaker.name}</CardTitle>
                  <CardDescription className="text-center text-sm font-medium">{speaker.affiliation}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 text-center font-medium">{speaker.topic}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section id="agenda" className="py-20 geometric-bg text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-5xl font-black text-white mb-8">Agenda preliminar</h2>
              <p className="text-xl text-white/90 mb-12 font-medium">
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
                  <Card key={index} className="vibrant-card bg-white/10 backdrop-blur-sm border-0 text-white">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{topic.title}</h3>
                      <p className="text-white/80">{topic.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="vibrant-card rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=800&fit=crop" 
                  alt="Conference agenda" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fechas clave */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-center text-gray-900 mb-16">Fechas importantes</h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              {[
                { date: "1 de julio 2025", event: "Apertura de inscripciones" },
                { date: "15 de septiembre 2025", event: "Cierre de recepción de comunicaciones" },
                { date: "1 de octubre 2025", event: "Notificación de aceptación" },
                { date: "10–12 de noviembre 2025", event: "Congreso en Valencia, España" }
              ].map((item, index) => (
                <div key={index} className="vibrant-card flex items-center space-x-6 p-6 rounded-xl shadow-lg">
                  <div className="gradient-bg p-3 rounded-full flex-shrink-0">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{item.date}</p>
                    <p className="text-gray-600 font-medium">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de preinscripción */}
      <section id="inscripcion" className="py-20 geometric-bg text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-5xl font-black text-white mb-8">¿Quieres asistir?</h2>
              <p className="text-xl text-white/90 mb-12 font-medium">
                Rellena el siguiente formulario para recibir información detallada sobre el programa, tarifas e inscripción oficial.
              </p>
              
              <Card className="vibrant-card bg-white/10 backdrop-blur-sm border-0">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-lg font-bold text-white">Nombre completo</Label>
                      <Input id="name" className="mt-2 bg-white/20 border-white/30 text-white placeholder:text-white/60" />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-lg font-bold text-white">Correo electrónico</Label>
                      <Input id="email" type="email" className="mt-2 bg-white/20 border-white/30 text-white placeholder:text-white/60" />
                    </div>
                    
                    <div>
                      <Label htmlFor="institution" className="text-lg font-bold text-white">Institución / afiliación</Label>
                      <Input id="institution" className="mt-2 bg-white/20 border-white/30 text-white placeholder:text-white/60" />
                    </div>
                    
                    <div>
                      <Label className="text-lg font-bold text-white">¿Deseas participar como ponente?</Label>
                      <Select>
                        <SelectTrigger className="mt-2 bg-white/20 border-white/30 text-white">
                          <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Sí</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="comments" className="text-lg font-bold text-white">Comentarios</Label>
                      <Textarea id="comments" className="mt-2 bg-white/20 border-white/30 text-white placeholder:text-white/60" rows={4} />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="newsletter" className="border-white/30" />
                      <Label htmlFor="newsletter" className="text-white font-medium">
                        Acepto recibir información del congreso por email
                      </Label>
                    </div>
                    
                    <Button className="w-full bg-white text-black hover:bg-gray-100 font-bold text-lg py-4 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105" size="lg">
                      Enviar preinscripción
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="relative">
              <div className="vibrant-card rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=800&fit=crop" 
                  alt="Registration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organización */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-center text-gray-900 mb-16">Organizado por</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-center">
              <div className="w-32 h-32 gradient-bg rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-2xl">
                <span className="text-white font-black text-3xl">SEAF</span>
              </div>
              <p className="font-bold text-gray-900 text-xl">Sociedad Española de</p>
              <p className="font-bold text-gray-900 text-xl">Antropología Física</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-20 geometric-bg text-white">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-black text-center text-white mb-16">Patrocinadores</h2>
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
                      <Card className="vibrant-card border-0 shadow-lg hover:shadow-2xl transition-all bg-white/10 backdrop-blur-sm">
                        <CardContent className="flex aspect-[2/1] items-center justify-center p-6">
                          <img 
                            src={sponsor.logo} 
                            alt={sponsor.name}
                            className="max-w-full max-h-full object-contain filter brightness-0 invert hover:filter-none transition-all duration-300"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex bg-white/20 border-white/30 text-white hover:bg-white/30" />
              <CarouselNext className="hidden md:flex bg-white/20 border-white/30 text-white hover:bg-white/30" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-center text-gray-900 mb-16">Preguntas frecuentes</h2>
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
              <Card key={index} className="vibrant-card card-hover">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                  <p className="text-gray-600 font-medium">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SEAF</span>
                </div>
                <span className="font-bold text-2xl">Congreso SEAF 2025</span>
              </div>
              <p className="text-gray-300 font-medium text-lg">
                Retos de la antropología biológica ante una sociedad en transformación
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-6">Enlaces rápidos</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors font-medium">Aviso legal</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-medium">Política de privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-medium">Accesibilidad</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-6">Contacto</h3>
              <p className="text-gray-300 mb-3 font-medium text-lg">congreso@seaf.es</p>
              <p className="text-gray-300 mb-6 font-medium">Valencia, España</p>
              <Button className="gradient-bg text-white font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105" asChild>
                <a href="#inscripcion">Preinscríbete ahora</a>
              </Button>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p className="font-medium">&copy; 2025 Sociedad Española de Antropología Física (SEAF). Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
