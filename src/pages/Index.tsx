
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Menu, X, Users, Brain, Award, Globe, FlaskConical, Calendar, Mail, MapPin, ExternalLink } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    institucion: "",
    ponente: "",
    comentarios: "",
    acepto: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acepto) {
      toast({
        title: "Error",
        description: "Debes aceptar recibir información del congreso",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "¡Preinscripción enviada!",
      description: "Te contactaremos pronto con más información",
    });
    
    setFormData({
      nombre: "",
      email: "",
      institucion: "",
      ponente: "",
      comentarios: "",
      acepto: false
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header fijo */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h1 className="font-bold text-lg gradient-text">SEAF 2025</h1>
                <p className="text-xs text-muted-foreground">Valencia, España</p>
              </div>
            </div>
            
            {/* Navegación desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-sm font-medium hover:text-primary transition-colors">Inicio</button>
              <button onClick={() => scrollToSection('sobre-congreso')} className="text-sm font-medium hover:text-primary transition-colors">Sobre el Congreso</button>
              <button onClick={() => scrollToSection('ponentes')} className="text-sm font-medium hover:text-primary transition-colors">Ponentes</button>
              <button onClick={() => scrollToSection('agenda')} className="text-sm font-medium hover:text-primary transition-colors">Agenda</button>
              <button onClick={() => scrollToSection('inscripcion')} className="text-sm font-medium hover:text-primary transition-colors">Inscripción</button>
              <button onClick={() => scrollToSection('contacto')} className="text-sm font-medium hover:text-primary transition-colors">Contacto</button>
            </nav>

            <div className="flex items-center space-x-4">
              <Button onClick={() => scrollToSection('inscripcion')} className="hidden sm:inline-flex gradient-bg text-white border-0 hover:opacity-90">
                Preinscripción abierta
              </Button>
              
              {/* Botón menú móvil */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('inicio')} className="text-left text-sm font-medium hover:text-primary transition-colors">Inicio</button>
                <button onClick={() => scrollToSection('sobre-congreso')} className="text-left text-sm font-medium hover:text-primary transition-colors">Sobre el Congreso</button>
                <button onClick={() => scrollToSection('ponentes')} className="text-left text-sm font-medium hover:text-primary transition-colors">Ponentes</button>
                <button onClick={() => scrollToSection('agenda')} className="text-left text-sm font-medium hover:text-primary transition-colors">Agenda</button>
                <button onClick={() => scrollToSection('inscripcion')} className="text-left text-sm font-medium hover:text-primary transition-colors">Inscripción</button>
                <button onClick={() => scrollToSection('contacto')} className="text-left text-sm font-medium hover:text-primary transition-colors">Contacto</button>
                <Button onClick={() => scrollToSection('inscripcion')} className="gradient-bg text-white border-0 hover:opacity-90 mt-4">
                  Preinscripción abierta
                </Button>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-16 min-h-screen flex items-center">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center py-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Retos de la antropología biológica</span>
              <br />
              <span className="text-foreground">ante una sociedad en transformación</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Un congreso internacional para repensar la antropología en el contexto de los desafíos sociales, 
              tecnológicos y medioambientales del siglo XXI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={() => scrollToSection('inscripcion')} 
                size="lg" 
                className="gradient-bg text-white border-0 hover:opacity-90 text-lg px-8 py-6"
              >
                Haz tu preinscripción
              </Button>
              <Button 
                onClick={() => scrollToSection('agenda')} 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 border-2 border-primary hover:bg-primary/10"
              >
                Descubre la agenda preliminar
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-bg flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">10–12 Noviembre 2025</h3>
                <p className="text-muted-foreground">Valencia, España</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-bg flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Especialistas Internacionales</h3>
                <p className="text-muted-foreground">Referentes nacionales e internacionales</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-bg flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Certificado Oficial</h3>
                <p className="text-muted-foreground">Avalado por SEAF</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre el congreso */}
      <section id="sobre-congreso" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
              ¿Por qué este congreso?
            </h2>
            
            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-8 md:p-12">
                <p className="text-lg md:text-xl leading-relaxed text-center">
                  Organizado por la <strong>Sociedad Española de Antropología Física (SEAF)</strong>, 
                  este congreso busca reunir a especialistas de las ciencias biológicas, sociales y de la salud 
                  para debatir los retos que enfrenta la antropología biológica en una sociedad cambiante. 
                  El evento ofrece un espacio riguroso y abierto para compartir avances, metodologías y 
                  líneas de pensamiento emergentes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beneficios de asistir */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            ¿Por qué deberías participar?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="card-hover border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Networking académico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Conecta con referentes nacionales e internacionales en tu campo de estudio</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Investigaciones de frontera</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Acceso a las últimas investigaciones en antropología biológica</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Certificado oficial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Certificado de participación avalado por SEAF</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Enfoque multidisciplinar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Biología, salud, tecnología y sociedad en un mismo espacio</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg md:col-span-2 lg:col-span-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                  <FlaskConical className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Talleres prácticos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Sesiones temáticas interactivas y talleres prácticos para aplicar conocimientos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ponentes destacados */}
      <section id="ponentes" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Ponentes principales
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="card-hover border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full gradient-bg flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">CD</span>
                </div>
                <CardTitle className="text-lg">Dra. Carmen Díaz</CardTitle>
                <CardDescription>Universidad Autónoma de Madrid</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">"Antropología forense y derechos humanos en el siglo XXI"</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full gradient-bg flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">JM</span>
                </div>
                <CardTitle className="text-lg">Dr. Jean-Luc Martin</CardTitle>
                <CardDescription>CNRS – Francia</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">"Evolución humana y diversidad genética contemporánea"</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full gradient-bg flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">AR</span>
                </div>
                <CardTitle className="text-lg">Dra. Ana Ruiz</CardTitle>
                <CardDescription>Universidad de Barcelona</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">"Bioarqueología y sociedades del pasado"</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full gradient-bg flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">MS</span>
                </div>
                <CardTitle className="text-lg">Prof. Michael Smith</CardTitle>
                <CardDescription>Oxford University</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">"Tecnología y antropología en el siglo XXI"</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Agenda preliminar */}
      <section id="agenda" className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 gradient-text">
            Agenda preliminar
          </h2>
          
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Las sesiones se organizarán en torno a cinco grandes líneas temáticas:
          </p>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="card-hover border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <CardTitle className="text-xl">Antropología evolutiva y genética</CardTitle>
                    <CardDescription className="text-base">Perspectivas actuales sobre la evolución humana y diversidad biológica.</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <CardTitle className="text-xl">Paleopatología y bioarqueología</CardTitle>
                    <CardDescription className="text-base">Nuevas metodologías en el estudio de restos óseos y condiciones de vida del pasado.</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <CardTitle className="text-xl">Antropología forense</CardTitle>
                    <CardDescription className="text-base">Avances en identificación humana y análisis forense.</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <CardTitle className="text-xl">Salud y cuerpo en contextos contemporáneos</CardTitle>
                    <CardDescription className="text-base">Intersecciones entre biología, entorno y estilos de vida.</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div>
                    <CardTitle className="text-xl">Ética y sociedad en la práctica antropológica</CardTitle>
                    <CardDescription className="text-base">Debates críticos sobre los usos del conocimiento antropobiológico.</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Fechas clave */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Fechas importantes
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Apertura de inscripciones</h3>
                      <p className="text-muted-foreground">1 de julio 2025</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Cierre de recepción de comunicaciones</h3>
                      <p className="text-muted-foreground">15 de septiembre 2025</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Notificación de aceptación</h3>
                      <p className="text-muted-foreground">1 de octubre 2025</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Congreso</h3>
                      <p className="text-muted-foreground">10–12 de noviembre 2025, Valencia (España)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulario de preinscripción */}
      <section id="inscripcion" className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 gradient-text">
              ¿Quieres asistir?
            </h2>
            
            <p className="text-lg text-center text-muted-foreground mb-12">
              Rellena el siguiente formulario para recibir información detallada sobre el programa, tarifas e inscripción oficial.
            </p>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre completo *</Label>
                    <Input 
                      id="nombre"
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico *</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="institucion">Institución / afiliación</Label>
                    <Input 
                      id="institucion"
                      value={formData.institucion}
                      onChange={(e) => setFormData({...formData, institucion: e.target.value})}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ponente">¿Deseas participar como ponente?</Label>
                    <Select value={formData.ponente} onValueChange={(value) => setFormData({...formData, ponente: value})}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="si">Sí</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comentarios">Comentarios</Label>
                    <Textarea 
                      id="comentarios"
                      value={formData.comentarios}
                      onChange={(e) => setFormData({...formData, comentarios: e.target.value})}
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="acepto"
                      checked={formData.acepto}
                      onCheckedChange={(checked) => setFormData({...formData, acepto: checked as boolean})}
                    />
                    <Label htmlFor="acepto" className="text-sm">
                      Acepto recibir información del congreso por email *
                    </Label>
                  </div>

                  <Button type="submit" className="w-full gradient-bg text-white border-0 hover:opacity-90 h-12 text-lg">
                    Enviar preinscripción
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Organiza / Patrocina */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Organizado por
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full gradient-bg flex items-center justify-center">
                  <span className="text-white font-bold text-3xl">SEAF</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Sociedad Española de Antropología Física</h3>
                <p className="text-muted-foreground mb-6">
                  La SEAF es la organización científica de referencia en España para los estudios de antropología física y biológica.
                </p>
                <Button variant="outline" className="border-2 border-primary hover:bg-primary/10">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visitar web oficial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Preguntas frecuentes
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="card-hover border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">¿Puedo enviar comunicaciones si aún soy estudiante?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Sí, el congreso está abierto a estudiantes de grado, máster y doctorado. Se valorarán especialmente las contribuciones que aporten perspectivas nuevas al campo.</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">¿Habrá certificado de asistencia?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Sí, todos los participantes recibirán un certificado oficial de asistencia avalado por SEAF, válido para efectos curriculares y de formación continua.</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">¿El congreso tendrá modalidad online?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">El congreso será presencial en Valencia, pero se está evaluando la posibilidad de ofrecer algunas sesiones en modalidad híbrida para facilitar la participación internacional.</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">¿Se puede asistir sin presentar ponencia?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Por supuesto. El congreso está abierto tanto a quienes deseen presentar sus investigaciones como a quienes quieran asistir como oyentes para mantenerse actualizados en el campo.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl">SEAF 2025</h3>
                  <p className="text-sm opacity-70">Valencia, España</p>
                </div>
              </div>
              <p className="opacity-70 mb-6">
                Congreso Internacional de la Sociedad Española de Antropología Física
              </p>
              <Button 
                onClick={() => scrollToSection('inscripcion')} 
                className="gradient-bg text-white border-0 hover:opacity-90"
              >
                Preinscríbete ahora
              </Button>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Enlaces rápidos</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('sobre-congreso')} className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Sobre el Congreso</button>
                <button onClick={() => scrollToSection('ponentes')} className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Ponentes</button>
                <button onClick={() => scrollToSection('agenda')} className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Agenda</button>
                <a href="#" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Aviso legal</a>
                <a href="#" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Política de privacidad</a>
                <a href="#" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Accesibilidad</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">congreso@seaf.es</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">Valencia, España</span>
                </div>
              </div>
              <div className="mt-6">
                <h5 className="font-semibold mb-3">Síguenos</h5>
                <div className="flex space-x-4">
                  <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Twitter</a>
                  <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">LinkedIn</a>
                  <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Facebook</a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-12 pt-8 text-center">
            <p className="text-sm opacity-70">
              © 2025 Sociedad Española de Antropología Física (SEAF). Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
