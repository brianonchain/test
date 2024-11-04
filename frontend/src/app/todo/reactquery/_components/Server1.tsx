export default async function Server1() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  // time
  const date1 = new Date();
  const time1 = date1.toLocaleTimeString("en-US", { hour12: false }) + `.${date1.getMilliseconds()}`;
  console.log("/reactquery Server1.tsx before 5s delay", time1);

  try {
    const res = await fetch("https://mockanapi.com/s/67188f70da9fa4544af140d7/test?mock_delay=2000");
    var data = await res.json();
  } catch {
    console.log("5s mockapi failed");
  }

  // time
  const date2 = new Date();
  const time2 = date2.toLocaleTimeString("en-US", { hour12: false }) + `.${date2.getMilliseconds()}`;
  console.log("/reactquery Server1.tsx after 5s delay", time2);

  return (
    <div className="componentContainer">
      <p>Server 1</p>
      <p>This component has 3s delay</p>
    </div>
  );
}
