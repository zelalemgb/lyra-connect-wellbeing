
import { useState } from "react";
import { Tab } from "@headlessui/react";
import Navbar from "@/components/ui/navbar";
import PatientDashboard from "@/components/dashboard/patient-dashboard";
import ProviderDashboard from "@/components/dashboard/provider-dashboard";

const Dashboard = () => {
  // This would be determined by auth in a real implementation
  const [userType, setUserType] = useState("patient");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="lyra-container flex-1 py-8">
        <div className="mb-8">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-lyra-blue/20 p-1">
              <Tab
                className={({ selected }) =>
                  `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-lyra-dark
                  ${
                    selected
                      ? "bg-white shadow"
                      : "text-gray-600 hover:bg-white/[0.12] hover:text-lyra-teal"
                  }
                  `
                }
                onClick={() => setUserType("patient")}
              >
                Patient View
              </Tab>
              <Tab
                className={({ selected }) =>
                  `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-lyra-dark
                  ${
                    selected
                      ? "bg-white shadow"
                      : "text-gray-600 hover:bg-white/[0.12] hover:text-lyra-teal"
                  }
                  `
                }
                onClick={() => setUserType("provider")}
              >
                Provider View
              </Tab>
            </Tab.List>
            <Tab.Panels className="mt-6">
              <Tab.Panel>
                <PatientDashboard />
              </Tab.Panel>
              <Tab.Panel>
                <ProviderDashboard />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
