import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Module1 from '../components/Module1';

function Module() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden bg-[#181A2E]">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="px-20 py-10">
                    <span className="font-kalam text-2xl md:text-5xl text-slate-100 font-bold mb-8">Modules</span>
                    <Module1/>
                </div>
               
               
            </div>
        </div>
    );
}

export default Module;