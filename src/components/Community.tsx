const Community = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto bg-black/40 backdrop-blur-xl rounded-3xl p-12 text-center border border-white/10 hover:border-orange/20 transition-all duration-500">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Community</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Whether you're looking to learn new skills, network with peers, or showcase your
          talents, this is your platform for growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group p-6 rounded-2xl bg-brown-dark/30 backdrop-blur-sm border border-white/5 hover:border-orange/30 transition-all duration-300">
            <div className="text-5xl font-bold text-orange mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
            <div className="text-muted-foreground">Students Registered</div>
          </div>
          <div className="group p-6 rounded-2xl bg-brown-dark/30 backdrop-blur-sm border border-white/5 hover:border-orange/30 transition-all duration-300">
            <div className="text-5xl font-bold text-orange mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
            <div className="text-muted-foreground">Events Hosted</div>
          </div>
          <div className="group p-6 rounded-2xl bg-brown-dark/30 backdrop-blur-sm border border-white/5 hover:border-orange/30 transition-all duration-300">
            <div className="text-5xl font-bold text-orange mb-2 group-hover:scale-110 transition-transform duration-300">8</div>
            <div className="text-muted-foreground">Departments</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
