"use client";
// next
import { useState, useEffect, useOptimistic, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
// actions
import { setCookie, createTodoAction, mutateTodoAction, setUsernameCookieAction } from "@/actions";

export default function Client1({ todos }: { todos: string[] }) {
  // time
  const date = new Date();
  const time = date.toLocaleTimeString("en-US", { hour12: false }) + `.${date.getMilliseconds()}`;

  // set username cookie if none
  useEffect(() => {
    const username = getCookie("username");
    if (!username) {
      setUsernameCookieAction("brianonchain");
    }
  }, []);

  // states
  const [title, setTitle] = useState("");
  const [todosState, setTodosState] = useState(todos);

  // useOptimistic
  const [optimisiticTodos, mutateOptimisticTodos] = useOptimistic(todos, (state, { action, title, index }: { action: string; title?: string; index?: number }) => {
    if (title && action === "add") return [...state, title];
    if (typeof index === "number" && action === "delete") return state.filter((i, localIndex) => index != localIndex);
    return state; // this is needed as something needs to be returned
  });

  // hooks
  const [isPending, startTransition] = useTransition();

  // console.log
  console.log("/todo/nextjs Client1.tsx", time, "todos:", todos);

  // functions
  const addTodo = (title: string) => {
    if (title) {
      // time
      const date = new Date();
      const time = date.toLocaleTimeString("en-US", { hour12: false }) + `.${date.getMilliseconds()}`;
      console.log("addTodo", time);

      setTitle("");
      startTransition(async () => {
        mutateOptimisticTodos({ action: "add", title: title });
        await mutateTodoAction({ action: "add", title: title });
      });
    }
  };

  const deleteTodo = (index: number) => {
    startTransition(async () => {
      mutateOptimisticTodos({ action: "delete", index: index });
      mutateTodoAction({ action: "delete", index: index });
    });
  };

  return (
    <div className="componentContainer">
      <p>Client 1</p>
      {/* <button className="button" onClick={() => createTodoAction()}>
        Create User
      </button> */}
      <div className="flex gap-4 items-center">
        <input autoComplete="off" className="input" onChange={(e) => setTitle(e.currentTarget.value)} value={title} />
        <button className={`button`} onClick={() => addTodo(title)}>
          Add
        </button>
      </div>
      <div>
        {optimisiticTodos.map((i, index) => (
          <div key={index} className="w-full flex justify-between">
            <p>{i}</p>
            <button className="text-blue-500 hover:underline underline-offset-4" onClick={() => deleteTodo(index)}>
              remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
