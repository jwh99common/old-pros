export async function onRequestGet(context) {
  return new Response(JSON.stringify({
    message: "Hello from old-pros!",
    timestamp: new Date().toISOString()
  }), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
