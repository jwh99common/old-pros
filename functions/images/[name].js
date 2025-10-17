export async function onRequest(context) {
  const keys = Object.keys(context.env);
  const isBound = typeof context.env.image_assets?.get === "function";

  return new Response(JSON.stringify({
    imageName: context.params.name,
    envKeys: keys,
    r2Available: isBound
  }), {
    headers: { "Content-Type": "application/json" }
  });
}
