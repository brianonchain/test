"use client";
import { useAppKit } from "@reown/appkit/react";
import { useAccount, useAccountEffect } from "wagmi";
import { FaCircle } from "react-icons/fa";

export default function ConnectButton() {
  const { open, close } = useAppKit();
  const { isConnected, address } = useAccount();
  return (
    <>
      {isConnected ? (
        <button className="buttonSecondary px-[16px] flex items-center" onClick={() => open({ view: "Account" })}>
          <FaCircle className="mr-2 text-green-500 w-[12px] h-[12px]" /> {address?.slice(0, 6)}...{address?.slice(-4)}
        </button>
      ) : (
        <button className="buttonPrimary" onClick={() => open()}>
          Connect
        </button>
      )}
    </>
  );
}
