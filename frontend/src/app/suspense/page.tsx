import { Suspense } from "react";
import Client1 from "./components/Client1";
import Server1 from "./components/Server1";
import { cookies } from "next/headers";

export default async function page() {
  const color = (await cookies()).get("color")?.value;
  console.log("color:", color);

  return (
    <div className="page">
      <div className="w-[350px] flex flex-col gap-4">
        <div className="componentContainer">
          <p>page.tsx</p>
          <p>color: {color}</p>
        </div>
        <Client1 />
        <div className="componentContainer">
          <Suspense fallback={<div>Loading...</div>}>
            <Server1 />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
