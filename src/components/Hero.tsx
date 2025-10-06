import { Calendar, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToEvents = () => {
    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4" style={{ perspective: '600px' }}>
      {/* 3D Perspective Grid - Only in Hero */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
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
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, rgba(10, 10, 10, 0.8) 100%)'
        }}
      />

      <div className="flex gap-4 mb-12 animate-in fade-in slide-in-from-top duration-700 relative z-10">
        <div className="w-16 h-16 bg-brown-dark rounded-2xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
          <Calendar className="w-8 h-8 text-orange" />
        </div>
        <div className="w-16 h-16 bg-brown-dark rounded-2xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
          <Users className="w-8 h-8 text-orange" />
        </div>
        <div className="w-16 h-16 bg-brown-dark rounded-2xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
          <Zap className="w-8 h-8 text-orange" />
        </div>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 animate-in fade-in slide-in-from-bottom duration-700 delay-150 relative z-10">
        Discover Upcoming
        <br />
        <span className="text-orange">Department Events</span>
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-300 relative z-10">
        Stay updated with workshops, hackathons, and fests. Join your community and never
        miss an opportunity to learn and grow.
      </p>

      <div className="flex items-center gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-500 relative z-10">
        <Button 
          size="lg" 
          className="bg-orange hover:bg-orange-hover text-white font-semibold px-8 py-6 text-lg rounded-xl"
          onClick={scrollToEvents}
        >
          View Events
        </Button>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-muted-foreground">Live events updating</span>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
          <path d="M12 5v14m0 0l7-7m-7 7l-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
