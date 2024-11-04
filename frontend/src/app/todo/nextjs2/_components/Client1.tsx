"use client";
import { useState } from "react";

export default function Client1() {
  const [title, setTitle] = useState("");

  console.log("/todo/nextjs2 Client1.tsx", "todos:");

  const addTodo = (title: string) => {};
  const deleteTodo = (index: number) => {};

  return (
    <div className="componentContainer">
      <p>Client 1</p>
      <div className="flex gap-4 items-center">
        <input autoComplete="off" className="input" onChange={(e) => setTitle(e.currentTarget.value)} value={title} />
        <button className={`button`} onClick={() => addTodo(title)}>
          Add
        </button>
      </div>
      <div>
        {["asdfds", "asdfs"].map((i, index) => (
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
