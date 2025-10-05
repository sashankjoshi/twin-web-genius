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
    <div className="bg-brown-dark rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        <Badge 
          className={`${
            isFree ? 'bg-slate-600' : 'bg-green-600'
          } text-white font-semibold px-3 py-1 rounded-full`}
        >
          {isFree ? 'Free' : price}
        </Badge>
      </div>

      <Badge className="bg-orange text-white mb-4">{category}</Badge>

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

      <Button className="w-full bg-orange hover:bg-orange-hover text-white font-semibold py-6 rounded-xl">
        Register Now
      </Button>
    </div>
  );
};

export default EventCard;
