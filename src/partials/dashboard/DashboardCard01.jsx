import React from "react";

function DashboardCard01() {
  const imgurl = "https://img.flexifunnels.com/images/3913/awodm_400_611.png";
  return (
    <div className="flex col-span-full sm:col-span-6">
      <img
        className="w-96 h-96 "
        src={imgurl}
        width="60"
        height="60"
        alt="User"
      />
    </div>
  );
}

export default DashboardCard01;
