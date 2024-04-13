import React, { useState } from 'react'
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import { Link } from 'react-router-dom';

const Learning = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden bg-[#181A2E]">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="m-10">
                    <span className="font-kalam text-2xl md:text-5xl text-slate-100 font-bold mb-8">Start Learnings</span>
                    <div className="flex flex-col mt-4 gap-10">
                        <div className="flex py-5 px-5 flex-col gap-10 col-span-full xl:col-span-6 bg-gradient-to-r from-[#434974] to-[#242949] shadow-lg rounded-lg border border-slate-700">
                          <Link to='/mod1q'><span className="text-2xl cursor-pointer">1. Basic Concepts of Finance</span></Link>  
                        </div>
                        <div className="flex py-5 px-5 flex-col gap-10 col-span-full xl:col-span-6 bg-gradient-to-r from-[#434974] to-[#242949] shadow-lg rounded-lg border border-slate-700">
                            <span className="text-2xl cursor-pointer">2. Module  MCQ</span>
                        </div>
                        <div className="flex py-5 px-5 flex-col gap-10 col-span-full xl:col-span-6 bg-gradient-to-r from-[#434974] to-[#242949] shadow-lg rounded-lg border border-slate-700">
                            <span className="text-2xl cursor-pointer">3. Module  MCQ</span>
                        </div>
                        <div className="flex py-5 px-5 flex-col gap-10 col-span-full xl:col-span-6 bg-gradient-to-r from-[#434974] to-[#242949] shadow-lg rounded-lg border border-slate-700">
                            <span className="text-2xl cursor-pointer">4. Module  MCQ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Learning
