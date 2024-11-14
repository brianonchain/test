import { cookies } from "next/headers";

export default async function Server1() {
  const color = (await cookies()).get("color")?.value;

  console.log("/cookies Server1.tsx, before 3s delay");

  const res = await fetch("https://brianonchain-test-334a237be634.herokuapp.com/delay3s", {
    cache: "force-cache",
  });
  const { data } = await res.json();
  console.log("/cookies Server1.tsx, after 3s delay");

  return (
    <div className="componentContainer">
      <p>Server 1</p>
      <p>This component has 3s delay</p>
      <p>Fetch: {data}</p>
      <p>Cookie: color: {color}</p>
    </div>
  );
}
