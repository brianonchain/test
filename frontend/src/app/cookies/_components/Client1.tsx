"use client";
import { setCookie } from "@/actions";

export default function ClientComponent({ color }: { color: string | undefined }) {
  console.log("/cookies Client1.tsx", "\ncolor:", color);

  return (
    <div className="p-4 flex flex-col gap-4 border border-slate-500 rounded-xl">
      <p>Client 1</p>
      <button className={`${color === "red" ? "bg-red-300" : ""} button`} onClick={() => setCookie("red")}>
        Set "color" cookie to "red"
      </button>
      <button className={`${color === "blue" ? "bg-blue-300" : ""} button`} onClick={() => setCookie("blue")}>
        Set "color" cookie to "blue"
      </button>
      <div>Button actions are linked to Server Actions, which then set the cookie</div>
    </div>
  );
}
