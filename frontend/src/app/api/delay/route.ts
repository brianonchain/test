export async function POST(req: Request) {
  console.log("entered delay2s api");
  const { user } = await req.json();
  console.log(user);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return Response.json("success");
}
