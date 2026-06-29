export default async (request, context) => {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const API_KEY = process.env.VITE_GEMINI_API_KEY || process.env.SHOPAIKEY_API_KEY;

  try {
    const payload = await request.json();
    
    // Yêu cầu luồng stream từ shopaikey
    payload.stream = true;

    const response = await fetch("https://api.shopaikey.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify(payload)
    });

    // Trả thẳng luồng (Stream) về cho trình duyệt
    return new Response(response.body, {
      status: response.status,
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

export const config = {
  path: "/.netlify/functions/chat"
};
