const ACCESS_CODES = ["YUKI", "CLUB", "GAMEON", "NIGHTSHIFT"];
const upstream = "https://yukios.netlify.app";
const games = [
  { name: "Angry Birds Chrome", type: "Arcade", category: "arcade", color: "pink", glyph: "◈", route: "/static/games/angryBirdsChrome.html", localRoute: "games/angrybirds-chrome/index.html", icon: "angryBirdsChrome.webp" },
  { name: "Angry Birds Online", type: "Arcade", category: "arcade", color: "orange", glyph: "↯", route: "/static/games/angryBirdsOnline.html", icon: "angryBirds.webp" },
  { name: "Flashpoint Archive", type: "Quick play", category: "quick", color: "blue", glyph: "↗", route: "/static/flashpointarchive.html", localRoute: "games/flashpointarchive.html", icon: "flash.webp" },
  { name: "The Binding of Isaac", type: "Arcade", category: "arcade", color: "yellow", glyph: "!", route: "/static/isaacRebirth.html", localRoute: "games/isaacRebirth.html", icon: "isaac.webp" },
  { name: "Minecraft / Eaglercraft", type: "Sandbox", category: "arcade", color: "green", glyph: "▦", route: "/static/games/minecraft/index.html", localRoute: "games/minecraft/index.html", icon: "breakTheWorm.webp" },
  { name: "Stardew Valley", type: "Sandbox", category: "quick", color: "purple", glyph: "✦", route: "/static/apps/stardew.html", localRoute: "https://cdn.jsdelivr.net/gh/Reeyuki/yukios-games@main/html/stardew.html", source: "https://github.com/Reeyuki/yukios-games/tree/main/html", icon: "stardew.webp" },
  { name: "Purple Place", type: "Quick play", category: "quick", color: "pink", glyph: "◆", route: "https://khang-nd.github.io/Comfy-Cakes", localRoute: "https://khang-nd.github.io/Comfy-Cakes", source: "https://github.com/khang-nd/Comfy-Cakes", icon: "purplePlace.webp" },
  { name: "Tetris", type: "Quick play", category: "quick", color: "blue", glyph: "▦", route: "https://turbowarp.org/embed.html?autoplay#31651654", localRoute: "https://turbowarp.org/embed.html?autoplay#31651654", source: "https://turbowarp.org/31651654", icon: "tetris.webp" },
  { name: "Mario", type: "Arcade", category: "arcade", color: "red", glyph: "M", route: "https://emupedia.net/emupedia-game-mario", localRoute: "https://emupedia.net/emupedia-game-mario", source: "https://emupedia.net/emupedia-game-mario", icon: "mario.webp" },
  { name: "Pac-Man", type: "Quick play", category: "quick", color: "yellow", glyph: "◐", route: "https://pacman-e281c.firebaseapp.com", localRoute: "https://pacman-e281c.firebaseapp.com", source: "https://pacman-e281c.firebaseapp.com", icon: "pac-man.webp" },
  { name: "Balatro", type: "Quick play", category: "quick", color: "green", glyph: "♠", route: "https://cdn.jsdelivr.net/gh/reeyuki/yukios-games@main/gnmath/balatro/balatro.html", localRoute: "https://cdn.jsdelivr.net/gh/reeyuki/yukios-games@main/gnmath/balatro/balatro.html", source: "https://github.com/Reeyuki/yukios-games/tree/main/gnmath/balatro", icon: "balatro.webp" },
  { name: "Undertale Sans Fight", type: "Arcade", category: "arcade", color: "purple", glyph: "☠", route: "https://cdn.jsdelivr.net/gh/reeyuki/yukios-games@main/gnmath/bts.html", localRoute: "https://cdn.jsdelivr.net/gh/reeyuki/yukios-games@main/gnmath/bts.html", source: "https://github.com/Reeyuki/yukios-games/tree/main/gnmath", icon: "undertale.webp" },
  { name: "Regular Show", type: "Flashpoint", category: "arcade", color: "blue", glyph: "✦", route: "/static/flashpointarchive.html?fpGameName=fistPunch", localRoute: "games/flashpointarchive.html?fpGameName=fistPunch", icon: "fistpunch.webp" },
  { name: "Break The Worm", type: "Flashpoint", category: "quick", color: "orange", glyph: "↯", route: "/static/flashpointarchive.html?fpGameName=breakTheWorm", localRoute: "games/flashpointarchive.html?fpGameName=breakTheWorm", icon: "breakTheWorm.webp" },
  { name: "Cuphead", type: "Arcade", category: "arcade", color: "pink", glyph: "●", route: "https://cdn.jsdelivr.net/gh/reeyuki/yukios-games@main/html/cuphead.html", localRoute: "https://cdn.jsdelivr.net/gh/reeyuki/yukios-games@main/html/cuphead.html", source: "https://github.com/Reeyuki/yukios-games/tree/main/html", icon: "cuphead.png" }
  ,{ name: "Fez", type: "Puzzle", category: "arcade", color: "purple", glyph: "◇", route: "https://cdn.jsdelivr.net/gh/reeyuki/yukios-games@main/html/fez.html", localRoute: "https://cdn.jsdelivr.net/gh/reeyuki/yukios-games@main/html/fez.html", source: "https://github.com/Reeyuki/yukios-games/tree/main/html", icon: "fez.webp" }
  ,{ name: "Helltaker", type: "Quick play", category: "quick", color: "red", glyph: "♥", route: "https://cdn.jsdelivr.net/gh/reeyuki/yukios-games@main/wasm/helltaker/index.html", localRoute: "https://cdn.jsdelivr.net/gh/reeyuki/yukios-games@main/wasm/helltaker/index.html", source: "https://github.com/Reeyuki/yukios-games/tree/main/wasm/helltaker", icon: "helltaker.webp" }
  ,{ name: "Among Us", type: "Arcade", category: "arcade", color: "orange", glyph: "●", route: "https://cdn.jsdelivr.net/gh/reeyuki/yukios-games@main/wasm/amongUs/index.html", localRoute: "https://cdn.jsdelivr.net/gh/reeyuki/yukios-games@main/wasm/amongUs/index.html", source: "https://github.com/Reeyuki/yukios-games/tree/main/wasm/amongUs", icon: "amongUs.webp" }
  ,{ name: "Terraria", type: "Sandbox", category: "arcade", color: "green", glyph: "▦", route: "https://cdn.jsdelivr.net/gh/reeyuki/yukios-games@main/html/terraria.html", localRoute: "https://cdn.jsdelivr.net/gh/reeyuki/yukios-games@main/html/terraria.html", source: "https://github.com/Reeyuki/yukios-games/tree/main/html", icon: "ter.webp" }
];
const unlockedSites = [
  { name: "Club site 01", description: "Link coming soon", url: "" },
  { name: "Club site 02", description: "Link coming soon", url: "" },
  { name: "Club site 03", description: "Link coming soon", url: "" },
  { name: "Club site 04", description: "Link coming soon", url: "" }
];
const $ = (selector) => document.querySelector(selector);
const gate = $("#gate");
const desktop = $("#desktop");
const form = $("#access-form");
const input = $("#access-code");
const message = $("#gate-message");
let currentFilter = "all";
let userGames = [];
let libraryReady;

function openLibrary() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("yuki-club-library", 1);
    request.onupgradeneeded = () => request.result.createObjectStore("games", { keyPath: "id" });
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
async function loadUserGames() {
  try {
    const database = await libraryReady;
    userGames = await new Promise((resolve, reject) => { const request = database.transaction("games", "readonly").objectStore("games").getAll(); request.onsuccess = () => resolve(request.result); request.onerror = () => reject(request.error); });
    userGames.forEach((game) => { game.localRoute = URL.createObjectURL(game.file); game.user = true; });
  } catch (error) { console.warn("Local library unavailable", error); userGames = []; }
}
function saveUserGame(file) {
  const id = `${file.name}-${file.size}-${file.lastModified}`;
  return libraryReady.then((database) => new Promise((resolve, reject) => { const request = database.transaction("games", "readwrite").objectStore("games").put({ id, name: file.name.replace(/\.html?$/i, ""), type: "Your game", category: "quick", color: "blue", glyph: "<>", file }); request.onsuccess = resolve; request.onerror = () => reject(request.error); }));
}
async function importGames(fileList, folderMode = false) {
  const files = [...fileList].filter((file) => /\.html?$/i.test(file.name) && (!folderMode || /(^|\/)index\.html?$/i.test(file.webkitRelativePath || file.name)));
  if (!files.length) return;
  await Promise.all(files.map(saveUserGame));
  await loadUserGames();
  renderGames();
}
function removeUserGame(id) {
  const database = libraryReady;
  database.then((db) => new Promise((resolve, reject) => { const request = db.transaction("games", "readwrite").objectStore("games").delete(id); request.onsuccess = resolve; request.onerror = () => reject(request.error); })).then(async () => { await loadUserGames(); renderGames(); });
}

function unlock() { gate.classList.add("hidden"); desktop.classList.remove("hidden"); renderGames(); updateClock(); setInterval(updateClock, 30000); }
function lock() { desktop.classList.add("hidden"); gate.classList.remove("hidden"); input.value = ""; input.focus(); closeMenu(); closeGame(); closeSteam(); closeSites(); }
function updateClock() { $("#clock").textContent = new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date()); }
function renderGames() {
  const search = $("#game-search").value.toLowerCase().trim();
  const library = [...games, ...userGames];
  const filtered = library.filter((game) => (currentFilter === "all" || game.category === currentFilter) && game.name.toLowerCase().includes(search));
  $("#game-count").textContent = `${String(filtered.length).padStart(2, "0")} TITLES`;
  $("#steam-count").textContent = library.length;
  const cards = filtered.length ? filtered.map((game, index) => { const artwork = game.user ? "" : `background-image:linear-gradient(135deg,rgba(0,0,0,.08),rgba(0,0,0,.38)),url('https://raw.githubusercontent.com/Reeyuki/YukiOS/main/static/icons/${game.icon}')`; const remove = game.user ? `<button class="remove-game" data-remove-game="${game.id}" aria-label="Remove ${game.name}">×</button>` : ""; return `<article class="game-card" style="animation-delay:${index * 55}ms"><div class="game-art art-${game.color}" style="${artwork}"><span>${game.glyph}</span></div><div class="game-info"><div><strong>${game.name}</strong><small>${game.type.toUpperCase()} · ${game.user ? "LOCAL" : "YUKIOS"}</small></div><div class="game-actions"><button class="play-button" data-game="${game.name}" aria-label="Play ${game.name}">↗</button>${remove}</div></div></article>`; }).join("") : `<p class="form-message">No games found on this shelf.</p>`;
  $("#game-grid").innerHTML = cards;
  $("#steam-grid").innerHTML = cards;
  document.querySelectorAll("[data-game]").forEach((button) => button.addEventListener("click", () => openGame(button.dataset.game)));
  document.querySelectorAll("[data-remove-game]").forEach((button) => button.addEventListener("click", () => removeUserGame(button.dataset.removeGame)));
}
function openSteam() { closeMenu(); renderGames(); $("#steam-window").classList.remove("hidden"); }
function closeSteam() { $("#steam-window").classList.add("hidden"); }
function openSites() { closeMenu(); $("#sites-window").classList.remove("hidden"); renderSites(); }
function closeSites() { $("#sites-window").classList.add("hidden"); }
function renderSites() { $("#sites-grid").innerHTML = unlockedSites.map((site, index) => site.url ? `<a class="site-tile" href="${site.url}" target="_blank" rel="noopener"><span class="site-number">0${index + 1}</span><strong>${site.name}</strong><small>${site.description}</small><b>↗</b></a>` : `<div class="site-tile pending"><span class="site-number">0${index + 1}</span><strong>${site.name}</strong><small>${site.description}</small><b>···</b></div>`).join(""); }
function openGame(name) {
  const game = [...games, ...userGames].find((item) => item.name === name);
  if (!game) return;
  $("#window-title").textContent = game.name;
  const gameUrl = game.localRoute || upstream + game.route;
  const openGameTab = () => window.open(gameUrl, "_blank", "noopener");
  $("#open-game-tab").onclick = openGameTab;
  $("#fallback-game-tab").onclick = openGameTab;
  $("#open-source").onclick = () => window.open(game.user ? "about:blank" : game.source || `https://github.com/Reeyuki/YukiOS/blob/main${game.route}`, "_blank", "noopener");
  const frame = $("#game-frame"); frame.classList.add("loading"); $("#game-fallback").classList.add("hidden"); $("#game-loader").textContent = game.user ? "Loading local game..." : "Loading game..."; frame.src = gameUrl;
  frame.onload = () => frame.classList.remove("loading"); frame.onerror = () => { frame.classList.add("loading"); $("#game-loader").classList.add("hidden"); $("#game-fallback").classList.remove("hidden"); }; $("#game-window").classList.remove("hidden");
}
function closeGame() { $("#game-window").classList.add("hidden"); $("#game-frame").src = "about:blank"; }
function closeMenu() { $("#system-menu").classList.add("hidden"); }
const CHAT_WORKER_URL = "https://yuki-club-chat.gx8nz7qrdr.workers.dev/chat/general";
const CHAT_DB_KEY = "yuki-chat-local-messages";
const CHAT_NAME_KEY = "yuki-chat-display-name";
const CHAT_WINDOW_DAYS = 30;
const chatChannel = "BroadcastChannel" in window ? new BroadcastChannel("yuki-chat") : null;
let chatMessages = [];
let chatMembers = [];
let cloudflareChat = false;
let chatSocket;

function cleanChatText(value) { return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]); }
function chatInitial(name) { return (name || "?").trim().charAt(0).toUpperCase() || "?"; }
function chatCutoff() { return Date.now() - CHAT_WINDOW_DAYS * 24 * 60 * 60 * 1000; }
function readLocalMessages() { try { return JSON.parse(localStorage.getItem(CHAT_DB_KEY) || "[]").filter((message) => message.createdAt >= chatCutoff()); } catch (error) { return []; } }
function writeLocalMessages() { localStorage.setItem(CHAT_DB_KEY, JSON.stringify(chatMessages.filter((message) => message.createdAt >= chatCutoff()).slice(-200))); }
function renderChat() {
  const messages = chatMessages.filter((message) => message.createdAt >= chatCutoff()).sort((left, right) => left.createdAt - right.createdAt);
  $("#chat-messages").innerHTML = messages.length ? messages.map((message) => `<article class="chat-message"><span class="message-avatar">${cleanChatText(chatInitial(message.name))}</span><div><div class="message-meta"><strong>${cleanChatText(message.name)}</strong><time>${new Date(message.createdAt).toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}</time></div><div class="message-text">${cleanChatText(message.text)}</div></div></article>`).join("") : `<div class="chat-empty">No messages yet.<br />Start the conversation.</div>`;
  const messageBox = $("#chat-messages"); messageBox.scrollTop = messageBox.scrollHeight;
  $("#member-list").innerHTML = chatMembers.map((member) => `<div class="member"><span class="user-avatar">${cleanChatText(chatInitial(member.name))}</span><strong>${cleanChatText(member.name)}</strong><i class="online-dot"></i></div>`).join("");
  const count = chatMembers.length || 1; $("#chat-member-count").textContent = `${count} online`; $("#member-title-count").textContent = count;
}
function addChatMessage(message, broadcast = false) { if (!message.text || message.createdAt < chatCutoff()) return; chatMessages = [...chatMessages.filter((item) => item.id !== message.id), message].slice(-200); if (!cloudflareChat) writeLocalMessages(); if (broadcast && chatChannel) chatChannel.postMessage(message); renderChat(); }
function cloudflareConfigured() { return !CHAT_WORKER_URL.startsWith("PASTE_"); }
function setupChatBackend() {
  chatMessages = readLocalMessages();
  chatMembers = [{ name: localStorage.getItem(CHAT_NAME_KEY) || "Guest" }];
  if (!cloudflareConfigured()) { if (chatChannel) chatChannel.onmessage = (event) => addChatMessage(event.data); return; }
  fetch(CHAT_WORKER_URL).then((response) => response.ok ? response.json() : Promise.reject(new Error("Chat history request failed"))).then((data) => { chatMessages = [...chatMessages, ...(data.messages || [])].filter((message, index, messages) => message.createdAt >= chatCutoff() && messages.findIndex((item) => item.id === message.id) === index).slice(-200); renderChat(); }).catch(() => {});
  chatSocket = new WebSocket(CHAT_WORKER_URL.replace(/^http/, "ws"));
  chatSocket.addEventListener("open", () => { cloudflareChat = true; $("#chat-connection").textContent = "LIVE"; chatSocket.send(JSON.stringify({ type: "presence", name: localStorage.getItem(CHAT_NAME_KEY) || "Guest" })); });
  chatSocket.addEventListener("message", (event) => { const payload = JSON.parse(event.data); if (payload.type === "history") { chatMessages = [...chatMessages, ...(payload.messages || [])].filter((message, index, messages) => message.createdAt >= chatCutoff() && messages.findIndex((item) => item.id === message.id) === index).slice(-200); renderChat(); } if (payload.type === "message") addChatMessage(payload.message); });
  chatSocket.addEventListener("close", () => { cloudflareChat = false; $("#chat-connection").textContent = "LOCAL"; });
}
function sendChatMessage(text) {
  const name = localStorage.getItem(CHAT_NAME_KEY) || "Guest";
  const message = { id: `${Date.now()}-${Math.random().toString(36).slice(2)}`, name, text: text.trim(), createdAt: Date.now() };
  if (!message.text) return;
  addChatMessage(message, !cloudflareChat);
  if (cloudflareChat && chatSocket?.readyState === WebSocket.OPEN) {
    chatSocket.send(JSON.stringify({ type: "message", message }));
  }
}
function openChat() { closeMenu(); const savedName = localStorage.getItem(CHAT_NAME_KEY); if (!savedName) { $("#name-modal").classList.remove("hidden"); $("#name-input").focus(); return; } $("#chat-window").classList.remove("hidden"); $("#chat-user-name").textContent = savedName; $("#chat-user-avatar").textContent = chatInitial(savedName); renderChat(); }
function setChatName(name) { const cleanName = name.trim().slice(0, 24); if (!cleanName) return; localStorage.setItem(CHAT_NAME_KEY, cleanName); $("#name-modal").classList.add("hidden"); $("#chat-user-name").textContent = cleanName; $("#chat-user-avatar").textContent = chatInitial(cleanName); if (!cloudflareChat) chatMembers = [{ name: cleanName }]; openChat(); renderChat(); }
function closeChat() { $("#chat-window").classList.add("hidden"); }
form.addEventListener("submit", (event) => { event.preventDefault(); if (ACCESS_CODES.includes(input.value.trim().toUpperCase())) { message.textContent = "Access granted. Welcome to the club."; unlock(); } else { message.textContent = "That code did not work. Try again."; message.classList.add("error"); input.select(); } });
libraryReady = openLibrary();
loadUserGames().then(renderGames);
setupChatBackend();
$("#html-import").addEventListener("change", (event) => importGames(event.target.files));
$("#folder-import").addEventListener("change", (event) => importGames(event.target.files, true));
$("#game-search").addEventListener("input", renderGames);
document.querySelectorAll(".filter").forEach((button) => button.addEventListener("click", () => { currentFilter = button.dataset.filter; document.querySelectorAll(".filter").forEach((item) => item.classList.toggle("active", item === button)); renderGames(); }));
$("#apple-menu").addEventListener("click", () => $("#system-menu").classList.toggle("hidden"));
$("#chat-app").addEventListener("click", openChat); $("#close-chat").addEventListener("click", closeChat); $("#name-form").addEventListener("submit", (event) => { event.preventDefault(); setChatName($("#name-input").value); }); $("#chat-change-name").addEventListener("click", () => { $("#name-input").value = localStorage.getItem(CHAT_NAME_KEY) || ""; $("#name-modal").classList.remove("hidden"); $("#name-input").focus(); }); $("#chat-form").addEventListener("submit", (event) => { event.preventDefault(); sendChatMessage($("#chat-input").value); $("#chat-input").value = ""; });
$("#steam-app").addEventListener("click", openSteam); $("#games-folder").addEventListener("click", openSteam); $("#sites-app").addEventListener("click", openSites); $("#notes-app").addEventListener("dblclick", () => alert("club_notes.txt\\n\\nbring snacks\\nno spoilers\\nloser picks next game")); $("#close-steam").addEventListener("click", closeSteam); $("#close-sites").addEventListener("click", closeSites);
$("#menu-lock").addEventListener("click", lock); $("#menu-exit").addEventListener("click", lock); $("#lock-button").addEventListener("click", lock); $("#close-game").addEventListener("click", closeGame);
document.querySelectorAll(".dock-icon").forEach((button) => button.addEventListener("click", () => { const action = button.dataset.action; if (action === "lock") lock(); if (action === "search") { $("#game-search").focus(); $("#game-search").scrollIntoView({ behavior: "smooth", block: "center" }); } if (action === "activity") window.scrollTo({ top: 0, behavior: "smooth" }); }));
document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeGame(); closeMenu(); closeSteam(); closeSites(); closeChat(); $("#name-modal").classList.add("hidden"); } });
