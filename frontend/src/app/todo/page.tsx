import Link from "next/link";

export default async function page() {
  console.log("/todo page.tsx");

  return (
    <div className="pageContainer">
      <div className="pageSubcontainer">
        <div className="grid grid-cols-2 gap-8">
          <Link href="/todo/nextjs">
            <div className="card text-center">NextJS Method</div>
          </Link>
          <Link href="/todo/reactquery">
            <div className="card text-center">React Query Method</div>
          </Link>
          <Link href="/todo/nextjs2">
            <div className="card text-center">NextJS Method 2</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
