import { Suspense } from "react";
import Client1 from "./_components/Client1";
import Server1 from "./_components/Server1";

export default async function page() {
  return (
    <div className="pageContainer">
      <div className="pageSubcontainer">
        <div className="componentContainer">
          <div>page.tsx</div>
        </div>
        <Client1 />
        <Suspense fallback={<div>Loading...</div>}>
          <Server1 />
        </Suspense>
      </div>
    </div>
  );
}
