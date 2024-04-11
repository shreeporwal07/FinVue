import React, { useState } from 'react';
import Header from '../partials/Header';
import Sidebar from "../partials/Sidebar";
import WelcomeBanner from '../partials/WelcomeBanner';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import UserMenu from '../components/DropdownProfile';
function Dashboard() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
  
    return (
      <div className="flex h-screen overflow-hidden bg-[#181A2E]">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <div className="flex space-x-8">
            <WelcomeBanner />
            <UserMenu/>
            </div>
            <div className="grid grid-cols-12 gap-6">
            <DashboardCard05 />
            <DashboardCard12 />
              <DashboardCard13 />
              </div>
            </div>
</main>
        </div>
      </div>
    );
  }
  
  export default Dashboard;