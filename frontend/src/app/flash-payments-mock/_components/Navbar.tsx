"use client";
export default function Navbar({ menu, setMenu }: { menu: string; setMenu: React.Dispatch<React.SetStateAction<string>> }) {
  const tabs = ["payments", "cashout", "settings"];

  return (
    <>
      {tabs.map((i) => (
        <div key={i} className={`${menu == i ? "bg-slate-200" : ""} p-1 hover:bg-slate-200 rounded-md cursor-pointer`} onClick={() => setMenu(i)}>
          {i}
        </div>
      ))}
    </>
  );
}
