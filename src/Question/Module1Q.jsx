import React, { useState } from 'react'
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

const Learning = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const data = {
            "Ques": "what is your name",
            "mcq": {
                "1": "leena",
                "2": "jatin",
                "3": "shree",
                "4": "zeel"
        }
    }
    return (
        <div className="flex h-screen overflow-hidden bg-[#181A2E]">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="px-20 py-10">

                </div>
            </div>
        </div>
    );
}

export default Learning