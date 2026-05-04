/* ============================================================
   DATA
   ============================================================ */

const siswaList = [
  "Adrian Maulana",    "Afnia Syifa Tazkia",     "Aqeela Zaini Asanri Gunawan",
  "Arkhan Dzikra Aushaf",     "Chelsea Olivia Gunawan",        "Cindy Rachmawati",
  "Ezra Avila",     "Fachry Hafidz Anshary",       "Fadel Yusariyan Hamdan",
  "Fadhia Dina Muharani",  "Faisal Sayhan",       "Faris Azkha Fauzi",
  "Faza Hadaina Ramadhani",     "Gandis Nurkangeni",     "Ibni Rafif Sakhiy Ramdani",
  "Khalisa Abida Fajria",     "Khansa Aura Zahra",         "Marelda Hasanah Azka",
  "Mochamad Fahri",         "Mohamad Wildansyah Fauzan",      "Muhammad Dzakrulloh",
  "Muhammad Fahri Rifai",    "Muhammad Akmal Firdaus",     "Muhammad Azzam Shidqi",
  "Muhammad Zahran Alfahri",      "Muhammad Zetta Natawijaya",         "Nafisha Aulia Sutendi",
  "Naura Raisya Mumtaaza",   "Nisrina Alyaa Puspitasari",     "Ramzi Aujal Majdi Mustopa",
  "Richi Ramadhani Qodar",     "Sabian Kaleano Alfaithy",
  /* 4 siswa baru — total 36 */
  "Salsabila Fatin",     "Triana Angga Saputra",      "Triani Pusvitasari Komarudin",
  "Vira Arini Ramadhani"
];

const roastList = [
  "🎤 Bacanya paling lantang waktu absen, lesnya paling kenceng!",
  "☕ Hidupnya seperti kopi: butuh banyak waktu buat berfungsi pagi hari.",
  "💤 Ahli tidur dengan mata setengah terbuka, masterclass tersendiri!",
  "🐢 Orangnya slow, tapi slow-nya itu yang bikin kelas adem.",
  "🎭 Mukanya serius tapi isinya random 24 jam sehari.",
  "📱 HP-nya lebih tau jadwal pelajaran daripada orangnya.",
  "🌙 Energinya muncul jam 10 malem, pas semua udah mau tidur.",
  "🃏 Spesialis minta contekan, tapi yang dicari sebenernya pertemanan.",
  "🎯 Tujuannya satu: lulus. Strateginya? Masih dalam perencanaan.",
  "🦸 Pahlawan kelas yang selalu muncul pas butuh tanda tangan absen.",
  "🍜 Selalu beli jajanan pas istirahat, tapi selalu bilang lagi diet.",
  "🎵 Nyanyi di kelas kalau kira-kira guru nggak denger. Kira-kira.",
];

const pengurusList = [
  { nama: "Ezra Avila",      jabatan: "Ketua Kelas",       emoji: "👑", color: "#f59e0b", bg: "#fffbe6" },
  { nama: "Arkhan Dzikra Aushaf",  jabatan: "Wakil Ketua",       emoji: "🌟", color: "#a855f7", bg: "#f5e6ff" },
  { nama: "Aqeela Zaini Asanri Gunawan",  jabatan: "Sekretaris 1",      emoji: "📝", color: "#3b82f6", bg: "#e6f0ff" },
  { nama: "Chelsea Olivia Gunawan",      jabatan: "Sekretaris 2",      emoji: "✏️", color: "#06b6d4", bg: "#e0f9ff" },
  { nama: "Marelda Hasanah Azka", jabatan: "Bendahara 1",       emoji: "💰", color: "#22c55e", bg: "#e6ffee" },
  { nama: "Cindy Rachmawati",    jabatan: "Bendahara 2",       emoji: "💳", color: "#10b981", bg: "#d4fce8" },
  { nama: "",     jabatan: "Seksi Kebersihan",  emoji: "🧹", color: "#f97316", bg: "#fff1e6" },
  { nama: "",  jabatan: "Seksi Kesenian",    emoji: "🎨", color: "#ec4899", bg: "#ffe6f4" },
  { nama: "",  jabatan: "Seksi Olahraga",    emoji: "⚽", color: "#ef4444", bg: "#ffe6e6" },
  { nama: "",    jabatan: "Seksi Keagamaan",   emoji: "🕌", color: "#8b5cf6", bg: "#f0e6ff" },
];

const jadwalPelajaran = {
  Senin: [
    { waktu: "06.30–07.40", mapel: "Upacara / Kewalikelasan / Kerohanian",  guru: "—",                 color: "#6366f1" },
    { waktu: "07.40–09.00", mapel: "PPKN",          guru: "Bu Budi",        color: "#3b82f6" },
    { waktu: "09.00–09.40", mapel: "Kimia",          guru: "Bu Ina",        color: "#3b82f6" },
    { waktu: "09.40–10.00", mapel: "Istirahat ☕",         guru: "—",                 color: "#f59e0b" },
    { waktu: "10.00–11.20", mapel: "Kimia",              guru: "Bu Ina",           color: "#8b5cf6" },
    { waktu: "11.20–12.20", mapel: "Istirahat ☕",              guru: "—",           color: "#8b5cf6" },
    { waktu: "12.20–13.40", mapel: "SBD",        guru: "Bu Nurul",          color: "#ef4444" },
    { waktu: "13.40–15.00", mapel: "TIK",        guru: "Pak Ade",                 color: "#f59e0b" },
  ],
  Selasa: [
    { waktu: "06.40–08.10", mapel: "Kimia",               guru: "Bu Ina",          color: "#ec4899" },
    { waktu: "08.10–09.40", mapel: "PJOK",               guru: "Pak Galih",          color: "#ec4899" },
    { waktu: "09.40–10.00", mapel: "Istirahat ☕",             guru: "—",         color: "#22c55e" },
    { waktu: "10.00–11.30", mapel: "Biologi",         guru: "Bu Sri",                 color: "#f59e0b" },
    { waktu: "11.30–12.20", mapel: "Istirahat ☕",             guru: "—",         color: "#22c55e" },
    { waktu: "12.20–13.00", mapel: "BK",             guru: "Bu Nurina",           color: "#f97316" },
    { waktu: "13.00–15.00", mapel: "B. Inggris",             guru: "Bu Zahara",           color: "#f97316" },
  ],
  Rabu: [
    { waktu: "06.40–08.10", mapel: "Sejarah",        guru: "Pak Viddy",          color: "#ef4444" },
    { waktu: "08.10–09.40", mapel: "Fisika",        guru: "Pak Umar",          color: "#ef4444" },
    { waktu: "09.40–10.00", mapel: "Istirahat ☕",          guru: "—",        color: "#3b82f6" },
    { waktu: "10.00–11.30", mapel: "TIK",         guru: "Pak Ade",                 color: "#f59e0b" },
    { waktu: "11.30–12.20", mapel: "Istirahat ☕",            guru: "—",           color: "#84cc16" },
    { waktu: "12.20–13.00", mapel: "TIK",            guru: "Pak Ade",           color: "#84cc16" },
    { waktu: "13.00–15.00", mapel: "Matematika Wajib",             guru: "Pak Samsul",          color: "#14b8a6" },
  ],
  Kamis: [
    { waktu: "06.40–08.55", mapel: "B. Indonesia",              guru: "Bu Popon",           color: "#8b5cf6" },
    { waktu: "08.55–09.40", mapel: "Fisika",              guru: "Pak Umar",           color: "#8b5cf6" },
    { waktu: "09.40–10.00", mapel: "Istirahat ☕",               guru: "—",          color: "#ec4899" },
    { waktu: "10.00–11.30", mapel: "Fisika",         guru: "Pak Umar",                 color: "#f59e0b" },
    { waktu: "11.30–12.20", mapel: "Istirahat ☕",               guru: "—",          color: "#ec4899" },
    { waktu: "12.20–13.40", mapel: "B. Sunda",          guru: "Pak Epis",          color: "#10b981" },
    { waktu: "13.40–15.00", mapel: "Matematika Lanjut",            guru: "Bu Siti",          color: "#f97316" },
  ],
  Jumat: [
    { waktu: "06.30–07.50", mapel: "Nyucikeun Diri",     guru: "—",                 color: "#6366f1" },
    { waktu: "07.50–09.10", mapel: "Biologi",             guru: "Bu Sri",         color: "#22c55e" },
    { waktu: "09.10–09.40", mapel: "Istirahat ☕",             guru: "—",         color: "#22c55e" },
    { waktu: "09.40–10.20", mapel: "Biologi",         guru: "Bu Sri",                 color: "#f59e0b" },
    { waktu: "10.20–11.00", mapel: "Matematika Lanjut",          guru: "Bu Siti",        color: "#3b82f6" },
    { waktu: "11.00–12.40", mapel: "Istirahat ☕",                 guru: "—",  color: "#a855f7" },
    { waktu: "12.40–14.00", mapel: "Matematika Lanjut",                 guru: "Bu Siti",           color: "#ef4444" },
    { waktu: "14.00–15.00", mapel: "PAI",            guru: "Pak ABM",          color: "#f97316" },
  ],
};

/* Piket dibagi merata: 36 siswa → 5 hari (7-7-7-7-8) */
const piketData = [
  { hari: "Senin",  emoji: "🌅", siswa: ["Fadel","Triana","Ezra","Wildan","Khalisa","Triani","Vira"] },
  { hari: "Selasa", emoji: "🌤️", siswa: ["Zahran","Faisal","Zetta","Faris","Afnia","Nisrina","Nafisha"] },
  { hari: "Rabu",   emoji: "⛅",  siswa: ["Fachry","Ibni","Azzam","Ramzi","Cindy","Salsabila","Naura"] },
  { hari: "Kamis",  emoji: "🌦️", siswa: ["Sabian","Fahri Rifai","Akmal","M Fahri","Faza","Marelda","Aqeela"] },
  { hari: "Jumat",  emoji: "☀️",  siswa: ["Adrian","Arkhan","Dzakrullah","Richi","Chelsea","Gandis","Khansa","Fadhia"] },
];

const hariList = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
let activeHari  = "Senin";

/* ============================================================
   RENDER — DAFTAR SISWA
   ============================================================ */
function renderSiswa() {
  const grid   = document.getElementById("siswa-grid");
  const colors = ["#ffe4b5","#b5e4ff","#e4b5ff","#b5ffcf","#ffb5d0","#b5d0ff"];
  grid.innerHTML = siswaList.map((nama, i) => `
    <div class="siswa-item" onclick="showRoast('${nama}', ${i})">
      <div class="siswa-no" style="
        background:${colors[i % colors.length]}50;
        color:${colors[i % colors.length].replace('ff','99')}
      ">${i + 1}</div>
      <span>${nama}</span>
    </div>
  `).join('');
}

function showRoast(nama, idx) {
  const ff   = document.getElementById("fun-fact");
  const roast = roastList[idx % roastList.length];
  ff.innerHTML = `<strong>${nama}</strong>: ${roast}`;
  ff.style.background = "rgba(255,255,255,0.55)";
  createSparkles();
}

/* ============================================================
   RENDER — PENGURUS
   ============================================================ */
function renderPengurus() {
  const grid = document.getElementById("pengurus-grid");
  grid.innerHTML = pengurusList.map(p => `
    <div class="pengurus-card">
      <div class="avatar" style="background:${p.bg};border-color:${p.color}40">${p.emoji}</div>
      <div class="pengurus-name">${p.nama}</div>
      <span class="pengurus-role" style="background:${p.color}20;color:${p.color}">${p.jabatan}</span>
    </div>
  `).join('');
}

/* ============================================================
   RENDER — JADWAL PELAJARAN
   ============================================================ */
function renderHariTabs() {
  const tabs = document.getElementById("hari-tabs");
  tabs.innerHTML = hariList.map(h => `
    <button class="hari-btn ${h === activeHari ? 'active' : ''}"
            onclick="switchHari('${h}')">${h}</button>
  `).join('');
}

function renderMapel() {
  const list   = document.getElementById("mapel-list");
  const mapels = jadwalPelajaran[activeHari];
  list.innerHTML = mapels.map(m => `
    <div class="mapel-item">
      <div class="mapel-time">${m.waktu}</div>
      <div class="mapel-dot" style="background:${m.color}"></div>
      <div style="flex:1">
        <div class="mapel-name">${m.mapel}</div>
        <div class="mapel-guru">${m.guru !== '—' ? '👨‍🏫 ' + m.guru : m.guru}</div>
      </div>
    </div>
  `).join('');
}

function switchHari(hari) {
  activeHari = hari;
  renderHariTabs();
  renderMapel();
}

/* ============================================================
   RENDER — PIKET
   ============================================================ */
const piketTools = ['🧹','🪣','🗑️','🧽','🚿','🪴','✨','🌊'];

function renderPiket() {
  const grid = document.getElementById("piket-grid");
  grid.innerHTML = piketData.map(p => `
    <div class="piket-day">
      <div class="piket-day-name">
        <span style="font-size:20px">${p.emoji}</span>
        ${p.hari}
        <span style="font-size:12px;font-weight:600;color:rgba(26,26,46,0.5);margin-left:auto">
          ${p.siswa.length} orang
        </span>
      </div>
      <div class="piket-members">
        ${p.siswa.map((s, j) => `
          <div class="piket-member">
            <span style="font-size:14px">${piketTools[j % piketTools.length]}</span>
            <span>${s}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ============================================================
   NAVIGASI TAB
   ============================================================ */
function showSection(name, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById('sec-' + name).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

/* ============================================================
   EFEK SPARKLE
   ============================================================ */
const sparkleEmojis = ['✨','⭐','🌟','💫','🎉','🎊','🎈'];

function createSparkles() {
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      const sp = document.createElement('div');
      sp.className   = 'sparkle';
      sp.textContent = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
      sp.style.left  = (20 + Math.random() * 60) + 'vw';
      sp.style.top   = (Math.random() * 80) + 'vh';
      document.body.appendChild(sp);
      setTimeout(() => sp.remove(), 1000);
    }, i * 100);
  }
}

/* Sparkle acak saat klik mana saja (15% chance) */
document.addEventListener('click', (e) => {
  if (Math.random() >= 0.15) return;
  const sp = document.createElement('div');
  sp.className    = 'sparkle';
  sp.textContent  = sparkleEmojis[Math.floor(Math.random() * 3)];
  sp.style.position = 'fixed';
  sp.style.left   = (e.clientX - 10) + 'px';
  sp.style.top    = (e.clientY - 10) + 'px';
  document.body.appendChild(sp);
  setTimeout(() => sp.remove(), 1000);
});

/* ============================================================
   INIT
   ============================================================ */
renderSiswa();
renderPengurus();
renderHariTabs();
renderMapel();
renderPiket();