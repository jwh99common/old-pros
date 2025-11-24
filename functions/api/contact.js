export async function onRequest(context) {
  const db = context.env.gallery_db;
  const method = context.request.method;

  if (method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  // Parse form data (modal sends FormData)
  const data = await context.request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const phone = data.get("phone");
  const note = data.get("note");
  const type = data.get("type"); // hidden field: professional/business

  // Basic validation
  if (!name || !email || !note) {
    return new Response("Missing required fields", { status: 400 });
  }

  // Insert into D1
  await db.prepare(`
    INSERT INTO old_pros_contacts (name, email, phone, note, type, status)
    VALUES (?, ?, ?, ?, ?, 'new')
  `).bind(name, email, phone, note, type).run();

  return new Response("Contact created", { status: 201 });
}
