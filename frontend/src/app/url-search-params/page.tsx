// next
import { cookies } from "next/headers";
// components
import Client1 from "./_components/Client1";
import Server1 from "./_components/Server1";
import { Suspense } from "react";

export default async function page({ searchParams }: { searchParams: Promise<{ productId: string | string[] | undefined }> }) {
  // const color = (await cookies()).get("color")?.value;

  const productId = (await searchParams).productId;
  console.log("/searchparams page.tsx", "\nproductId:", productId);

  return (
    <div className="pageContainer">
      <div className="pageSubcontainer">
        <div className="componentContainer">
          <p>page.tsx</p>
          {/* <p>Cookie | color: {color}</p> */}
          <p>Search Params | productId: {productId}</p>
        </div>
        <Client1 />
        <Suspense
          // key={JSON.stringify(productId)}
          fallback={<div>Loading...</div>}
        >
          <Server1 />
        </Suspense>
      </div>
    </div>
  );
}
