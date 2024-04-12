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
        <div className="flex overflow-hidden bg-[#181A2E]">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="relative overflow-y-auto overflow-x-hidden">
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="m-10 space-y-4">
                    <span className="font-kalam sm:text-2xl md:text-5xl text-slate-100 font-bold">Financial Planner</span>
                    <div className="flex flex-col md:flex-row gap-6">
                    <BudgetingTool />
                    <GoalSetting />
                    <DebtPayoffPlanner/>
                    <InvestmentTracker/>
                    </div>
                    <ExpenseTracking />
                </div>
            </div>
        </div>
    );
}

export default Planner;
