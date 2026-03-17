import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Mail, MapPin, ArrowRight, CheckCircle2, Users, TrendingUp, Shield, Database, Coins, FileText } from 'lucide-react';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_honduras-agridata/artifacts/wz0k2z0q_WhatsApp%20Image%202026-03-04%20at%2010.12.01.jpeg" 
              alt="AgroDignity Logo" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-forest-green">AgroDignity</h1>
              <p className="text-xs text-gray-600">Datos con Dignidad</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('problema')} className="text-gray-700 hover:text-forest-green transition-colors">Problema</button>
            <button onClick={() => scrollToSection('solucion')} className="text-gray-700 hover:text-forest-green transition-colors">Solución</button>
            <button onClick={() => scrollToSection('equipo')} className="text-gray-700 hover:text-forest-green transition-colors">Equipo</button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-forest-green transition-colors">Contacto</button>
          </nav>
          <Button onClick={() => scrollToSection('contacto')} className="bg-forest-green hover:bg-forest-green-dark text-white">
            Contactar
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1633437805600-2c58bf56663c)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
        </div>
        
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Honduras tiene USD 2.030 millones en exportaciones de café y cacao. 
              <span className="text-gold"> El EUDR amenaza el acceso al mercado europeo.</span> 
              <span className="block mt-2 text-white">AgroDignity es la solución.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
              La primera plataforma que verifica el cumplimiento EUDR a nivel de finca — y devuelve el valor de los datos al productor.
            </p>
            <Button 
              onClick={() => scrollToSection('solucion')}
              size="lg" 
              className="bg-forest-green hover:bg-forest-green-dark text-white text-lg px-8 py-6 transition-transform hover:scale-105"
            >
              Conocé la plataforma <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problema" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">El Desafío</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              El EUDR representa un riesgo existencial para las exportaciones agrícolas de Honduras
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-forest-green hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-forest-green/10 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-forest-green" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-bold text-2xl text-forest-green">120.000 familias</span> caficultoras en Honduras dependen del mercado europeo. El EUDR exige trazabilidad verificada a nivel de finca — que el satélite no puede dar.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-gold hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                  <Database className="w-8 h-8 text-gold" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Los datos de finca valen <span className="font-bold text-gold">millones</span> en mercados de cumplimiento, carbono e IA agrícola. Los agricultores generan esos datos y reciben <span className="font-bold">cero</span>.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-forest-green hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-forest-green/10 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-forest-green" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Honduras completó su primera exportación EUDR-compliant en <span className="font-bold text-forest-green">mayo 2025</span> — una cadena, cuatro instituciones de apoyo. El desafío es <span className="font-bold">530.000 hectáreas</span>, de forma continua.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solucion" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Qué Entrega AgroDignity para el Gobierno de Honduras</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tres pilares de impacto institucional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-forest-green rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-transform">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Panel Nacional EUDR</h4>
              <p className="text-gray-700 leading-relaxed">
                Datos de cumplimiento verificados a nivel de finca, actualizados mensualmente. Lo que la SAG necesita para defender el acceso al mercado europeo ante la Comisión Europea.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-transform">
                <Coins className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Ruta de Carbono</h4>
              <p className="text-gray-700 leading-relaxed">
                Polígonos GPS verificados formateados para MRV y Artículo 6 — desbloqueando ingresos de carbono directos para los agricultores.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-forest-green rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-transform">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Ingreso Digno</h4>
              <p className="text-gray-700 leading-relaxed">
                Métricas FIES de seguridad alimentaria y brecha de Ingreso Digno, co-publicadas con FAO Honduras — evidencia para política pública nacional e internacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Cómo Funciona</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un modelo que transforma datos en dignidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-forest-green text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">1</div>
                <p className="text-gray-700 leading-relaxed">
                  Los agricultores generan datos de finca a través de sus actividades normales — GPS, registros laborales, bitácoras de cosecha.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="w-8 h-8 text-forest-green" />
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">2</div>
                <p className="text-gray-700 leading-relaxed">
                  AgroDignity verifica, agrega y licencia esos datos a compradores europeos, organismos de carbono e instituciones de investigación.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="w-8 h-8 text-gold" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-forest-green text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">3</div>
              <p className="text-gray-700 leading-relaxed">
                El agricultor recibe el <span className="font-bold text-forest-green">90%</span> de cada regalía generada — ingreso nuevo, independiente del precio internacional del café.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipo" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">El Equipo</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiencia internacional en agri-datos, derecho alimentario y sistemas sostenibles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-32 h-32 bg-gradient-to-br from-forest-green to-forest-green/70 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">RA</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Rodrigo Alvarado</h4>
                <p className="text-forest-green font-semibold mb-3">Co-founder & COO</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Agribusiness & Data Science. FAO · IFAD · SAG Honduras. Italian-Honduran.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-32 h-32 bg-gradient-to-br from-gold to-gold/70 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">MB</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">María Alejandra Bendaña</h4>
                <p className="text-gold font-semibold mb-3">Co-founder & CLO</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Global Food Law. Alternate Permanent Representative of Honduras to FAO · IFAD · WFP. Italian-Honduran.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-32 h-32 bg-gradient-to-br from-forest-green to-forest-green/70 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">AP</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Andrea Pavón</h4>
                <p className="text-forest-green font-semibold mb-3">Co-founder & CTO</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sustainable Food Systems · Circular Economy PhD, University of Trieste. Honduran.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Socios Estratégicos & Pipeline</h3>
            <p className="text-xl text-gray-600">
              Colaborando con instituciones líderes en desarrollo agrícola y seguridad alimentaria
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
            <div className="bg-white px-8 py-4 rounded-lg shadow-md text-forest-green font-bold text-lg hover:shadow-lg transition-shadow">FAO Roma</div>
            <div className="bg-white px-8 py-4 rounded-lg shadow-md text-forest-green font-bold text-lg hover:shadow-lg transition-shadow">IFAD</div>
            <div className="bg-white px-8 py-4 rounded-lg shadow-md text-forest-green font-bold text-lg hover:shadow-lg transition-shadow">BANHPROVI</div>
            <div className="bg-white px-8 py-4 rounded-lg shadow-md text-forest-green font-bold text-lg hover:shadow-lg transition-shadow">COMSA</div>
            <div className="bg-white px-8 py-4 rounded-lg shadow-md text-forest-green font-bold text-lg hover:shadow-lg transition-shadow">SAG Honduras</div>
            <div className="bg-white px-8 py-4 rounded-lg shadow-md text-forest-green font-bold text-lg hover:shadow-lg transition-shadow">EU NDICI</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-forest-green text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-6">¿Listo para construir juntos el cumplimiento EUDR de Honduras?</h3>
            <p className="text-xl mb-12 text-gray-100">
              AgroDignity busca socios institucionales fundadores.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg">
              <a href="mailto:contacto@agrodignity.com" className="flex items-center gap-3 hover:text-gold transition-colors">
                <Mail className="w-6 h-6" />
                <span>contacto@agrodignity.com</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6" />
                <span>Roma, Italia · Tegucigalpa, Honduras</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <img 
                src="https://customer-assets.emergentagent.com/job_honduras-agridata/artifacts/wz0k2z0q_WhatsApp%20Image%202026-03-04%20at%2010.12.01.jpeg" 
                alt="AgroDignity Logo" 
                className="h-10 w-10 object-contain"
              />
              <div>
                <h4 className="text-white font-bold">AgroDignity</h4>
                <p className="text-xs">Datos con Dignidad</p>
              </div>
            </div>
            <p className="text-sm">
              © 2025 AgroDignity. Transformando datos agrícolas en dignidad e ingreso.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
