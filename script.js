// 🎁 Mensaje sorpresa
function mostrarSorpresa() {
  alert("💌 Solo quería recordarte lo especial que eres para mí. Te amo muchísimo 💕");
}

// ❤️ Corazones flotantes
function crearCorazon() {
  const corazones = document.getElementById("corazones");
  const span = document.createElement("span");
  span.innerText = "❤️";
  span.style.left = Math.random() * 100 + "vw";
  span.style.top = "100vh";
  span.style.fontSize = Math.random() * 20 + 20 + "px";
  corazones.appendChild(span);
  setTimeout(() => corazones.removeChild(span), 5000);
}
setInterval(crearCorazon, 300);

// 🌹 Rosa flotante
function enviarRosa() {
  alert("🌹 Esta rosa es para ti, porque cada pétalo guarda un pedacito de mi amor por ti.");
  const rosas = document.getElementById("rosas");
  const span = document.createElement("span");
  span.innerText = "🌹";
  span.style.left = Math.random() * 100 + "vw";
  span.style.top = "100vh";
  span.style.fontSize = Math.random() * 20 + 30 + "px";
  rosas.appendChild(span);
  setTimeout(() => rosas.removeChild(span), 5000);
}

// ✨ Razones por las que te amo
function mostrarRazones() {
  const razones = [
    "Tu sonrisa ilumina hasta mis días más grises 🌞",
    "Eres mi lugar seguro en este mundo caótico 🛡️",
    "Cada segundo contigo se vuelve inolvidable ⏳",
    "A tu lado todo es mejor, incluso lo simple 🌈",
    "Tu ternura me derrite cada día más 🧸",
    "Eres mi canción favorita sin necesidad de letra 🎶",
    "Contigo descubrí lo que realmente es el amor 💘",
    "Porque solo tú haces que mi corazón lata así 💓",
    "Eres mi sueño hecho realidad ✨",
    "Eres la razón por la que creo en el destino 🌟"
  ];

  const random = Math.floor(Math.random() * razones.length);
  alert("✨ Razón #" + (random + 1) + ":\n" + razones[random]);
}

// 💭 Mi sueño contigo
function soñarContigo() {
  alert("💭 Me imagino contigo despertando juntos cada mañana, viajando por el mundo, construyendo una historia de amor eterna. Contigo todo es posible. 💑✨");

  const nubes = document.getElementById("nubes");
  const span = document.createElement("span");
  span.innerText = "☁️";
  span.style.left = Math.random() * 100 + "vw";
  span.style.top = "100vh";
  span.style.fontSize = Math.random() * 20 + 30 + "px";
  nubes.appendChild(span);
  setTimeout(() => nubes.removeChild(span), 5000);
}

// 📸 Mostrar collage de fotos
function mostrarCollage() {
  document.getElementById("modalCollage").style.display = "flex";
}

// ❌ Cerrar collage
function cerrarCollage() {
  document.getElementById("modalCollage").style.display = "none";
}

// 🎶 Nuestra canción
function reproducirCancion() {
  window.open("https://youtu.be/mN4NNG_YHeY?si=eDhUg1d_3OiNLLhU", "_blank");

  const notas = document.getElementById("notas");
  for (let i = 0; i < 5; i++) {
    const span = document.createElement("span");
    span.innerText = "🎵";
    span.style.left = Math.random() * 100 + "vw";
    span.style.top = "100vh";
    span.style.fontSize = Math.random() * 20 + 20 + "px";
    notas.appendChild(span);
    setTimeout(() => notas.removeChild(span), 5000);
  }
}
