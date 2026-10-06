// ============================================================
// Aaron Fernandes — Portfolio (arcade edition)
// ============================================================

const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

// Years of experience, counted from the first role (Feb 2019) so it never goes stale.
const CAREER_START = new Date(2019, 1, 1);
const years = Math.floor((Date.now() - CAREER_START) / (365.25 * 24 * 60 * 60 * 1000));
$$("[data-years]").forEach((el) => (el.textContent = years));
$$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

// ------------------------------------------------------------
// Projects — add a project by adding an entry here.
// `tags` drive the filter chips above the deck; FILTER_ORDER sets
// their order (any new tag you use is added to the end automatically).
// ------------------------------------------------------------
const FILTER_ORDER = ["Games", "Game Jam", "Tools", "Multiplayer", "Simulation", "Art", "Unity"];

const PROJECTS = [
  {
    id: "pixel-arena",
    tags: ["Games", "Multiplayer", "Unity"],
    title: "Pixel Arena",
    tag: "Playable in browser",
    meta: "Unity · C# · Netcode for GameObjects",
    thumb: { video: "assets/featured.mp4", start: 7, end: 44, poster: "assets/pixel-arena.png" },
    media: [{ label: "Gameplay", video: "assets/featured.mp4", start: 7, end: 44, crop: true }],
    body: [
      "A 1v1 multiplayer arena game built with Unity Netcode for GameObjects.",
      "Enter a name, host a match or join a friend's, and battle it out in a pixel-art arena.",
    ],
    stack: ["Unity", "C#", "Netcode for GameObjects", "WebGL"],
    links: [
      { label: "Play in browser", href: "https://doofindog.github.io/PixelArena/", primary: true },
      { label: "Source code", href: "https://github.com/doofindog/Pixel_Arena---Multiplyer-Game---Netcode-for-Gameobjects" },
    ],
  },
  {
    id: "to-make-this-moment-last",
    title: "To Make This Moment Last",
    tags: ["Games", "Game Jam", "Unity"],
    tag: "GMTK Game Jam 2026",
    meta: "Unity · WebGL · Story puzzle",
    thumb: { image: "assets/snap-cover.png" },
    media: [
      { label: "Shot 1", image: "assets/snap-1.jpg", alt: "First-person camera view of a girl under a street lamp and full moon, with a reference photo in the corner" },
      { label: "Shot 2", image: "assets/snap-2.jpg", alt: "Screenshot from To Make This Moment Last" },
      { label: "Shot 3", image: "assets/snap-3.jpg", alt: "Screenshot from To Make This Moment Last" },
      { label: "Shot 4", image: "assets/snap-4.jpg", alt: "Screenshot from To Make This Moment Last" },
    ],
    body: [
      "A short, story-rich first-person game made for GMTK Game Jam 2026. You and your cousin prepare for your grandma's operation: solve puzzles, find items and snap photos of perfect moments before they slip away.",
      "The jam theme was <strong>Count Down</strong>, which the team turned into a celebration of life: hide and seek, birthdays, New Year's Eve and the 3, 2, 1 before a photo.",
      "<strong>My role:</strong> programming, alongside Adrian Agren and maukii, in a team of nine.",
    ],
    stack: ["Unity", "C#", "WebGL", "Game jam", "Team of 9"],
    links: [
      { label: "Play on itch.io", href: "https://adrian-agren.itch.io/321-snap", primary: true },
      { label: "Jam entry", href: "https://itch.io/jam/gmtk-jam-2026/rate/4814252" },
    ],
  },
  {
    id: "pondwise",
    title: "Pondwise",
    tags: ["Games", "Game Jam", "Unity"],
    tag: "Comfy Jam: Summer 2026",
    meta: "Unity · WebGL · Puzzle",
    thumb: { image: "assets/pondwise-cover.png" },
    media: [
      { label: "Title", image: "assets/pondwise-1.jpg", alt: "Pondwise title screen: a frog peeking over a lily pad with a Play button" },
      { label: "Shot 2", image: "assets/pondwise-2.jpg", alt: "Screenshot from Pondwise" },
      { label: "Shot 3", image: "assets/pondwise-3.jpg", alt: "Screenshot from Pondwise" },
    ],
    body: [
      "A cozy pixel-art puzzle game made for Comfy Jam: Summer 2026. Every frog in the pond wants something different, and you rewrite the rulebook until they're all happy.",
      "Each frog checks the four tiles around it. Rules say who <strong>loves</strong> whom (must be next to them), who <strong>hates</strong> whom (can't be next to them) and who <strong>likes</strong> whom (can be, but doesn't have to be).",
      "<strong>My role:</strong> programming, alongside maukii, with art by pumpkin_mallow.",
    ],
    stack: ["Unity", "C#", "WebGL", "Game jam", "Puzzle"],
    links: [
      { label: "Play on itch.io", href: "https://maukii.itch.io/pondwise", primary: true },
      { label: "Jam entry", href: "https://itch.io/jam/comfy-jam-summer-2026/rate/4683406" },
    ],
  },
  {
    id: "turn-based-toolkit",
    tags: ["Tools", "Unity"],
    title: "Turn-Based Toolkit",
    tag: "In development",
    meta: "Unity · C# · Editor tooling",
    thumb: { video: "assets/toolkit-grid.mp4", start: 0, poster: "assets/toolkit-cover.png" },
    media: [
      { label: "World builder / grid", video: "assets/toolkit-grid.mp4" },
      { label: "Classes & stats", video: "assets/toolkit-classes.mp4" },
      { label: "Ability system", video: "assets/toolkit-abilities.mp4" },
    ],
    body: [
      "A Unity toolkit for tactical RPGs and strategy games. It covers everything needed for a working turn-based cycle, so you can get a game running without a complex setup.",
    ],
    features: [
      ["Grid system and world building", "Build grid-based worlds with custom tile sizes and layouts."],
      ["Factions and characters", "Define attributes, assign characters to factions and give them attacks, defense and special skills."],
      ["A* pathfinding", "Units find efficient routes to their targets."],
      ["Stats system", "Track health and other core stats and update them during play."],
      ["Utility AI", "Enemies weigh up attacking, defending or repositioning and pick the best move."],
    ],
    stack: ["Unity", "C#", "Editor tooling", "A*", "Utility AI"],
    links: [],
    note: "Release coming soon",
  },
  {
    id: "cellular-automata",
    tags: ["Simulation"],
    title: "Particle Cellular Automata",
    tag: "Simulation",
    meta: "C# · Cellular automata",
    thumb: { image: "assets/cellular-automata.jpg" },
    media: [{ label: "Sand and water", image: "assets/cellular-automata.jpg", alt: "Pixel-art sand and water simulation" }],
    body: ["A pixel-art falling-sand simulation where sand and water particles follow simple cellular-automata rules."],
    stack: ["C#", "Cellular automata", "Simulation"],
    links: [{ label: "Source code", href: "https://github.com/doofindog/Sand-Simulation---Cellular-Automata", primary: true }],
  },
  {
    id: "dialogue-system",
    tags: ["Tools", "Unity"],
    title: "Node-Based Dialogue System",
    tag: "Unity editor tool",
    meta: "Unity · C#",
    thumb: { image: "assets/dialogue-system.png" },
    media: [{ label: "Editor", image: "assets/dialogue-system.png", alt: "Dialogue nodes linked in a Unity editor window" }],
    body: ["A node-based editor for writing branching dialogue in story-based games. Dialogue nodes are created and linked visually inside a custom Unity editor window."],
    stack: ["Unity", "C#", "Editor tooling"],
    links: [{ label: "Source code", href: "https://github.com/doofindog/NodeDialogueSystem---Unity-Editor", primary: true }],
  },
  {
    id: "pixel-art",
    tags: ["Art"],
    title: "My Pixel Art",
    tag: "Coming soon",
    meta: "Pixel art",
    thumb: { image: "assets/pixel-art.png", badge: "assets/coming-soon.png" },
    media: [{ label: "Preview", image: "assets/pixel-art.png", alt: "Pixel-art scene of a bus in a blue forest" }],
    body: ["A gallery of my pixel art is on its way."],
    stack: ["Pixel art"],
    links: [],
    note: "Coming soon",
  },
];

// ------------------------------------------------------------
// Screens (hash router): #projects, #career, #about
// ------------------------------------------------------------
const screens = $$("[data-screen]");
const tabs = $$("[data-tab]");
let currentScreen = null;

function showScreen() {
  const name = location.hash.replace(/^#\/?/, "") || "projects";
  const target = screens.find((s) => s.dataset.screen === name) || screens[0];
  if (target === currentScreen) return;
  const first = currentScreen === null;
  currentScreen = target;
  screens.forEach((s) => (s.hidden = s !== target));
  tabs.forEach((t) => {
    if (t.dataset.tab === target.dataset.screen) t.setAttribute("aria-current", "page");
    else t.removeAttribute("aria-current");
  });
  if (!first) window.scrollTo({ top: 0, behavior: "instant" });
  document.dispatchEvent(new CustomEvent("screenchange", { detail: target.dataset.screen }));
}
addEventListener("hashchange", showScreen);
showScreen();

const onScreen = (name) => currentScreen && currentScreen.dataset.screen === name;

// ------------------------------------------------------------
// Toast + copy email
// ------------------------------------------------------------
const toastEl = $("[data-toast]");
let toastTimer;
function toast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("is-visible"), 2200);
}

const EMAIL = "admiralnoobdog@gmail.com";
$$("[data-copy-email]").forEach((btn) =>
  btn.addEventListener("click", () => {
    const fallback = () => {
      location.hash = "#about";
      requestAnimationFrame(() => {
        const addr = $(".email__address");
        const range = document.createRange();
        range.selectNodeContents(addr);
        getSelection().removeAllRanges();
        getSelection().addRange(range);
      });
      toast("Email selected: press Ctrl+C to copy");
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(EMAIL).then(() => toast("Email copied"), fallback);
    } else {
      fallback();
    }
  })
);

// ------------------------------------------------------------
// Project deck: 3D carousel with tag filters
// ------------------------------------------------------------
const deck = $("[data-deck]");
const stage = $("[data-stage]");
const dotsWrap = $("[data-dots]");
const announce = $("[data-announce]");
const filtersWrap = $("[data-filters]");

let filter = "All";
let visible = PROJECTS.map((_, i) => i); // project indices that match the filter
let pos = 0;                              // position of the active card within `visible`
const activeIndex = () => visible[pos];

function cardMarkup(p, i) {
  const t = p.thumb;
  const media = t.video
    ? `<video src="${t.video}${t.start ? `#t=${t.start}` : ""}" poster="${t.poster || ""}" muted loop playsinline preload="metadata" ${t.start ? `data-start="${t.start}"` : ""} ${t.end ? `data-end="${t.end}"` : ""}></video>`
    : `<img src="${t.image}" alt="" loading="lazy">`;
  const badge = t.badge ? `<img class="card__badge" src="${t.badge}" alt="">` : "";
  return `
    <button class="card" type="button" data-index="${i}" aria-roledescription="slide" aria-label="${p.title}">
      <span class="card__inner">
        <span class="card__thumb">${media}${badge}</span>
        <span class="card__body">
          <span class="card__tag">${p.tag}</span>
          <span class="card__title">${p.title}</span>
          <span class="card__meta">${p.meta}</span>
          <span class="card__tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</span>
          <span class="card__cta">View project →</span>
        </span>
        <span class="card__shine"></span>
      </span>
    </button>`;
}

stage.innerHTML = PROJECTS.map(cardMarkup).join("");
const cards = $$(".card", stage);

// ---- Filter chips ----
const allTags = [...new Set(PROJECTS.flatMap((p) => p.tags))].sort((a, b) => {
  const ia = FILTER_ORDER.indexOf(a);
  const ib = FILTER_ORDER.indexOf(b);
  return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
});
const filterButtons = ["All", ...allTags].map((tag) => {
  const n = tag === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.tags.includes(tag)).length;
  const b = document.createElement("button");
  b.type = "button";
  b.className = "filter";
  b.dataset.filter = tag;
  b.setAttribute("aria-pressed", String(tag === filter));
  b.innerHTML = `${tag}<span class="filter__count">${n}</span>`;
  b.addEventListener("click", () => setFilter(tag));
  filtersWrap.append(b);
  return b;
});

function setFilter(tag) {
  if (tag === filter) return;
  filter = tag;
  const current = activeIndex();
  visible = PROJECTS.map((_, i) => i).filter((i) => tag === "All" || PROJECTS[i].tags.includes(tag));
  // Stay on the current project if it still matches.
  pos = Math.max(0, visible.indexOf(current));
  filterButtons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === tag)));
  buildDots();
  render();
  fitStage();
  const label = tag === "All" ? "" : `${tag} `;
  announce.textContent = `Showing ${visible.length} ${label}project${visible.length === 1 ? "" : "s"}`;
}

// ---- Dots ----
let dots = [];
function buildDots() {
  dotsWrap.replaceChildren();
  dots = visible.map((i, k) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "deck__dot";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", PROJECTS[i].title);
    dot.addEventListener("click", () => go(k));
    dotsWrap.append(dot);
    return dot;
  });
  const single = visible.length < 2;
  $("[data-prev]", deck).disabled = single;
  $("[data-next]", deck).disabled = single;
}

// Shortest signed distance from the active card, so the deck wraps around.
// Returns null for cards hidden by the filter.
function offsetOf(cardIndex) {
  const k = visible.indexOf(cardIndex);
  if (k < 0) return null;
  const n = visible.length;
  let d = (k - pos) % n;
  if (d > n / 2) d -= n;
  if (d < -n / 2) d += n;
  return d;
}

function fitStage() {
  const shown = cards.filter((c) => !c.classList.contains("is-filtered"));
  const tallest = Math.max(0, ...shown.map((c) => c.offsetHeight));
  stage.style.height = `${tallest + 24}px`;
}

function render(first = false) {
  const n = visible.length;
  cards.forEach((card, i) => {
    const d = offsetOf(i);
    const wasFiltered = card.classList.contains("is-filtered");
    if (d === null) {
      card.classList.add("is-filtered");
      card.classList.remove("is-active");
      card.tabIndex = -1;
      card.setAttribute("aria-hidden", "true");
      const v = $("video", card);
      if (v) v.pause();
      return;
    }
    card.classList.remove("is-filtered");

    const prev = Number(card.style.getPropertyValue("--d") || 0);
    const far = Math.abs(d) > 2;
    if (!first && (wasFiltered || Math.abs(d - prev) > 2)) {
      // Appearing, or wrapping from one end to the other: place it while invisible, then fade in.
      card.classList.add("is-jumping", "is-far");
      card.style.setProperty("--d", d);
      card.style.setProperty("--ad", Math.abs(d));
      void card.offsetWidth;
      card.classList.remove("is-jumping");
      requestAnimationFrame(() => card.classList.toggle("is-far", far));
    } else {
      card.style.setProperty("--d", d);
      card.style.setProperty("--ad", Math.abs(d));
      card.classList.toggle("is-far", far);
    }
    const active = d === 0;
    card.classList.toggle("is-active", active);
    card.tabIndex = active ? 0 : -1;
    card.setAttribute("aria-hidden", String(far));
    card.setAttribute("aria-label", `${PROJECTS[i].title}, ${visible.indexOf(i) + 1} of ${n}`);
    if (!active) resetTilt(card);

    const video = $("video", card);
    if (video) {
      if (active && !reduceMotion && onScreen("projects")) video.play().catch(() => {});
      else video.pause();
    }
  });
  dots.forEach((dot, k) => dot.setAttribute("aria-selected", String(k === pos)));
}

function go(k) {
  const n = visible.length;
  if (!n) return;
  pos = ((k % n) + n) % n;
  render();
  announce.textContent = `${PROJECTS[activeIndex()].title}, project ${pos + 1} of ${n}`;
}

$("[data-prev]", deck).addEventListener("click", () => go(pos - 1));
$("[data-next]", deck).addEventListener("click", () => go(pos + 1));

// Videos with data-start / data-end loop between those times, skipping intros and outros.
function loopBetween(video) {
  const start = Number(video.dataset.start) || 0;
  const end = Number(video.dataset.end) || Infinity;
  video.loop = !video.dataset.start && !video.dataset.end;
  video.addEventListener("timeupdate", () => {
    if (video.currentTime >= end) video.currentTime = start;
  });
  video.addEventListener("ended", () => {
    video.currentTime = start;
    video.play().catch(() => {});
  });
}
$$("video", stage).forEach(loopBetween);

// Drag / swipe the deck. A drag never counts as a click.
let dragStartX = null;
let dragged = false;
stage.addEventListener("pointerdown", (e) => {
  if (e.button !== 0) return;
  dragStartX = e.clientX;
  dragged = false;
});
addEventListener("pointermove", (e) => {
  if (dragStartX !== null && Math.abs(e.clientX - dragStartX) > 8) dragged = true;
});
addEventListener("pointerup", (e) => {
  if (dragStartX === null) return;
  const dx = e.clientX - dragStartX;
  dragStartX = null;
  if (Math.abs(dx) > 50) go(pos + (dx < 0 ? 1 : -1));
});
addEventListener("pointercancel", () => (dragStartX = null));

cards.forEach((card, i) => {
  card.addEventListener("click", () => {
    if (dragged) return;
    if (i === activeIndex()) openProject(PROJECTS[i]);
    else go(visible.indexOf(i));
  });

  // Tilt the active card toward the pointer.
  card.addEventListener("pointermove", (e) => {
    if (i !== activeIndex() || e.pointerType !== "mouse" || reduceMotion) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    card.style.setProperty("--tx", `${(x - 0.5) * 12}deg`);
    card.style.setProperty("--ty", `${(0.5 - y) * 10}deg`);
    card.style.setProperty("--sx", `${x * 100}%`);
    card.style.setProperty("--sy", `${y * 100}%`);
  });
  card.addEventListener("pointerleave", () => resetTilt(card));
});

function resetTilt(card) {
  card.style.setProperty("--tx", "0deg");
  card.style.setProperty("--ty", "0deg");
}

// Arrow keys move the deck while the Projects screen is open.
document.addEventListener("keydown", (e) => {
  if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
  if (!onScreen("projects") || modal.open) return;
  if (e.target instanceof Element && e.target.closest("input, textarea, select, [contenteditable]")) return;
  e.preventDefault();
  go(pos + (e.key === "ArrowRight" ? 1 : -1));
});

document.addEventListener("screenchange", () => render(true));
addEventListener("resize", fitStage);
(document.fonts ? document.fonts.ready : Promise.resolve()).then(fitStage);
buildDots();
render(true);
fitStage();

// ------------------------------------------------------------
// Project modal
// ------------------------------------------------------------
const modal = $("[data-modal]");
const mediaEl = $("[data-modal-media]");

function mediaMarkup(m) {
  return m.video
    ? `<div class="modal__frame"><video src="${m.video}${m.start ? `#t=${m.start}` : ""}"${m.crop ? " class=\"is-cropped\"" : ""}${m.start ? ` data-start="${m.start}"` : ""}${m.end ? ` data-end="${m.end}"` : ""} muted autoplay loop playsinline></video></div>`
    : `<img src="${m.image}" alt="${m.alt || ""}">`;
}

function openProject(p) {
  mediaEl.innerHTML = mediaMarkup(p.media[0]);
  if (p.media.length > 1) {
    const switcher = document.createElement("div");
    switcher.className = "media-switch";
    p.media.forEach((m, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = m.label;
      b.setAttribute("aria-pressed", String(i === 0));
      b.addEventListener("click", () => {
        mediaEl.firstElementChild.outerHTML = mediaMarkup(m);
        $$("video", mediaEl).forEach(loopBetween);
        $$("button", switcher).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      });
      switcher.append(b);
    });
    mediaEl.append(switcher);
  }

  $$("video", mediaEl).forEach(loopBetween);

  $("[data-modal-tag]").textContent = p.tag;
  $("[data-modal-title]").textContent = p.title;

  const body = $("[data-modal-body]");
  body.innerHTML = p.body.map((t) => `<p>${t}</p>`).join("");
  if (p.features) {
    body.insertAdjacentHTML(
      "beforeend",
      `<ul class="features">${p.features.map(([h, t]) => `<li><strong>${h}.</strong> ${t}</li>`).join("")}</ul>`
    );
  }

  $("[data-modal-stack]").innerHTML = p.stack.map((s) => `<li>${s}</li>`).join("");

  const links = $("[data-modal-links]");
  links.innerHTML =
    p.links
      .map((l) => `<a class="btn${l.primary ? " btn--primary" : ""}" href="${l.href}" target="_blank" rel="noopener">${l.label} ↗</a>`)
      .join("") + (p.note ? `<p class="modal__note">${p.note}</p>` : "");

  $$("video", stage).forEach((v) => v.pause());
  modal.showModal();
  modal.scrollTop = 0;
}

function closeModal() {
  modal.close();
}
modal.addEventListener("close", () => {
  if (modal.open) return; // reopened before this event arrived
  $$("video", mediaEl).forEach((v) => v.pause());
  mediaEl.innerHTML = "";
  render(true);
  cards[activeIndex()].focus({ preventScroll: true });
});
$("[data-modal-close]").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal(); // backdrop
});

// ------------------------------------------------------------
// "GAME PROGRAMMER" glitch
// ------------------------------------------------------------
const glitchEls = $$(".glitch");
if (glitchEls.length && !reduceMotion) {
  const GLITCH_MS = 400; // matches the .is-glitching animations in styles.css
  let clearTimer;
  const glitch = () => {
    clearTimeout(clearTimer);
    glitchEls.forEach((el) => {
      el.classList.remove("is-glitching");
      void el.offsetWidth;
      el.classList.add("is-glitching");
    });
    clearTimer = setTimeout(() => glitchEls.forEach((el) => el.classList.remove("is-glitching")), GLITCH_MS + 50);
  };
  const loop = () => {
    if (!document.hidden && onScreen("projects")) glitch();
    setTimeout(loop, 3500 + Math.random() * 3000);
  };
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => {
    setTimeout(glitch, 300);
    setTimeout(loop, 4000);
  });
  glitchEls[0].closest("h1").addEventListener("pointerenter", (e) => {
    if (e.pointerType === "mouse") glitch();
  });
}

// ------------------------------------------------------------
// Portrait: starts pixelated, sharpens on hover / focus / tap
// ------------------------------------------------------------
const portrait = $(".portrait");
if (portrait) {
  const img = $("img", portrait);
  const cvs = $(".portrait__pixels", portrait);
  const ctx = cvs.getContext("2d");
  let steps = [];

  const drawAt = (cols) => {
    const box = portrait.getBoundingClientRect();
    const aspect = box.height / box.width || 1.25;
    const rows = Math.round(cols * aspect);
    cvs.width = cols;
    cvs.height = rows;
    // object-fit: cover crop of the source image
    const scale = Math.max(cols / img.naturalWidth, rows / img.naturalHeight);
    const sw = cols / scale;
    const sh = rows / scale;
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(img, (img.naturalWidth - sw) / 2, (img.naturalHeight - sh) / 2, sw, sh, 0, 0, cols, rows);
  };

  const clear = () => {
    steps.forEach(clearTimeout);
    steps = [];
  };
  const sharpen = () => {
    clear();
    if (reduceMotion) return portrait.classList.add("is-sharp");
    [40, 80].forEach((cols, i) => steps.push(setTimeout(() => drawAt(cols), i * 90)));
    steps.push(setTimeout(() => portrait.classList.add("is-sharp"), 180));
  };
  const pixelate = () => {
    clear();
    drawAt(22);
    portrait.classList.remove("is-sharp");
  };

  const ready = () => drawAt(22);
  if (img.complete && img.naturalWidth) ready();
  else img.addEventListener("load", ready, { once: true });
  document.addEventListener("screenchange", (e) => {
    if (e.detail === "about" && img.naturalWidth) pixelate();
  });

  portrait.addEventListener("pointerenter", (e) => e.pointerType === "mouse" && sharpen());
  portrait.addEventListener("pointerleave", (e) => e.pointerType === "mouse" && pixelate());
  portrait.addEventListener("focus", sharpen);
  portrait.addEventListener("blur", pixelate);
  portrait.addEventListener("click", () => (portrait.classList.contains("is-sharp") ? pixelate() : sharpen()));
}

// ------------------------------------------------------------
// Background: pixel sun setting over a moving grid
// ------------------------------------------------------------
const scene = $("#scene");
if (scene) {
  const ctx = scene.getContext("2d");
  const PX = 3; // size of one "pixel" in CSS px
  let w = 0;
  let h = 0;
  let stars = [];
  let boost = 1; // cheat mode speeds things up

  const resize = () => {
    w = Math.ceil(innerWidth / PX);
    h = Math.ceil(innerHeight / PX);
    scene.width = w;
    scene.height = h;
    stars = Array.from({ length: Math.round((w * h) / 900) }, () => ({
      x: Math.random() * w,
      y: Math.random() * h * 0.55,
      p: Math.random() * Math.PI * 2,
    }));
  };

  const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
  const SUN_TOP = [255, 214, 102];
  const SUN_BOTTOM = [245, 110, 56];

  const draw = (time) => {
    const t = time / 1000;
    const horizon = Math.round(h * 0.74);

    // Sky
    const sky = ctx.createLinearGradient(0, 0, 0, horizon);
    sky.addColorStop(0, "#0e1413");
    sky.addColorStop(0.65, "#13191a");
    sky.addColorStop(1, "#2b1a12");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, horizon);

    // Stars
    stars.forEach((s) => {
      const a = 0.25 + 0.35 * Math.sin(t * 1.5 + s.p);
      ctx.fillStyle = `rgba(243, 230, 208, ${Math.max(a, 0.05)})`;
      ctx.fillRect(Math.round(s.x), Math.round(s.y), 1, 1);
    });

    // Sun: drawn row by row so the lower half gets scrolling slats.
    const r = Math.round(Math.min(w * 0.15, h * 0.27));
    const cx = Math.round(w / 2);
    const cy = horizon - Math.round(r * 0.25);

    const glow = ctx.createRadialGradient(cx, cy, r * 0.6, cx, cy, r * 2.2);
    glow.addColorStop(0, "rgba(245, 110, 56, 0.22)");
    glow.addColorStop(1, "rgba(245, 110, 56, 0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, w, horizon);

    const slatStart = cy - r * 0.15;
    const period = Math.max(6, Math.round(r / 6));
    const scroll = (t * 6 * boost) % period;
    for (let y = cy - r; y < horizon; y++) {
      const dy = y - cy;
      const half = Math.sqrt(Math.max(r * r - dy * dy, 0));
      if (!half) continue;
      if (y > slatStart) {
        const depth = (y - slatStart) / (horizon - slatStart); // 0..1
        const gap = 1 + Math.floor(depth * period * 0.55);
        if ((y - slatStart + scroll) % period < gap) continue;
      }
      const c = mix(SUN_TOP, SUN_BOTTOM, (y - (cy - r)) / (2 * r));
      ctx.fillStyle = `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
      ctx.fillRect(Math.round(cx - half), y, Math.round(half * 2), 1);
    }

    // Ground
    ctx.fillStyle = "#0a0f0e";
    ctx.fillRect(0, horizon, w, h - horizon);

    // Grid: horizontal lines rush toward the viewer.
    const groundH = h - horizon;
    const LINES = 14;
    const phase = (t * 0.35 * boost) % 1;
    for (let i = 0; i < LINES; i++) {
      const p = (i + phase) / LINES;
      const y = horizon + Math.round(groundH * Math.pow(p, 2.2));
      ctx.fillStyle = `rgba(67, 214, 181, ${0.08 + p * 0.4})`;
      ctx.fillRect(0, y, w, 1);
    }
    // Grid: lines converging on the vanishing point.
    ctx.strokeStyle = "rgba(67, 214, 181, 0.28)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    const spacing = w / 12;
    for (let j = -14; j <= 14; j++) {
      ctx.moveTo(cx + 0.5, horizon);
      ctx.lineTo(cx + j * spacing * 2.2 + 0.5, h);
    }
    ctx.stroke();

    // Horizon haze
    const haze = ctx.createLinearGradient(0, horizon - 2, 0, horizon + groundH * 0.25);
    haze.addColorStop(0, "rgba(245, 110, 56, 0.35)");
    haze.addColorStop(1, "rgba(10, 15, 14, 0)");
    ctx.fillStyle = haze;
    ctx.fillRect(0, horizon - 2, w, groundH * 0.25);
  };

  resize();
  addEventListener("resize", () => {
    resize();
    draw(performance.now());
  });

  if (reduceMotion) {
    draw(0);
  } else {
    let last = 0;
    const tick = (now) => {
      if (!document.hidden && now - last > 33) {
        last = now;
        draw(now);
      }
      requestAnimationFrame(tick);
    };
    draw(0);
    requestAnimationFrame(tick);
  }

  // Cheat code hook (see below).
  scene.boost = (v) => (boost = v);
}

// ------------------------------------------------------------
// Konami code: ↑ ↑ ↓ ↓ ← → ← → B A
// ------------------------------------------------------------
const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
let konamiPos = 0;
document.addEventListener("keydown", (e) => {
  const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
  konamiPos = key === KONAMI[konamiPos] ? konamiPos + 1 : key === KONAMI[0] ? 1 : 0;
  if (konamiPos === KONAMI.length) {
    konamiPos = 0;
    const on = document.body.classList.toggle("cheat");
    if (scene && scene.boost) scene.boost(on ? 4 : 1);
    toast(on ? "Cheat activated: +30 lives" : "Cheat deactivated");
  }
});
