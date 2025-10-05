import { Target, Users, Award, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To connect students with exciting opportunities and foster a vibrant campus community through engaging departmental events.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by students, for students. We understand what makes college events meaningful and impactful.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We partner with departments to bring you high-quality workshops, competitions, and cultural events.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Stay ahead with cutting-edge events covering the latest trends in technology, arts, and sciences.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Events</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Your gateway to discovering and participating in the most exciting events across all college departments.
          </p>
          <div className="w-24 h-1 bg-orange mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-20 h-20 bg-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
