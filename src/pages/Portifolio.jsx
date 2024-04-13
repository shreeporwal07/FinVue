import React, { useState, useEffect } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import RealTimeGraph from "../components/RealTimeGraph"; // Assuming you have a RealTimeGraph component
import DashboardCard05 from "../partials/dashboard/DashboardCard05";

function Portifolio() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [money, setMoney] = useState(100); // Initial money amount
  const [profit, setProfit] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [gameDuration, setGameDuration] = useState(60); // Duration of the game in seconds
  const [timeRemaining, setTimeRemaining] = useState(gameDuration);
  const [currentPrice, setCurrentPrice] = useState(0); // Current price

  useEffect(() => {
    let timer;
    if (gameActive && timeRemaining > 0) {
      timer = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
        // Update current price at regular intervals (for demonstration purposes)
        setCurrentPrice(getRandomPrice());
      }, 1000);
    } else if (timeRemaining === 0) {
      // Game ends, calculate net profit or loss
      setGameActive(false);
      // Perform any cleanup actions here
    }
    return () => clearTimeout(timer);
  }, [gameActive, timeRemaining]);

  const startGame = () => {
    setGameActive(true);
    // Reset money and profit for a new game
    setMoney(100);
    setProfit(0);
    setTimeRemaining(gameDuration);
    setCurrentPrice(getRandomPrice());
  };

  const buy = (price) => {
    if (gameActive && money >= price) {
      setMoney((prevMoney) => prevMoney - price);
    }
  };

  const sell = (price) => {
    if (gameActive) {
      setMoney((prevMoney) => prevMoney + price);
    }
  };

  // Dummy function to generate random price for the currentPrice
  const getRandomPrice = () => {
    return Math.floor(Math.random() * 100) + 50; // Random price between 50 and 150
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#181A2E]">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="m-10 space-y-4">
            <span className="font-kalam sm:text-2xl md:text-5xl text-slate-100 font-bold">
              Investment Portifolio
            </span>
          </div>
          <div className="flex justify-center m-2">
            <RealTimeGraph/>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Portifolio;
