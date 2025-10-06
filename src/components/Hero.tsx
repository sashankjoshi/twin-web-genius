import { Calendar, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToEvents = () => {
    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-20" style={{ perspective: '800px', perspectiveOrigin: 'center top' }}>
      {/* 3D Perspective Grid - Only in Hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid Plane with infinite vanishing point */}
        <div 
          className="absolute left-1/2 w-[400%] h-[300%] -translate-x-1/2"
          style={{
            transform: 'translateX(-50%) rotateX(-65deg) translateZ(-300px)',
            transformOrigin: 'center top',
            transformStyle: 'preserve-3d',
            top: '60px',
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 50px,
                rgba(255, 100, 50, 0.5) 50px,
                rgba(255, 100, 50, 0.5) 52px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 50px,
                rgba(255, 100, 50, 0.5) 50px,
                rgba(255, 100, 50, 0.5) 52px
              )
            `,
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 30%, transparent 70%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 30%, transparent 70%)'
          }}
        />
        
        {/* Intense Center Orange Glow at vanishing point */}
        <div 
          className="absolute inset-x-0 top-0 h-[50%]"
          style={{
            background: 'radial-gradient(ellipse 40% 25% at 50% 8%, rgba(255, 100, 50, 0.35) 0%, rgba(255, 100, 50, 0.15) 30%, transparent 70%)'
          }}
        />
        
        {/* Secondary glow for depth */}
        <div 
          className="absolute inset-x-0 top-0 h-[40%]"
          style={{
            background: 'radial-gradient(ellipse 30% 20% at 50% 10%, rgba(255, 80, 30, 0.25) 0%, transparent 60%)'
          }}
        />
      </div>
      
      {/* Vignette Overlay - darker edges */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 20%, transparent 0%, rgba(10, 10, 10, 0.85) 100%)'
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
