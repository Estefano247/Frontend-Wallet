import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Banner 
        text="Conoce nuestros beneficios. ¡Vive la experiencia de TechVision!"
        bgColor="bg-indigo-700"
        textColor="text-white"
      />
      
      <Header
        logo="Tech-Pay"
        logoStyles="text-3xl font-extrabold text-blue-600"
        buttons={[
            { label: "Ingresar", to: "/login", variant: "secondary" },
            { label: "Registro", to: "/register", variant: "primary" },
        ]}
        />
      <main className="flex-grow">
        <HeroSection 
          title="La forma más fácil y segura de enviar y recibir pagos en línea."
          description="Paga, recibe pagos, realiza el pago de tus servicios básicos. Únete a las miles de personas que usan TechVision."
          imageSide="right"
          buttonText="Regístrate Gratis"
          buttonLink="/register"
        />
        
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            ¿Por qué elegir TechVision?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              icon={<i className="fas fa-shield-alt text-4xl mb-4 text-indigo-600"></i>}
              title="Seguridad Garantizada"
              description="Tus transacciones protegidas con la mejor tecnología de encriptación."
              className="hover:scale-105 transition-transform"
            />
            
            <Card
              icon={<i className="fas fa-bolt text-4xl mb-4 text-indigo-600"></i>}
              title="Transferencias Instantáneas"
              description="Envía y recibe dinero en segundos, sin esperas."
              className="hover:scale-105 transition-transform"
            />
            
            <Card
              icon={<i className="fas fa-globe text-4xl mb-4 text-indigo-600"></i>}
              title="Cobertura Mundial"
              description="Realiza transacciones en cualquier parte del mundo."
              className="hover:scale-105 transition-transform"
            />
          </div>
        </section>
      </main>
      
      <Footer 
        sections={[
          {
            title: "Compañía",
            links: [
              { to: "/nosotros", label: "Nosotros" },
              { to: "/blog", label: "Blog" },
            ],
          },
          {
            title: "Soporte",
            links: [
              { to: "/ayuda", label: "Centro de ayuda" },
              { to: "/contacto", label: "Contacto" },
            ],
          }
        ]}
        socialLinks={[
          { url: "https://facebook.com", icon: <i className="fab fa-facebook"></i> },
          { url: "https://twitter.com", icon: <i className="fab fa-twitter"></i> },
          { url: "https://instagram.com", icon: <i className="fab fa-instagram"></i> },
        ]}
      />
    </div>
  );
};

export default Home;