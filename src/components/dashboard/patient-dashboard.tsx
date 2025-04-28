
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MessageSquare, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

const mockAppointments = [
  {
    id: 1,
    provider: "Dr. Sarah Johnson",
    specialty: "Therapist",
    date: "Apr 30, 2025",
    time: "10:00 AM",
    status: "upcoming",
  },
  {
    id: 2,
    provider: "Dr. Michael Chen",
    specialty: "Primary Care",
    date: "May 5, 2025",
    time: "3:30 PM",
    status: "upcoming",
  },
];

const mockRecentProviders = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Therapist",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Primary Care",
    image: "/placeholder.svg",
  },
];

const PatientDashboard = () => {
  const [userName] = useState("Alex");

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <section>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Welcome, {userName}</h1>
          <Link to="/providers">
            <Button className="bg-lyra-teal hover:bg-lyra-teal/90">Find a Provider</Button>
          </Link>
        </div>
        <p className="text-gray-600 mt-2">
          Manage your appointments and health information
        </p>
      </section>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Upcoming Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-lyra-teal" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockAppointments.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Past Consultations</CardTitle>
            <MessageSquare className="h-4 w-4 text-lyra-teal" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Saved Providers</CardTitle>
            <User className="h-4 w-4 text-lyra-teal" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Appointments */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
          <Link to="/appointments">
            <Button variant="link" className="text-lyra-teal p-0">
              View All
            </Button>
          </Link>
        </div>

        <div className="space-y-4">
          {mockAppointments.length > 0 ? (
            mockAppointments.map((appointment) => (
              <Card key={appointment.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex items-center p-4">
                    <div className="h-12 w-12 rounded-full bg-lyra-blue/20 flex items-center justify-center mr-4">
                      <User className="h-6 w-6 text-lyra-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{appointment.provider}</h3>
                      <p className="text-sm text-gray-500">{appointment.specialty}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{appointment.date}</span>
                      </div>
                      <div className="flex items-center text-gray-500 mt-1">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">{appointment.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 px-4 py-2 bg-gray-50 flex items-center justify-between">
                    <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {appointment.status}
                    </span>
                    <div className="space-x-2">
                      <Button variant="ghost" size="sm">
                        Reschedule
                      </Button>
                      <Button variant="default" size="sm" className="bg-lyra-teal hover:bg-lyra-teal/90">
                        Join
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-12 border border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500">No upcoming appointments</p>
              <Link to="/providers" className="mt-2 inline-block">
                <Button variant="outline" className="mt-4">
                  Find a Provider
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Recent Providers */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Recent Providers</h2>
          <Link to="/providers">
            <Button variant="link" className="text-lyra-teal p-0">
              View All Providers
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockRecentProviders.map((provider) => (
            <Card key={provider.id}>
              <CardContent className="p-4 flex items-center">
                <div className="h-14 w-14 rounded-full bg-lyra-blue/10 overflow-hidden mr-4">
                  <img 
                    src={provider.image} 
                    alt={provider.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{provider.name}</h3>
                  <p className="text-sm text-gray-500">{provider.specialty}</p>
                </div>
                <Button size="sm" className="bg-lyra-teal hover:bg-lyra-teal/90">
                  Book Again
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="hover:border-lyra-teal transition-colors cursor-pointer">
            <CardContent className="p-4 text-center">
              <div className="h-12 w-12 rounded-full bg-lyra-teal/10 flex items-center justify-center mx-auto mb-3">
                <Search className="h-6 w-6 text-lyra-teal" />
              </div>
              <h3 className="font-medium">Find Provider</h3>
            </CardContent>
          </Card>
          <Card className="hover:border-lyra-teal transition-colors cursor-pointer">
            <CardContent className="p-4 text-center">
              <div className="h-12 w-12 rounded-full bg-lyra-teal/10 flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-lyra-teal" />
              </div>
              <h3 className="font-medium">Schedule</h3>
            </CardContent>
          </Card>
          <Card className="hover:border-lyra-teal transition-colors cursor-pointer">
            <CardContent className="p-4 text-center">
              <div className="h-12 w-12 rounded-full bg-lyra-teal/10 flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="h-6 w-6 text-lyra-teal" />
              </div>
              <h3 className="font-medium">Messages</h3>
            </CardContent>
          </Card>
          <Card className="hover:border-lyra-teal transition-colors cursor-pointer">
            <CardContent className="p-4 text-center">
              <div className="h-12 w-12 rounded-full bg-lyra-teal/10 flex items-center justify-center mx-auto mb-3">
                <User className="h-6 w-6 text-lyra-teal" />
              </div>
              <h3 className="font-medium">Profile</h3>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PatientDashboard;
