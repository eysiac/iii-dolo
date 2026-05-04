const CORRECT_PIN = "0428";
const music = document.getElementById("bgMusic");

const messages = [
  "good day iya!",
  "kamusta?",
  "kumain kana ba?",
  "hahahha",
  "may gusto sana akong sabihin",
  "pero story time muna hahahah...",
  "nung umuwi ako ng bicol galing pasig",
  "yun din yung time na pupunta rin kayo sa bahay para sa nstp/immersion niyo.",
  "nung nalaman ko kay kuya na may bisita daw sa bahay",
  "tapos nalaman ko rin na mga taga ateneo yung pupunta.",
  "nagulat ako kasi may ganyang klase pala ng nstp/immersion yung univs dito like..",
  "'di ko ine-expect hahaha",
  "And ako nakilala niyo ako na loko loko tas garo mayong supog ta",
  "puro kakupalan ang ginagawa ko, pero nung time na pupunta kayo dito sa bahay,",
  "na hihiya na agad ako kahit wala pa kayo sa bahay hahaha",
  "ang plano ko nung time na yun is",
  "hindi muna talaga ako uuwi ng bahay for 3 days, like papalipasin ko lang yung mga araw na andito kayo hanggang sa araw na umalis kayo.",
  "thankful ako kasi hindi natuloy yung plano ko na yon hahhaha, kasi nakilala ko sila,",
  "and nakilala din kita.",
  "super nag enjoy ako sa mga bonding natin dito sa bahay..",
  "nag enjoy ako sa mga tawanan, kulitan, sa mga kwentuhan natin about life,",
  "kaso naputol lang kasi mag a-aurora",
  "hahahha pero okay lang yon",
  "kahit onti lang yung oras na nakasama ko kayo,",
  "pakiramdam ko non is parang matagal na tayong magkakakilala.",
  "question muna kita..",
  "para sayo, ano ang definition mo ng love?",
  "for me kasi is kapag bigla na lang may taong papasok sa buhay mo,",
  "and yung tao na yon is someone na hindi mo ine-expect na",
  "magustuhan mo.",
  "ganon siya for me hahahhaha",
  "so tuloy na natin",
  "nung time na pag pasok ko na bahay, yun din yung time na lumabas ka ng kwarto mo",
  "na starstruck talaga akoooo, like napasabi ako ng 'gago ang ganda' hahaha ",
  "sounds cringe or jejemon, pero yun talaga yung na f-feel ko nung time na yun hahaha",
  "kinapalan ko muka ko para kausapin kayo",
  "kasi kung hindi, baka magka ilangan tayo dito sa bahay",
  "lalo na't tayo tayo lang din magsasama sa iisang bahay ng 3days.",
  "I want to be honest with you, iya.",
  "I've really enjoyed getting to know you(hindi naman lahat, pero Im taking a risk and ready akong kilalanin ka ng sobra).",
  "And I've found myself developing feelings for you.",
  "I've been trying to keep these feelings to myself for several days na.",
  "nung una kitang nakita iya",
  "talagang leeg ang tama hahahhaha",
  "like you're so prettyyyyyyy and cuteeeeee. ◝(ᵔᗜᵔ)◜",
  "I like your hair, I like the way you talk,",
  "the way na nag g-glasses ka minsan tapos dae",
  "with or without glasses, maganda ka pa rin ^^",
  "I like the way you do things around the house, lalo na itong nag gatong ka,",
  "bilib na bilib ako kasi bihira lang ako makakita ng babae na marunong talaga sa bahay(ako ngani dae tataong maray hahaha)",
  "I like the way na nagkakaroon tayo ng conversations,",
  "I like the way you dress, the way you laugh, when I've got some jokes or nang gagago lang",
  "I specially like the way you smile. (˶˃ ᵕ ˂˶)",
  "everytime na nakikita kita na naka ngiti",
  "I've got this feeling na super super gaan sa pakiramdam, lalo na pag nakikita kita (*ᴗ͈ˬᴗ͈)ꕤ*.ﾟ",
  "I really, really really like you, iya ε(´｡•᎑•`)っ 💕",
  "So ngayon, you don't have to respond right away or at all if you're not comfortable with it.",
  "Take all the time you need to think about it, and I understand if you don't feel the same way, iya.",
  "That's completely okay with me, and I'll respect whatever decision you make.",
  "I'd rather keep things comfortable between us than make things complicated.",
  "whenever you want to talk about it, or if you have any questions, just let me know.",
  "that's all iya! thankyou, goodluck sa acads mo and take care always! ^^"
];

const SPECIAL_INDEX = messages.indexOf("I really, really really like you, iya");

let pin = "";
let index = 0;
let isTyping = false;
let envelopeOpened = false;

// ─── PIN ───────────────────────────────────────────────────────────────────

function updatePin() {
  for (let i = 0; i < 4; i++) {
    document.getElementById("b" + i).innerText = pin[i] ? "●" : "";
  }
}

document.querySelectorAll("[data-num]").forEach(b => {
  b.onclick = () => {
    if (pin.length < 4) {
      pin += b.dataset.num;
      updatePin();
    }
  };
});

document.getElementById("del").onclick = () => {
  pin = pin.slice(0, -1);
  updatePin();
};

document.getElementById("enter").onclick = () => {
  if (pin === CORRECT_PIN) {
    start();
  } else {
    document.getElementById("error").innerText = "wrong pin 😢";
    pin = "";
    updatePin();
  }
};

// ─── TYPING ────────────────────────────────────────────────────────────────

function type(text, cb) {
  if (isTyping) return;
  isTyping = true;

  const msg = document.getElementById("message");
  let i = 0;

  const interval = setInterval(() => {
    msg.innerHTML =
      '<div style="text-align:center;">' +
      text.substring(0, i) +
      '<span class="cursor"></span></div>';

    if (i >= text.length) {
      clearInterval(interval);
      isTyping = false;
      cb();
    }

    i++;
  }, 85);
}

// ─── FLOW ──────────────────────────────────────────────────────────────────

function next() {
  if (index < messages.length) {
    type(messages[index], () => {
      if (index === SPECIAL_INDEX) specialAnimation();
      document.getElementById("nextBtn").classList.remove("hidden");
    });
  } else {
    ending();
  }
}

document.getElementById("nextBtn").onclick = () => {
  document.getElementById("nextBtn").classList.add("hidden");
  index++;
  next();
};

function ending() {
  const msg = document.getElementById("message");
  document.getElementById("nextBtn").classList.add("hidden");
  msg.innerHTML = '<div style="text-align:center;">that\'s all for now 🌷<span class="cursor"></span></div>';
  launchHearts();
}

// ─── ANIMATIONS ────────────────────────────────────────────────────────────

function spawnEmojis(emojis, count, delayStep, extraStyle = "") {
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const el = document.createElement("div");
      el.innerText = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.cssText = `
        position: fixed;
        font-size: ${Math.random() * 20 + 14}px;
        left: ${Math.random() * 100}vw;
        top: 110vh;
        pointer-events: none;
        animation: floatUp ${Math.random() * 2 + 2}s ease-out forwards;
        z-index: 9999;
        ${extraStyle}
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 4000);
    }, i * delayStep);
  }
}

function launchHearts() {
  spawnEmojis(["❤️", "🌸", "🌷", "💕", "✨"], 60, 80);
}

function specialAnimation() {
  document.body.style.transition = "background 0.5s";
  document.body.style.background = "#ff80ab";
  setTimeout(() => {
    document.body.style.background = "";
    setTimeout(() => { document.body.style.transition = ""; }, 500);
  }, 600);

  const msg = document.getElementById("message");
  msg.style.animation = "heartPulse 0.6s ease-in-out 3";
  setTimeout(() => { msg.style.animation = ""; }, 2000);

  spawnEmojis(["❤️", "🌸", "🌷", "💕", "✨", "💖", "💗"], 80, 40);
}

// ─── PETALS ────────────────────────────────────────────────────────────────

function spawnPetals() {
  const container = document.getElementById("petals");
  const emojis = ["🌸", "🌷", "❤️", "💕", "✨"];

  setInterval(() => {
    const el = document.createElement("div");
    el.classList.add("petal");
    el.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.cssText = `
      left: ${Math.random() * 100}vw;
      font-size: ${Math.random() * 16 + 12}px;
      animation-duration: ${Math.random() * 4 + 4}s;
      animation-delay: ${Math.random() * 2}s;
      opacity: ${Math.random() * 0.5 + 0.5};
    `;
    container.appendChild(el);
    setTimeout(() => el.remove(), 8000);
  }, 400);
}

spawnPetals();

// ─── HEART BUTTON ──────────────────────────────────────────────────────────

const heartBtn = document.createElement("button");
heartBtn.innerText = "❤️";
heartBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  font-size: 2rem;
  background: rgba(255,255,255,0.8);
  border: 2px solid #f48fb1;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  z-index: 9999;
  box-shadow: 0 4px 15px rgba(244,143,177,0.4);
  transition: transform 0.1s;
`;
heartBtn.onmousedown = () => heartBtn.style.transform = "scale(0.9)";
heartBtn.onmouseup = () => heartBtn.style.transform = "scale(1)";
heartBtn.onclick = () => spawnEmojis(["❤️", "🌸", "🌷", "💕", "✨", "💖", "💗"], 30, 50);
document.body.appendChild(heartBtn);

// ─── START / ENVELOPE ──────────────────────────────────────────────────────

function start() {
  document.getElementById("pinPage").classList.add("hidden");
  const envelopePage = document.getElementById("envelopePage");
  envelopePage.classList.remove("hidden");
  envelopePage.classList.add("show");
}

const envelope = document.getElementById("envelope");

envelope.onclick = () => {
  if (envelopeOpened) return;
  envelopeOpened = true;

  envelope.classList.add("open");

  setTimeout(() => {
    music.play().catch(() => {});
  }, 500);

  setTimeout(() => {
    const envelopePage = document.getElementById("envelopePage");
    envelopePage.classList.add("hidden");
    envelopePage.classList.remove("show");
    document.getElementById("msgPage").classList.remove("hidden");
    next();
  }, 1600);
};

// ─── CLICK TO BLOOM ────────────────────────────────────────────────────────

document.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  const petals = ["🌸", "🌷", "🌺", "✿", "❀"];
  const count = 6;

  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.innerText = petals[Math.floor(Math.random() * petals.length)];

    const angle = (360 / count) * i;
    const distance = Math.random() * 40 + 20;
    const dx = Math.cos((angle * Math.PI) / 180) * distance;
    const dy = Math.sin((angle * Math.PI) / 180) * distance;

    el.style.cssText = `
      position: fixed;
      left: ${touch.clientX}px;
      top: ${touch.clientY}px;
      font-size: ${Math.random() * 12 + 10}px;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      animation: bloom 0.8s ease-out forwards;
      --dx: ${dx}px;
      --dy: ${dy}px;
    `;

    document.body.appendChild(el);
    setTimeout(() => el.remove(), 800);
  }
}, { passive: true });
