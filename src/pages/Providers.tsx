
import { useState } from "react";
import Navbar from "@/components/ui/navbar";
import ProviderCard from "@/components/providers/provider-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Search, Sliders } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const mockProviders = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Therapist",
    rating: 4.9,
    reviewCount: 124,
    price: 85,
    image: "/placeholder.svg",
    availability: "Available Today",
    languages: ["English", "Spanish"],
    experience: 8,
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Primary Care",
    rating: 4.8,
    reviewCount: 98,
    price: 75,
    image: "/placeholder.svg",
    availability: "Available Tomorrow",
    languages: ["English", "Mandarin"],
    experience: 12,
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    rating: 4.7,
    reviewCount: 86,
    price: 90,
    image: "/placeholder.svg",
    availability: "Available Today",
    languages: ["English", "Spanish"],
    experience: 6,
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Psychologist",
    rating: 4.9,
    reviewCount: 112,
    price: 95,
    image: "/placeholder.svg",
    availability: "Available This Week",
    languages: ["English"],
    experience: 15,
  },
  {
    id: 5,
    name: "Dr. Aisha Patel",
    specialty: "Dermatologist",
    rating: 4.8,
    reviewCount: 74,
    price: 120,
    image: "/placeholder.svg",
    availability: "Available Today",
    languages: ["English", "Hindi"],
    experience: 10,
  },
];

const specialties = [
  "Therapist",
  "Primary Care",
  "Pediatrician",
  "Psychologist",
  "Dermatologist",
  "Cardiologist",
  "Neurologist",
];

const Providers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [availabilityFilter, setAvailabilityFilter] = useState<string>("any");

  const filteredProviders = mockProviders.filter((provider) => {
    const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         provider.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSpecialty = selectedSpecialties.length === 0 || 
                            selectedSpecialties.includes(provider.specialty);
    
    const matchesAvailability = availabilityFilter === "any" ||
                                (availabilityFilter === "today" && provider.availability === "Available Today") ||
                                (availabilityFilter === "this-week" && (provider.availability === "Available Today" || 
                                                                     provider.availability === "Available Tomorrow" ||
                                                                     provider.availability === "Available This Week"));
    
    return matchesSearch && matchesSpecialty && matchesAvailability;
  });

  const toggleSpecialty = (specialty: string) => {
    setSelectedSpecialties(prev => 
      prev.includes(specialty) 
        ? prev.filter(s => s !== specialty)
        : [...prev, specialty]
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gradient-to-r from-lyra-teal/10 to-lyra-blue/10 py-10">
        <div className="lyra-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-lyra-dark mb-4">
              Find Your Perfect Healthcare Provider
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Search for providers who match your needs and schedule
            </p>
            
            <div className="relative">
              <Input
                className="pl-10 py-6 text-lg rounded-full"
                placeholder="Search for providers by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Button 
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-lyra-teal hover:bg-lyra-teal/90 rounded-full"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Sliders className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="lyra-container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-1/4 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="font-bold text-lg mb-4">Filters</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-3">Availability</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="any-time"
                        name="availability"
                        checked={availabilityFilter === "any"}
                        onChange={() => setAvailabilityFilter("any")}
                        className="mr-2"
                      />
                      <Label htmlFor="any-time">Any time</Label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="today"
                        name="availability"
                        checked={availabilityFilter === "today"}
                        onChange={() => setAvailabilityFilter("today")}
                        className="mr-2"
                      />
                      <Label htmlFor="today">Today</Label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="this-week"
                        name="availability"
                        checked={availabilityFilter === "this-week"}
                        onChange={() => setAvailabilityFilter("this-week")}
                        className="mr-2"
                      />
                      <Label htmlFor="this-week">This week</Label>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="font-medium mb-3">Specialties</h3>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {specialties.map((specialty) => (
                      <div key={specialty} className="flex items-center">
                        <Checkbox
                          id={`specialty-${specialty}`}
                          checked={selectedSpecialties.includes(specialty)}
                          onCheckedChange={() => toggleSpecialty(specialty)}
                          className="mr-2"
                        />
                        <Label htmlFor={`specialty-${specialty}`}>{specialty}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Additional filters would go here */}
              </div>
              
              <div className="mt-6 pt-4 border-t flex justify-between">
                <Button variant="ghost" onClick={() => {
                  setSelectedSpecialties([]);
                  setAvailabilityFilter("any");
                }}>
                  Clear All
                </Button>
                <Button className="bg-lyra-teal hover:bg-lyra-teal/90">Apply Filters</Button>
              </div>
            </div>
            
            <div className="bg-lyra-teal/10 p-6 rounded-xl">
              <h3 className="font-bold mb-2">Need help finding a provider?</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Our team can help match you with the right healthcare professional.
              </p>
              <Button className="w-full bg-lyra-teal hover:bg-lyra-teal/90">Get Matched</Button>
            </div>
          </div>
          
          {/* Provider Listings */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold">
                  {filteredProviders.length} Providers Available
                </h2>
                <p className="text-gray-500 text-sm">Showing all providers {searchTerm && `matching "${searchTerm}"`}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="text-lyra-teal h-5 w-5" />
                <span className="text-gray-600 text-sm">Apr 28, 2025</span>
              </div>
            </div>
            
            <div className="space-y-6">
              {filteredProviders.length > 0 ? (
                filteredProviders.map((provider) => (
                  <ProviderCard key={provider.id} {...provider} />
                ))
              ) : (
                <div className="text-center py-12 border border-dashed border-gray-300 rounded-lg">
                  <p className="text-gray-500">No providers match your search criteria</p>
                  <Button variant="outline" className="mt-4" onClick={() => {
                    setSearchTerm("");
                    setSelectedSpecialties([]);
                    setAvailabilityFilter("any");
                  }}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Providers;
