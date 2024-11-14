"use client";
import { useState, useEffect } from "react";
// components
import Payments from "./_components/Payments";
import Cashout from "./_components/Cashout";
import Settings from "./_components/Settings";
import Navbar from "./_components/Navbar";

export default function page() {
  console.log("/flash page.tsx");

  const [menu, setMenu] = useState("payments"); // payments | cashout | settings

  const tabs = ["payments", "cashout", "settings"];

  return (
    <div className="pageContainer">
      <div className="pageSubcontainer">
        <div>Flash Payments Mock</div>
        <div className="componentContainer flex-row justify-between">
          <Navbar menu={menu} setMenu={setMenu} />
        </div>
        {menu === "payments" && <Payments />}
        {menu === "cashout" && <Cashout />}

        {menu === "settings" && <Settings />}
      </div>
    </div>
  );
}
