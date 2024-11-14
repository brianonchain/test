import { Suspense } from "react";
import { cookies } from "next/headers";
// db
import dbConnect from "@/db/dbConnect";
import TodoModel from "@/db/TodoModel";
// components
import Client1 from "./_components/Client1";
import Server1 from "./_components/Server1";
import { unstable_cache } from "next/cache";
// axios
import axios from "axios";

// const getCachedDoc = unstable_cache(async () => TodoModel.findOne({ user: "brianonchain" }, "todos"), [], { tags: ["todos"] });

export default async function page() {
  // time
  const date = new Date();
  const time = date.toLocaleTimeString("en-US", { hour12: false }) + `.${date.getMilliseconds()}`;

  // get cookies
  const username = (await cookies()).get("username")?.value;

  // get todo list
  let todos = [];
  if (username) {
    try {
      await dbConnect();
      // var doc = await getCachedDoc();
      var doc = await TodoModel.findOne({ user: username });
      todos = doc.todos;
    } catch (e) {
      console.log(e);
    }
  }

  // const res = await fetch("https://brianonchain-test-334a237be634.herokuapp.com/ping");
  // const data = await res.json();
  // const { data } = await axios.get("https://brianonchain-test-334a237be634.herokuapp.com/ping");
  const data = "placeholder";

  console.log("/todo/nextjs page.tsx:", time, "heroku:", data, "todos.length:", todos?.length ?? "undefined");

  return (
    <div className="pageContainer">
      <div className="pageSubcontainer">
        <div>Todo-NextJS</div>
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
