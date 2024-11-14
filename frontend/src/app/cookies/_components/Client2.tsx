"use client";
import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";

// export default function Client2({ color }: { color: string | undefined }) {
export default function Client2({ color }: { color: string | undefined }) {
  console.log("/cookies Client2.tsx", "\ncolor:", color);
  const color = getCookie("color");

  return (
    <div className="componentContainer">
      <p>Client 2</p>
      <p>Cookie | color: {color}</p>
    </div>
  );
}
