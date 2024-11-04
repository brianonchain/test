import { cookies } from "next/headers";

export default async function Server1() {
  const color = (await cookies()).get("color")?.value;

  console.log("/cookies Server1.tsx, before 3s delay");

  const res = await fetch("https://mockanapi.com/s/67188f70da9fa4544af140d7/test?mock_delay=2000", {
    method: "GET",
    cache: "force-cache",
  });
  const data = await res.json();
  console.log("/cookies Server1.tsx, after 3s delay");

  return (
    <div className="componentContainer">
      <p>Server 1</p>
      <p>This component has 3s delay</p>
      <p>Data: {data.test}</p>
      <p>Cookie: color: {color}</p>
    </div>
  );
}
