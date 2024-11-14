"use client";
import { useState, useEffect, createContext, useContext } from "react";
type UserInfo = { idToken: string; publicKey: string };

const UserInfoContext = createContext<UserInfo | null>(null);
export const useUserInfo = () => useContext(UserInfoContext);

export default function Web3AuthProvider({ children }: { children: React.ReactNode }) {
  console.log("/flash Web3AuthProvider.tsx");
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    console.log("/flash Web3AuthProvider.tsx useEffect");

    setUserInfo({ idToken: "brianonchain", publicKey: "brianonchain" });
  }, []);
  return <UserInfoContext.Provider value={userInfo}>{children}</UserInfoContext.Provider>;
}
