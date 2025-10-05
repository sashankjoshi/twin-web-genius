import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  title: string;
  category: string;
  price: string;
  description: string;
  date: string;
  time: string;
  location: string;
  isFree?: boolean;
}

const EventCard = ({
  title,
  category,
  price,
  description,
  date,
  time,
  location,
  isFree = false,
}: EventCardProps) => {
  return (
    <div className="group relative bg-brown-dark/40 backdrop-blur-xl rounded-2xl p-6 border border-white/5 hover:border-orange/30 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange/10">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-bold text-foreground group-hover:text-orange transition-colors duration-300">{title}</h3>
        <Badge 
          className={`${
            isFree ? 'bg-slate-600/80 backdrop-blur-sm' : 'bg-green-600/80 backdrop-blur-sm'
          } text-white font-semibold px-3 py-1 rounded-full border border-white/10`}
        >
          {isFree ? 'Free' : price}
        </Badge>
      </div>

      <Badge className="bg-orange/90 backdrop-blur-sm text-white mb-4 border border-orange/20">{category}</Badge>

      <p className="text-muted-foreground mb-6">{description}</p>

      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="w-4 h-4 text-orange" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4 text-orange" />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="w-4 h-4 text-orange" />
          <span>{location}</span>
        </div>
      </div>

      <Button className="w-full bg-orange/90 backdrop-blur-sm hover:bg-orange text-white font-semibold py-6 rounded-xl border border-orange/20 hover:border-orange/40 transition-all duration-300">
        Register Now
      </Button>
    </div>
  );
};

export default EventCard;
