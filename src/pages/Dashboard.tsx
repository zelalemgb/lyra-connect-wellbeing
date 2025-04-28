
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/ui/navbar";
import PatientDashboard from "@/components/dashboard/patient-dashboard";
import ProviderDashboard from "@/components/dashboard/provider-dashboard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import LanguageSwitcher from "@/components/ui/language-switcher";

const Dashboard = () => {
  const [userType, setUserType] = useState("patient");
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="lyra-container flex-1 py-8">
        <div className="flex justify-end mb-4">
          <LanguageSwitcher />
        </div>
        <div className="mb-8">
          <Tabs defaultValue="patient" className="w-full">
            <TabsList className="flex space-x-1 rounded-xl bg-lyra-blue/20 p-1">
              <TabsTrigger 
                value="patient"
                onClick={() => setUserType("patient")}
                className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-lyra-dark data-[state=active]:bg-white data-[state=active]:shadow data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-white/[0.12] data-[state=inactive]:hover:text-lyra-teal"
              >
                Patient View
              </TabsTrigger>
              <TabsTrigger 
                value="provider"
                onClick={() => setUserType("provider")}
                className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-lyra-dark data-[state=active]:bg-white data-[state=active]:shadow data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-white/[0.12] data-[state=inactive]:hover:text-lyra-teal"
              >
                Provider View
              </TabsTrigger>
            </TabsList>
            <TabsContent value="patient" className="mt-6">
              <PatientDashboard />
            </TabsContent>
            <TabsContent value="provider" className="mt-6">
              <ProviderDashboard />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
