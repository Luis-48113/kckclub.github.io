const MAX_MESSAGE_LENGTH = 500;
const MAX_NAME_LENGTH = 24;
const RETENTION_MS = 30 * 24 * 60 * 60 * 1000;

export default {
  async fetch(request, env) {
    const origin = env.ALLOWED_ORIGIN || "*";
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(origin) });
    }

    const url = new URL(request.url);
    if (url.pathname !== "/chat/general") {
      return json({ ok: true, service: "yuki-club-chat" }, 200, origin);
    }

    const room = env.CHAT_ROOMS.idFromName("general");
    return env.CHAT_ROOMS.get(room).fetch(request);
  }
};

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
  };
}
function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(origin) }
  });
}

export class ChatRoom {
  constructor(state) {
    this.state = state;
    this.sessions = new Set();
  }

  async fetch(request) {
    const origin = request.headers.get("Origin") || "*";
    if (request.method === "OPTIONS") return new Response(null, { headers: corsHeaders(origin) });
    if (request.headers.get("Upgrade")?.toLowerCase() === "websocket") return this.connect(request, origin);
    if (request.method === "GET") return json({ messages: await this.recentMessages() }, 200, origin);
    if (request.method === "POST") {
      let body;
      try { body = await request.json(); } catch { return json({ error: "Invalid JSON" }, 400, origin); }
      const message = this.validateMessage(body);
      if (!message) return json({ error: "Invalid message" }, 400, origin);
      await this.saveMessage(message);
      this.broadcast({ type: "message", message });
      return json(message, 201, origin);
    }
    return json({ error: "Method not allowed" }, 405, origin);
  }

  async connect(request, origin) {
    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);
    server.accept();
    this.sessions.add(server);
    server.addEventListener("close", () => this.sessions.delete(server));
    server.addEventListener("error", () => this.sessions.delete(server));
    server.send(JSON.stringify({ type: "history", messages: await this.recentMessages() }));
    server.addEventListener("message", async (event) => {
      try {
        const payload = JSON.parse(event.data);
        if (payload.type === "presence") this.broadcast({ type: "presence", name: String(payload.name || "Guest").slice(0, MAX_NAME_LENGTH) });
        if (payload.type === "message") {
          const message = this.validateMessage(payload.message);
          if (!message) return;
          await this.saveMessage(message);
          this.broadcast({ type: "message", message });
        }
      } catch { /* Ignore malformed client messages. */ }
    });
    return new Response(null, { status: 101, webSocket: client, headers: corsHeaders(origin) });
  }

  validateMessage(body) {
    const name = String(body?.name || "").trim().slice(0, MAX_NAME_LENGTH);
    const text = String(body?.text || "").trim().slice(0, MAX_MESSAGE_LENGTH);
    const createdAt = Number(body?.createdAt);
    if (!name || !text || !Number.isFinite(createdAt) || Math.abs(Date.now() - createdAt) > 5 * 60 * 1000) return null;
    return { id: body.id || crypto.randomUUID(), name, text, createdAt };
  }

  async recentMessages() {
    const messages = (await this.state.storage.get("messages")) || [];
    return messages.filter((message) => message.createdAt >= Date.now() - RETENTION_MS);
  }

  async saveMessage(message) {
    const messages = [...await this.recentMessages(), message].slice(-200);
    await this.state.storage.put("messages", messages);
    await this.state.storage.setAlarm(Date.now() + RETENTION_MS);
  }

  broadcast(payload) {
    const encoded = JSON.stringify(payload);
    for (const session of this.sessions) {
      try { session.send(encoded); } catch { this.sessions.delete(session); }
    }
  }

  async alarm() {
    const messages = await this.recentMessages();
    await this.state.storage.put("messages", messages);
    if (messages.length) await this.state.storage.setAlarm(Math.min(...messages.map((message) => message.createdAt)) + RETENTION_MS);
    else await this.state.storage.delete("messages");
  }
}
