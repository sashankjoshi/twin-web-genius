import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import About from "@/components/About";
import Community from "@/components/Community";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden" 
      style={{
        background: '#0a0a0a',
        perspective: '600px'
      }}
    >
      {/* 3D Perspective Grid */}
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Grid Plane */}
        <div 
          className="absolute w-[200%] h-[200%]"
          style={{
            transform: 'rotateX(-65deg) translateZ(-300px)',
            transformStyle: 'preserve-3d',
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 60px,
                rgba(255, 100, 50, 0.3) 60px,
                rgba(255, 100, 50, 0.3) 64px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 60px,
                rgba(255, 100, 50, 0.3) 60px,
                rgba(255, 100, 50, 0.3) 64px
              )
            `,
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 0%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 0%, transparent 100%)'
          }}
        />
        
        {/* Center Orange Glow */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 40% 30% at 50% 60%, rgba(255, 100, 50, 0.15) 0%, transparent 60%)'
          }}
        />
      </div>
      
      {/* Vignette Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, rgba(10, 10, 10, 0.8) 100%)'
        }}
      />

      <Header />
      <main className="pt-16 relative z-10">
        <Hero />
        <Events />
        <About />
        <Community />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
