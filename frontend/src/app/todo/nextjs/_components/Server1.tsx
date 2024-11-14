import axios from "axios";

export default async function Server1() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  // time
  const date1 = new Date();
  const time1 = date1.toLocaleTimeString("en-US", { hour12: false }) + `.${date1.getMilliseconds()}`;
  console.log("/todo/nextjs Server1.tsx before 5s delay", time1);

  try {
    const res = await fetch("https://brianonchain-test-334a237be634.herokuapp.com/delay3s");
    var data = await res.json();
  } catch {
    console.log("5s mockapi failed");
  }

  // heroku
  // const resFromHeroku = await fetch("https://brianonchain-test-334a237be634.herokuapp.com/ping");
  // const dataFromHeroku = await resFromHeroku.json();
  // const { data: dataFromHeroku } = await axios.get("https://brianonchain-test-334a237be634.herokuapp.com/ping");
  const dataFromHeroku = "placeholder";

  // time
  const date2 = new Date();
  const time2 = date2.toLocaleTimeString("en-US", { hour12: false }) + `.${date2.getMilliseconds()}`;
  console.log("/todo/nextjs Server1.tsx after 5s delay", time2, "heroku:", dataFromHeroku);

  return (
    <div className="componentContainer">
      <p>Server 1</p>
      <p>This component has 3s delay</p>
    </div>
  );
}
