import { Suspense } from "react";
// db
import dbConnect from "@/db/dbConnect";
import TodoModel from "@/db/TodoModel";
// components
import Client1 from "./_components/Client1";
import Server1 from "./_components/Server1";
import { unstable_cache } from "next/cache";

// const getCachedDoc = unstable_cache(async () => TodoModel.findOne({ user: "brianonchain" }, "todos"), [], { tags: ["todos"] });

export default async function page() {
  try {
    await dbConnect();
    // var doc = await getCachedDoc();
    console.log("/todo/nextjs page.tsx above MongoDB call");
    var doc = await TodoModel.findOne({ user: "brianonchain" });
    var todos = doc.todos;
  } catch (e) {
    console.log(e);
  }

  const res = await fetch("https://brianonchain-test-334a237be634.herokuapp.com/ping");
  const data = await res.json();
  console.log("/todo/nextjs page.tsx heroku:", data);

  return (
    <div className="pageContainer">
      <div className="pageSubcontainer">
        <div className="componentContainer">
          <div>page.tsx</div>
        </div>
        <Client1 todos={todos} />
        <Suspense fallback={<div>Loading...</div>}>
          <Server1 />
        </Suspense>
      </div>
    </div>
  );
}
