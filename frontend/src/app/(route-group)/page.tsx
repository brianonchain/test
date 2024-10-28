import Link from "next/link";
import { cookies } from "next/headers";
import ConnectButton from "../_components/ConnectButton";

export default async function Home() {
  // const color = (await cookies()).get("color")?.value;
  console.log("main page.tsx rendered once");
  return (
    <div className="p-12 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8">
      <div className="col-span-full flex justify-end">
        <ConnectButton />
      </div>
      <Link href="/shadows">
        <div className="card">Shadows</div>
      </Link>
      <Link href="/suspense">
        <div className="card">suspense</div>
      </Link>
      <Link href="/cookies">
        <div className="card">2</div>
      </Link>
      <Link href="/todo">
        <div className="card">Todo</div>
      </Link>
      <Link href="/route-group">
        <div className="card">Route Group</div>
      </Link>
      <Link href="/pathname">
        <div className="card">URL Params</div>
      </Link>
      <Link href="/cookies">
        <div className="card">
          <p>Cookies</p>
          {/* <p>{color}</p> */}
        </div>
      </Link>
      <Link href="/searchparams">
        <div className="card">URL Search Params</div>
      </Link>
    </div>
  );
}
