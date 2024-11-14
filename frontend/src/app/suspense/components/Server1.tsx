import React from "react";

export default async function Server1() {
  // time
  const date1 = new Date();
  const time1 = date1.toLocaleTimeString("en-US", { hour12: false }) + `.${date1.getMilliseconds()}`;
  console.log("Server1.tsx time1", time1);

  const res = await fetch("https://brianonchain-test-334a237be634.herokuapp.com/delay3s", { cache: "no-store" });
  const data = await res.json();
  console.log(data);

  // time
  const date2 = new Date();
  const time2 = date2.toLocaleTimeString("en-US", { hour12: false }) + `.${date2.getMilliseconds()}`;
  console.log("Server1.tsx time2", time2);

  return (
    <>
      <p>Server1</p>
      <p>{data.test}</p>
    </>
  );
}
