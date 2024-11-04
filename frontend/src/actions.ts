"use server";
// nextjs
import { cookies } from "next/headers";
import { revalidatePath, revalidateTag } from "next/cache";
// db
import dbConnect from "@/db/dbConnect";
import TodoModel from "@/db/TodoModel";

export async function setCookie(color: string) {
  (await cookies()).set("color", color);

  revalidatePath("/cookies");
}

export async function createTodoAction() {
  console.log("createTodoAction executed");
  await dbConnect();
  await TodoModel.create({ user: "brianonchain", todos: [] });
}

export async function mutateTodoAction({ action, title, index }: { action: string; title?: string; index?: number }) {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    // throw new Error("error");

    await dbConnect();
    if (title && action === "add") {
      await TodoModel.findOneAndUpdate({ user: "brianonchain" }, { $push: { todos: title } });
    }

    if (typeof index === "number" && action === "delete") {
      await TodoModel.findOneAndUpdate({ user: "brianonchain" }, { $unset: { [`todos.${index}`]: 1 } });
      await TodoModel.findOneAndUpdate({ user: "brianonchain" }, { $pull: { todos: null } });
    }
  } catch (e) {
    console.log(e);
  } finally {
    console.log("path revalidated");
    // revalidateTag("todos");
    revalidatePath("/todo/nextjs");
  }
}
