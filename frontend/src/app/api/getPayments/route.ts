import dbConnect from "@/db/dbConnect";
import TodoModel from "@/db/TodoModel";

export async function POST(req: Request) {
  console.log("/api/getPayments");
  const { idToken, publicKey } = await req.json();

  await dbConnect();

  try {
    var { todos } = await TodoModel.findOne({ user: idToken });
    return Response.json(todos);
  } catch (e) {
    console.log(e);
    return Response.json("error");
  }
}
