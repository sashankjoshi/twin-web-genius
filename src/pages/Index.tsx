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
        background: '#0a0a0a'
      }}
    >

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
