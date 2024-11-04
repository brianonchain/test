import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/db/dbConnect";
import TodoModel from "@/db/TodoModel";

export async function POST(request: NextRequest) {
  const { index } = await request.json();
  await dbConnect();

  try {
    await TodoModel.findOneAndUpdate({ user: "brianonchain" }, { $unset: { [`todos.${index}`]: 1 } });
    await TodoModel.findOneAndUpdate({ user: "brianonchain" }, { $pull: { todos: null } });
    return NextResponse.json("success");
  } catch (e) {
    console.log(e);
    return NextResponse.json("error");
  }
}
