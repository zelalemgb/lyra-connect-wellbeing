
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, DollarSign, MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mockAppointments = [
  {
    id: 1,
    patient: "Alex Johnson",
    reason: "Annual Check-up",
    date: "Apr 30, 2025",
    time: "10:00 AM",
    status: "confirmed",
  },
  {
    id: 2,
    patient: "Taylor Chen",
    reason: "Follow-up",
    date: "Apr 30, 2025",
    time: "11:30 AM",
    status: "confirmed",
  },
  {
    id: 3,
    patient: "Jordan Smith",
    reason: "New Patient Consultation",
    date: "May 1, 2025",
    time: "2:15 PM",
    status: "pending",
  },
];

const ProviderDashboard = () => {
  const [providerName] = useState("Dr. Williams");

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <section>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Welcome, {providerName}</h1>
          <Button className="bg-lyra-teal hover:bg-lyra-teal/90">Update Availability</Button>
        </div>
        <p className="text-gray-600 mt-2">
          Manage your appointments and patient information
        </p>
      </section>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Today's Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-lyra-teal" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Pending Requests</CardTitle>
            <Clock className="h-4 w-4 text-lyra-blue" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Patients</CardTitle>
            <User className="h-4 w-4 text-lyra-mint" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Monthly Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,480</div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Appointments */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Your Schedule</h2>
          <Link to="/appointments">
            <Button variant="link" className="text-lyra-teal p-0">
              View Full Calendar
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="today" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="tomorrow">Tomorrow</TabsTrigger>
            <TabsTrigger value="week">This Week</TabsTrigger>
          </TabsList>
          
          <TabsContent value="today">
            <div className="space-y-4">
              {mockAppointments.slice(0, 2).map((appointment) => (
                <Card key={appointment.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex items-center p-4">
                      <div className="h-12 w-12 rounded-full bg-lyra-mint/20 flex items-center justify-center mr-4">
                        <User className="h-6 w-6 text-lyra-mint" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{appointment.patient}</h3>
                        <p className="text-sm text-gray-500">{appointment.reason}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="text-sm">{appointment.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-2 bg-gray-50 flex items-center justify-between">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        appointment.status === 'confirmed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {appointment.status}
                      </span>
                      <div className="space-x-2">
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                        <Button variant="default" size="sm" className="bg-lyra-teal hover:bg-lyra-teal/90">
                          Start Session
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="tomorrow">
            <div className="space-y-4">
              {mockAppointments.slice(2, 3).map((appointment) => (
                <Card key={appointment.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex items-center p-4">
                      <div className="h-12 w-12 rounded-full bg-lyra-mint/20 flex items-center justify-center mr-4">
                        <User className="h-6 w-6 text-lyra-mint" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{appointment.patient}</h3>
                        <p className="text-sm text-gray-500">{appointment.reason}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="text-sm">{appointment.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-2 bg-gray-50 flex items-center justify-between">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        appointment.status === 'confirmed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {appointment.status}
                      </span>
                      <div className="space-x-2">
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          Confirm
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="week">
            <div className="space-y-4">
              {mockAppointments.map((appointment) => (
                <Card key={appointment.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex items-center p-4">
                      <div className="h-12 w-12 rounded-full bg-lyra-mint/20 flex items-center justify-center mr-4">
                        <User className="h-6 w-6 text-lyra-mint" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{appointment.patient}</h3>
                        <p className="text-sm text-gray-500">{appointment.reason}</p>
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
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        appointment.status === 'confirmed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {appointment.status}
                      </span>
                      <div className="space-x-2">
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                        {appointment.status === 'pending' ? (
                          <Button variant="outline" size="sm">
                            Confirm
                          </Button>
                        ) : (
                          <Button variant="default" size="sm" className="bg-lyra-teal hover:bg-lyra-teal/90">
                            Prepare
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Quick Actions */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="hover:border-lyra-teal transition-colors cursor-pointer">
            <CardContent className="p-4 text-center">
              <div className="h-12 w-12 rounded-full bg-lyra-teal/10 flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-lyra-teal" />
              </div>
              <h3 className="font-medium">Manage Schedule</h3>
            </CardContent>
          </Card>
          <Card className="hover:border-lyra-teal transition-colors cursor-pointer">
            <CardContent className="p-4 text-center">
              <div className="h-12 w-12 rounded-full bg-lyra-teal/10 flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="h-6 w-6 text-lyra-teal" />
              </div>
              <h3 className="font-medium">Patient Messages</h3>
            </CardContent>
          </Card>
          <Card className="hover:border-lyra-teal transition-colors cursor-pointer">
            <CardContent className="p-4 text-center">
              <div className="h-12 w-12 rounded-full bg-lyra-teal/10 flex items-center justify-center mx-auto mb-3">
                <User className="h-6 w-6 text-lyra-teal" />
              </div>
              <h3 className="font-medium">Patient Records</h3>
            </CardContent>
          </Card>
          <Card className="hover:border-lyra-teal transition-colors cursor-pointer">
            <CardContent className="p-4 text-center">
              <div className="h-12 w-12 rounded-full bg-lyra-teal/10 flex items-center justify-center mx-auto mb-3">
                <DollarSign className="h-6 w-6 text-lyra-teal" />
              </div>
              <h3 className="font-medium">Earnings</h3>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ProviderDashboard;
