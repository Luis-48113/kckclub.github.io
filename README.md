# Yuki Club OS

A small members-only game room inspired by YukiOS. This is a static front end with a casual client-side access gate and a launcher for selected games from [Reeyuki/YukiOS](https://github.com/Reeyuki/YukiOS).

## Run

Serve the folder with any static web server, then open the local URL. For example, run `python3 -m http.server 4173` from the project folder and visit `http://localhost:4173`. The demo access code is `YUKI`; change `ACCESS_CODE` in `app.js` before sharing.

The home screen includes Minecraft / Eaglercraft, Angry Birds, Flashpoint Archive, The Binding of Isaac, Stardew Valley, Purple Place, Tetris, Fez, Helltaker, Among Us, Terraria, Mario, Pac-Man, Balatro, Undertale, Regular Show, Break The Worm, and Cuphead. The launcher, Minecraft selector, Angry Birds Chrome runtime, Flashpoint player, and Isaac HTML entry are local. Large game engines/data for some titles still load from their original public hosts or jsDelivr; the game windows remain inside the Yuki OS shell.

The gate accepts `YUKI`, `CLUB`, `GAMEON`, or `NIGHTSHIFT`. These are casual front-end gates, not real authentication.

The gate is not real authentication. Anyone who can inspect the page can find the code.

## Unlocked sites

The desktop includes an **Unlocked Sites** app with four placeholder slots. Add URLs later in the `unlockedSites` array in `app.js`; each populated URL becomes a link in the launcher.

## Yuki Chat setup

Yuki Chat works immediately as a same-browser demo. To enable realtime chat between members, create a Firebase project with Realtime Database, paste its web config into `FIREBASE_CONFIG` in `app.js`, and publish `firebase.rules.json` as the database rules. The client only displays messages from the last 30 days; a scheduled Firebase cleanup job is still needed to physically delete older records from the database.

## Personal games and wallpaper

Open **Steam (but funnier)** and use **Add HTML game** to import any `.html` file, or **Add game folder** to import the folder's `index.html`. Games are saved only in that browser's IndexedDB and can be removed from the library with `x`. The YukiOS desktop uses `assets/916265-free-mac-os-x-desktop-backgrounds-1920x1200-retina.webp` as its wallpaper.