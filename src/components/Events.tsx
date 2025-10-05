import EventCard from "./EventCard";

const Events = () => {
  const events = [
    {
      title: "AI & Machine Learning Workshop",
      category: "Tech",
      price: "₹299",
      description: "Deep dive into modern AI techniques and hands-on machine learning projects with industry experts.",
      date: "2025-10-15",
      time: "10:00",
      location: "Computer Lab 301",
    },
    {
      title: "Robotics Innovation Challenge",
      category: "Gaming",
      price: "₹499",
      description: "Build and program autonomous robots in teams. Compete for prizes and showcase your creativity.",
      date: "2025-11-22",
      time: "09:00",
      location: "Engineering Workshop",
    },
    {
      title: 'Cultural Fest 2025 - "Harmony"',
      category: "Design",
      price: "Free",
      isFree: true,
      description: "Celebrate diversity through music, dance, drama, and art. Open to all departments and students.",
      date: "2025-12-05",
      time: "18:00",
      location: "Main Auditorium",
    },
    {
      title: "Startup Pitch Competition",
      category: "Business",
      price: "₹199",
      description: "Present your innovative business ideas to venture capitalists and win funding for your startup.",
      date: "2026-01-10",
      time: "14:00",
      location: "Business Center Hall",
    },
  ];

  return (
    <section id="events" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join exciting events across different departments and expand your horizons.
          </p>
          <div className="w-24 h-1 bg-orange mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
