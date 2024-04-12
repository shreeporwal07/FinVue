import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Module1 from '../components/Module1';

function Module() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex overflow-hidden bg-[#181A2E]">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="relative flex flex-col overflow-y-auto overflow-x-hidden">
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="m-0.5 md:m-8 space-y-8">
                    <span className="font-kalam sm: text-2xl md:text-5xl text-slate-100 font-bold">Modules</span>
                    <Module1/>
                </div>
               
               
            </div>
        </div>
    );
}

export default Module;