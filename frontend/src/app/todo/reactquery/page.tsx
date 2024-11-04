import { Suspense } from "react";
// react query
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
// db
import dbConnect from "@/db/dbConnect";
import TodoModel from "@/db/TodoModel";
// components
import Client1 from "./_components/Client1";
import Server1 from "./_components/Server1";

const username = "brianonchain"; // from cookies

export default async function page() {
  const date = new Date();
  const time = date.toLocaleTimeString("en-US", { hour12: false }) + `.${date.getMilliseconds()}`;
  console.log("/reactquery page.tsx", time);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["todos", username],
    queryFn: async () => {
      await dbConnect();
      const { todos } = await TodoModel.findOne({ user: username });

      // time
      const date = new Date();
      const time = date.toLocaleTimeString("en-US", { hour12: false }) + `.${date.getMilliseconds()}`;
      console.log("todos prefetched", time);

      return todos; // queryFn must return promise, promise must return data (cannot be undefined) or throw an error
    },
  });

  return (
    <div className="pageContainer">
      <div className="pageSubcontainer">
        <div>Todo-ReactQuery</div>
        <div className="componentContainer">
          <div>page.tsx</div>
        </div>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Client1 username={username} />
        </HydrationBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Server1 />
        </Suspense>
      </div>
    </div>
  );
}
