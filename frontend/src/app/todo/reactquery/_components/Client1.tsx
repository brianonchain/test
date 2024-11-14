"use client";
// next
import { useState, useOptimistic, startTransition } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
// react query
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// actions
import { setCookie } from "@/actions";
// functions
import { getCookie } from "cookies-next";
// db
import dbConnect from "@/db/dbConnect";
import TodoModel from "@/db/TodoModel";

export default function Client1({ username }: { username: string }) {
  const date = new Date();
  const time = date.toLocaleTimeString("en-US", { hour12: false }) + `.${date.getMilliseconds()}`;
  console.log("/reactquery Client1.tsx", time);

  const [title, setTitle] = useState("");
  const queryClient = useQueryClient();

  // const router = useRouter();
  // const searchParams = useSearchParams();
  // const productId = searchParams.get("productId");
  // const color = getCookie("color");
  // console.log(color);

  const getTodosQuery = useQuery({
    queryKey: ["todos", username],
    queryFn: async () => {
      const res = await fetch("/api/getTodos", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ username: username }),
      });
      const data = await res.json();
      return data;
    },
  });

  // useOptimistic
  const [optimisiticTodos, setOptimisticTodos] = useOptimistic(getTodosQuery.data, (state, { action, title, index }: { action: string; title?: string; index?: number }) => {
    if (title && action === "add") return [...state, title];
    if (typeof index === "number" && action === "delete") return state.filter((i: string, filterIndex: number) => index != filterIndex);
    return state; // this is needed as something needs to be returned
  });

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
      <p>Client 1</p>

      <div className="flex gap-4 items-center">
        <input autoComplete="off" className="input" onChange={(e) => setTitle(e.currentTarget.value)} value={title} />
        <button
          className={`button`}
          onClick={() => {
            setTitle("");
            startTransition(async () => {
              setOptimisticTodos({ action: "add", title: title });
              await addTodoMutation.mutateAsync(title);
            });
          }}
        >
          Add
        </button>
      </div>
      <div>
        {optimisiticTodos.map((i: string, index: number) => (
          <div key={index} className="w-full flex justify-between">
            <p>{i}</p>
            <button
              className="text-blue-500 hover:underline underline-offset-4"
              onClick={() => {
                startTransition(async () => {
                  setOptimisticTodos({ action: "delete", index: index });
                  await deleteTodoMutation.mutateAsync(index);
                });
              }}
            >
              remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
