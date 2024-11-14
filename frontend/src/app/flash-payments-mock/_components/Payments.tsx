"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserInfo } from "./Web3AuthProvider";

export default function Client1() {
  const userInfo = useUserInfo();

  const queryClient = useQueryClient();

  const paymentsQuery = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await fetch("/api/getPayments", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ idToken: userInfo?.idToken, publicKey: userInfo?.publicKey }),
      });
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      return data;
    },
    enabled: userInfo ? true : false,
  });
  const date = new Date();
  const time = date.toLocaleTimeString("en-US", { hour12: false }) + `.${date.getMilliseconds()}`;
  console.log("/flash Payments.tsx", "userInfo.idToken", userInfo?.idToken, "paym:entsQuery.data:", paymentsQuery.data, time);

  // // useOptimistic
  // const [optimisiticTodos, setOptimisticTodos] = useOptimistic(getTodosQuery.data, (state, { action, title, index }: { action: string; title?: string; index?: number }) => {
  //   if (title && action === "add") return [...state, title];
  //   if (typeof index === "number" && action === "delete") return state.filter((i: string, filterIndex: number) => index != filterIndex);
  //   return state; // this is needed as something needs to be returned
  // });

  // react query - add todo
  const addTodoMutation = useMutation({
    mutationFn: (title: string) =>
      fetch("/api/addTodo", {
        method: "POST",
        body: JSON.stringify({ title: title }),
        headers: { "content-type": "application/json" },
      }),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  // /react query - delete todo
  const deleteTodoMutation = useMutation({
    mutationFn: (index: number) =>
      fetch("/api/deleteTodo", {
        method: "POST",
        body: JSON.stringify({ index: index }),
        headers: { "content-type": "application/json" },
      }),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  return (
    <div className="componentContainer">
      <div>Payments</div>
      {paymentsQuery.data ? (
        <div className="flex flex-col">
          {paymentsQuery.data.map((i: string, index: number) => (
            <div key={index} className="w-full flex justify-between">
              <p>{i}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
