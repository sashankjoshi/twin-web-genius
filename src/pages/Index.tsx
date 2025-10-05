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
        background: 'linear-gradient(180deg, hsl(230 35% 7%) 0%, hsl(270 40% 12%) 50%, hsl(230 35% 7%) 100%)'
      }}
    >
      {/* Diagonal Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-30" 
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 80px,
              hsl(var(--muted) / 0.15) 80px,
              hsl(var(--muted) / 0.15) 81px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 80px,
              hsl(var(--muted) / 0.15) 80px,
              hsl(var(--muted) / 0.15) 81px
            )
          `
        }}
      />
      
      {/* Floating Gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-[600px] h-[600px] rounded-full blur-[150px] animate-pulse" 
          style={{ 
            background: 'radial-gradient(circle, hsl(270 60% 20% / 0.4) 0%, transparent 70%)',
            animationDuration: '8s' 
          }}
        />
        <div className="absolute top-1/3 right-20 w-[500px] h-[500px] rounded-full blur-[150px] animate-pulse" 
          style={{ 
            background: 'radial-gradient(circle, hsl(280 50% 15% / 0.5) 0%, transparent 70%)',
            animationDuration: '10s', 
            animationDelay: '2s' 
          }}
        />
        <div className="absolute bottom-1/4 left-1/3 w-[550px] h-[550px] rounded-full blur-[150px] animate-pulse" 
          style={{ 
            background: 'radial-gradient(circle, hsl(260 55% 18% / 0.45) 0%, transparent 70%)',
            animationDuration: '12s', 
            animationDelay: '4s' 
          }}
        />
      </div>

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
