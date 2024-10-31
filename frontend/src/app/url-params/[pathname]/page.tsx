import { Suspense } from "react";
import Server1 from "./_components/Server1";

export default async function page({ params }: { params: Promise<{ pathname: string }> }) {
  const pathname = (await params).pathname;
  return (
    <div className="pageContainer">
      <div className="pageSubcontainer">
        <div className="componentContainer">
          <p>page.tsx</p>
          <p>{pathname}</p>
          <p></p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Server1 />
        </Suspense>
      </div>
    </div>
  );
}
