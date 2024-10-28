import { cookies } from "next/headers";
import Client1 from "./_components/Client1";
import Client2 from "./_components/Client2";
import Server1 from "./_components/Server1";
import { Suspense } from "react";

export default async function page() {
  const color = (await cookies()).get("color")?.value;

  // const res = await fetch("https://mockanapi.com/s/67188f70da9fa4544af140d7/test?mock_delay=3000", {
  //   method: "GET",
  //   cache: "force-cache",
  // });
  // const data = await res.json();
  // console.log("3s delay");

  return (
    <div className="pageContainer">
      <div className="pageSubcontainer">
        <div className="componentContainer">
          <div>page.tsx</div>
          <div>color: {color}</div>
        </div>
        <Client1 color={color} />
        <Suspense key={color} fallback={<div>Loading...</div>}>
          <Server1 />
        </Suspense>
      </div>
    </div>
  );
}
