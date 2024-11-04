import dbConnect from "@/db/dbConnect";
import TodoModel from "@/db/TodoModel";

export async function POST(req: Request) {
  console.log("entered getTodos");
  const { username } = await req.json();
  await dbConnect();

  try {
    var { todos } = await TodoModel.findOne({ user: username });
    return Response.json(todos);
  } catch (e) {
    console.log(e);
    return Response.json("error");
  }
}
