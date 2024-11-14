export default async function Server1() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  // time
  const date1 = new Date();
  const time1 = date1.toLocaleTimeString("en-US", { hour12: false }) + `.${date1.getMilliseconds()}`;
  console.log("/searchparams Server1.tsx", time1);

  const res = await fetch("https://brianonchain-test-334a237be634.herokuapp.com/delay3s");
  const data = await res.json();
  console.log("3s delay");

  // time
  const date2 = new Date();
  const time2 = date2.toLocaleTimeString("en-US", { hour12: false }) + `.${date2.getMilliseconds()}`;
  console.log("/searchparams Server1.tsx", time2);

  return (
    <div className="componentContainer">
      <p>Server 1</p>
      <p>This component has 3s delay</p>
    </div>
  );
}
