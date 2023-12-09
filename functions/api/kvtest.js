export async function onRequest(context) {
    const task = await context.env.TODO_LIST.get("test");
    return new Response(task);
  }export async function onRequest(context) {
  const task = await context.env.TODO_LIST.get("test");
  return new Response(task);
}
