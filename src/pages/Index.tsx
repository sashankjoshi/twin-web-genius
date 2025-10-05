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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-20" 
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--muted) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--muted) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Floating Gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-900/30 rounded-full blur-[120px] animate-pulse" 
          style={{ animationDuration: '8s' }}
        />
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-orange/20 rounded-full blur-[120px] animate-pulse" 
          style={{ animationDuration: '10s', animationDelay: '2s' }}
        />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-950/40 rounded-full blur-[120px] animate-pulse" 
          style={{ animationDuration: '12s', animationDelay: '4s' }}
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
