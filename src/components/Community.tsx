const Community = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto bg-black rounded-3xl p-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Community</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Whether you're looking to learn new skills, network with peers, or showcase your
          talents, this is your platform for growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-5xl font-bold text-orange mb-2">500+</div>
            <div className="text-muted-foreground">Students Registered</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-orange mb-2">50+</div>
            <div className="text-muted-foreground">Events Hosted</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-orange mb-2">8</div>
            <div className="text-muted-foreground">Departments</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
