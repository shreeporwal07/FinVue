// FinancialPlannerApp.jsx
import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import BudgetingTool from '../components/BudgetingTool';
import GoalSetting from '../components/GoalSetting';
import ExpenseTracking from '../components/ExpenseTracking';
import DebtPayoffPlanner from '../components/DebtPayoffPlanner';
import InvestmentTracker from '../components/InvestmentTracker';

function Planner() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden bg-[#181A2E]">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
                <div className="m-10 space-y-4">
                    <span className="font-kalam sm:text-2xl md:text-5xl text-slate-100 font-bold">Financial Planner</span>
                    <ExpenseTracking />
                    <div className="grid md:grid-cols-3 gap-6">
                    <BudgetingTool />
                    <GoalSetting />
                    <DebtPayoffPlanner/>
                    {/* <InvestmentTracker/> */}
                    </div>
                </div>
                </main>
            </div>
        </div>
    );
}

export default Planner;
