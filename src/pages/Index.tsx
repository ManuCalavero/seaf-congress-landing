
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Users, Award, BookOpen, Clock } from "lucide-react";

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

          <Button className="gradient-bg text-white font-medium">
            Preinscripción abierta
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-16 gradient-bg text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight">
            Retos de la antropología biológica ante una sociedad en transformación
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            Un congreso internacional para repensar la antropología en el contexto de los desafíos sociales, tecnológicos y medioambientales del siglo XXI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-medium">
              Haz tu preinscripción
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 font-medium">
              Descubre la agenda preliminar
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre el congreso */}
      <section id="congreso" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-semibold text-gray-900 mb-8">¿Por qué este congreso?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Organizado por la Sociedad Española de Antropología Física (SEAF), este congreso busca reunir a especialistas de las ciencias biológicas, sociales y de la salud para debatir los retos que enfrenta la antropología biológica en una sociedad cambiante. El evento ofrece un espacio riguroso y abierto para compartir avances, metodologías y líneas de pensamiento emergentes.
            </p>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16">
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
      <section id="ponentes" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">Ponentes principales</h2>
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
      <section id="agenda" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center text-gray-900 mb-8">Agenda preliminar</h2>
          <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Las sesiones se organizarán en torno a cinco grandes líneas temáticas:
          </p>
          
          <div className="max-w-4xl mx-auto space-y-6">
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
      </section>

      {/* Fechas clave */}
      <section className="py-16 bg-gray-50">
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
      <section id="inscripcion" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-semibold text-center text-gray-900 mb-8">¿Quieres asistir?</h2>
            <p className="text-lg text-center text-gray-700 mb-12">
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
        </div>
      </section>

      {/* Organización */}
      <section className="py-16 bg-gray-50">
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

      {/* FAQ */}
      <section className="py-16">
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
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-yellow-500 rounded-lg flex items-center justify-center">
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
              <Button className="mt-4 gradient-bg text-white font-medium">
                Preinscríbete ahora
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
