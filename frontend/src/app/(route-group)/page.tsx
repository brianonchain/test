import Link from "next/link";
import { cookies } from "next/headers";
import ConnectButton from "../_components/ConnectButton";
import { links } from "@/app/_components/Navbar";

export default async function Home() {
  // const color = (await cookies()).get("color")?.value;
  console.log("root page.tsx");

  return (
    <div className="p-12 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8">
      <div className="col-span-full flex justify-end">
        <ConnectButton />
      </div>
      {links.map((i) => (
        <Link href={`/${i.path}`}>
          <div className="card">{i.title}</div>
        </Link>
      ))}
    </div>
  );
}
