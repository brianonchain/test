"use client";
import { useUserInfo } from "./Web3AuthProvider";

export default function Settings() {
  console.log("/flash Settings.tsx");

  const userInfo = useUserInfo();
  return (
    <div className="componentContainer">
      <div>Cashout</div>
      <div>{userInfo?.idToken}</div>
    </div>
  );
}
