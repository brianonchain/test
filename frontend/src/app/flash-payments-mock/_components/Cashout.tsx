"use client";
import { useUserInfo } from "./Web3AuthProvider";

export default function Cashout() {
  console.log("/flash Cashout.tsx");
  const userInfo = useUserInfo();
  return (
    <div className="componentContainer">
      <div>Cashout</div>
      <div>{userInfo?.idToken}</div>
    </div>
  );
}
