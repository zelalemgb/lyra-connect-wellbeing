
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MessageSquare, Star, Video } from "lucide-react";

type ProviderCardProps = {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  price: number;
  image: string;
  availability?: string;
  languages?: string[];
  experience?: number;
};

const ProviderCard = ({
  id,
  name,
  specialty,
  rating,
  reviewCount,
  price,
  image,
  availability = "Available Today",
  languages = ["English", "Spanish"],
  experience = 8,
}: ProviderCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 p-4 flex flex-col items-center md:items-start">
            <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-lyra-teal/20">
              <img
                src={image}
                alt={name}
                className="h-full w-full object-cover"
              />
            </div>
            
            <div className="mt-4 text-center md:text-left">
              <h3 className="font-bold text-lg">{name}</h3>
              <p className="text-gray-600">{specialty}</p>
              <div className="flex items-center justify-center md:justify-start mt-1">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="ml-1 text-sm font-medium">{rating}</span>
                <span className="ml-1 text-sm text-gray-500">({reviewCount} reviews)</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-gray-200">
            <div className="p-4 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                    {availability}
                  </span>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="font-bold text-lg">${price}</span>
                  <span className="text-gray-500 text-sm"> / session</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm text-gray-500">Languages</p>
                  <p className="text-sm">{languages.join(", ")}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Experience</p>
                  <p className="text-sm">{experience} years</p>
                </div>
              </div>
              
              <div className="pt-4 flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>Message</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Video className="h-4 w-4" />
                  <span>Video Call</span>
                </Button>
                <Button className="bg-lyra-teal hover:bg-lyra-teal/90 flex items-center gap-1 ml-auto">
                  <Calendar className="h-4 w-4" />
                  <span>Book Appointment</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProviderCard;
