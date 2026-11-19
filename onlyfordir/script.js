/* =========================================
   DIRA'S PSYCH VIBES — script.js
   Interactive logic for the full web app
   Bootstrap Icons used for all UI icons
   ========================================= */

// ============================================================
// 1. QUOTES DATABASE
// ============================================================
const quotes = [
  // — Semangat & Motivasi Umum —
  { text: 'You are braver than you believe, stronger than you seem, and smarter than you think.', author: '— A.A. Milne' },
  { text: 'Kamu nggak harus sempurna untuk memulai, tapi kamu harus memulai untuk menjadi sempurna.', author: '— Unknown' },
  { text: 'The mind is everything. What you think, you become.', author: '— Buddha' },
  { text: "It's okay to not be okay. What matters is that you keep going.", author: '— Unknown' },
  { text: 'Hard days are the best days to discover your strength.', author: '— Unknown' },
  { text: 'Progress, not perfection.', author: '— Mantra' },
  { text: 'Nggak apa-apa istirahat, asal jangan menyerah.', author: '— Wisdom' },
  { text: 'Jangan takut gagal. Gagal artinya kamu sudah berani mencoba.', author: '— Motivasi' },
  { text: 'In the middle of every difficulty lies opportunity.', author: '— Albert Einstein' },
  { text: 'Kamu layak untuk sukses — dan kamu juga layak untuk bahagia di perjalanannya.', author: "— Dira's Reminder" },
  { text: 'Hari ini mungkin berat, tapi kamu sudah melewati semua hari berat sebelumnya. Dan kamu masih di sini.', author: "— Dira's Space" },
  { text: "You don't have to be great to start, but you have to start to be great.", author: '— Zig Ziglar' },
  { text: 'Percaya proses itu susah, tapi lebih susah lagi kalau kamu nggak percaya sama sekali.', author: '— Real Talk' },
  { text: 'Jangan bandingkan perjalananmu dengan orang lain. Kamu lagi di chapter yang berbeda.', author: '— Reminder' },
  { text: 'Orang yang sabar dan tekun akan selalu menemukan jalannya.', author: '— Pepatah' },
  { text: 'Satu langkah kecil setiap hari itu lebih powerful dari satu langkah besar yang nggak pernah diambil.', author: "— Dira's Space" },
  { text: 'Sleep on it, cry if you need to, then try again tomorrow. You got this.', author: '— Kind Reminder' },
  { text: 'Kesulitan itu bukan penghalang, tapi proses pembentukan karakter.', author: '— Wisdom' },
  { text: 'Consistency is what transforms average into excellence.', author: '— Unknown' },
  { text: 'Kamu bukan terlambat. Kamu tepat waktu di versi hidupmu sendiri.', author: '— Reminder' },
  { text: 'Small steps every day still move you forward.', author: '— Unknown' },
  { text: 'Jangan habiskan energi untuk membandingkan. Gunakan untuk bertumbuh.', author: '— Wisdom' },
  { text: 'Difficult roads often lead to beautiful destinations.', author: '— Unknown' },
  { text: 'Apa yang terasa berat hari ini akan terasa ringan setelah kamu melewatinya.', author: "— Dira's Reminder" },
  { text: "You didn't come this far to only come this far.", author: '— Unknown' },
  { text: 'Setiap hari adalah kesempatan baru. Jangan bawa beban kemarin.', author: '— Morning Reminder' },
  { text: "It always seems impossible until it's done.", author: '— Nelson Mandela' },
  { text: 'Kamu nggak perlu tahu semua langkahnya — cukup ambil langkah pertama.', author: '— Wisdom' },
  { text: "Strength doesn't come from what you can do. It comes from overcoming the things you thought you couldn't.", author: '— Rikki Rogers' },
  { text: 'Kerja keras hari ini adalah istirahat yang kamu nikmati besok.', author: '— Study Truth' },

  // — Psikologi & Mental Health —
  { text: 'Healing is not linear, and neither is studying.', author: '— Psych Reminder' },
  { text: 'Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.', author: '— Unknown' },
  { text: 'Psychology taught me that every behavior has a reason. So be kind — to others and to yourself.', author: '— Psych Student Life' },
  { text: 'What mental health needs is more sunlight, more candor, more unashamed conversation.', author: '— Glenn Close' },
  { text: 'Emotions are data, not directives. Feel them, understand them, then decide.', author: '— Psych Insight' },
  { text: "The human brain is the most remarkable thing in the universe — and you're studying it. How cool is that?", author: '— Psych Nerd' },
  { text: 'Understanding yourself is the beginning of understanding everything else.', author: '— Psych Wisdom' },
  { text: 'Belajar psikologi bukan cuma belajar teori — tapi belajar jadi manusia yang lebih sadar diri.', author: '— Psych Vibes' },
  { text: "It's okay to feel everything. That's what makes you human, and what will make you a great psychologist.", author: '— Reminder' },
  { text: 'Self-awareness is the most underrated form of intelligence.', author: '— Psych Insight' },
  { text: "Your sensitivity is not a weakness — it's what makes you empathetic.", author: '— Kind Truth' },
  { text: "Mindfulness is not about clearing your mind. It's about making friends with it.", author: '— Psych Note' },
  { text: 'To study the mind is to study the most complex thing in the known universe.', author: '— Psych Wonder' },
  { text: 'Resilience bukan berarti nggak pernah jatuh — tapi tahu cara bangkit lagi.', author: '— Psych Truth' },
  { text: "You can't pour from an empty cup. Take care of yourself first.", author: '— Reminder' },

  // — Kuliah & Belajar —
  { text: 'Kuliah itu bukan tentang siapa yang paling pintar, tapi siapa yang paling nggak nyerah.', author: "— Dira's Vibe" },
  { text: 'Belajar bukan berarti menghafal semua jawaban, tapi belajar bertanya yang tepat.', author: '— Psych Vibes' },
  { text: 'Semua yang kamu pelajari hari ini adalah investasi untuk dirimu yang akan datang.', author: "— Dira's World" },
  { text: "Study hard, rest well, and trust the process you've started.", author: '— Psych Vibes' },
  { text: 'Satu halaman hari ini lebih baik dari nol halaman besok.', author: '— Study Truth' },
  { text: 'Ilmu yang bermanfaat adalah cahaya di mana pun kamu berdiri.', author: '— Wisdom' },
  { text: 'Kuliah bukan sprint — ini maraton. Jaga napas dan terus bergerak.', author: '— Study Life' },
  { text: "The expert in anything was once a beginner who didn't quit.", author: '— Unknown' },
  { text: 'Setiap SKS yang kamu ambil adalah satu langkah lebih dekat ke versi terbaik dirimu.', author: '— Campus Life' },
  { text: 'Learning never exhausts the mind — it only expands it.', author: '— Leonardo da Vinci' },
  { text: 'Nggak ada ilmu yang sia-sia. Suatu saat pasti berguna, entah kapan.', author: '— Wisdom' },
  { text: 'The goal of education is not to fill a bucket, but to light a fire.', author: '— W.B. Yeats' },
  { text: 'Belajar adalah cara paling indah untuk menghormati diri sendiri.', author: "— Dira's Truth" },
  { text: 'Nilai bukan segalanya, tapi usaha adalah segalanya.', author: '— Campus Reminder' },
  { text: 'A little progress each day adds up to big results.', author: '— Unknown' },

  // — Hari-hari Sulit —
  { text: 'Even the darkest night will end and the sun will rise.', author: '— Victor Hugo' },
  { text: 'Kamu nggak harus punya semuanya bersama. Cukup hari ini dulu.', author: '— Gentle Reminder' },
  { text: "It's okay to have a bad day. It doesn't mean you have a bad life.", author: '— Kind Truth' },
  { text: 'Hari yang berat bukan tanda kamu lemah — tapi tanda kamu manusia.', author: '— Reminder' },
  { text: 'You are allowed to be both a masterpiece and a work in progress.', author: '— Sophia Bush' },
  { text: "Rest if you must, but don't you quit.", author: '— Edgar A. Guest' },
  { text: 'Nangis itu bukan berarti menyerah. Terkadang itu justru cara kita melepaskan beban.', author: '— Psych Truth' },
  { text: 'Your hardest times often lead to the greatest moments of your life.', author: '— Roy T. Bennett' },
  { text: 'Kalau hari ini terasa berat, ingat — kamu sudah melewati 100% hari-hari sulit sebelumnya.', author: "— Dira's Space" },
  { text: "It's okay to not have everything figured out. Very few people do.", author: '— Gentle Reminder' },

  // — Inspirasi & Positivity —
  { text: 'Be yourself — everyone else is already taken.', author: '— Oscar Wilde' },
  { text: 'Kamu cukup. Kamu selalu cukup.', author: '— Affirmation' },
  { text: 'The only person you should try to be better than is who you were yesterday.', author: '— Unknown' },
  { text: 'Hidupmu terlalu berharga untuk dibandingkan dengan orang lain.', author: '— Self-Worth Reminder' },
  { text: 'Do it with passion or not at all.', author: '— Rosa Nouchette Carey' },
  { text: 'Kamu diciptakan untuk hal-hal yang lebih besar dari yang bisa kamu bayangkan sekarang.', author: "— Dira's Truth" },
  { text: "Your story isn't over yet. Keep writing.", author: '— Unknown' },
  { text: 'Ada kekuatan luar biasa di dalam dirimu yang belum sepenuhnya kamu temukan.', author: '— Reminder' },
  { text: 'The best is yet to come.', author: '— Frank Sinatra' },
  { text: 'Jangan biarkan hari kemarin memakan terlalu banyak hari ini.', author: '— Will Rogers' },
];

// ============================================================
// 2. MOOD RESPONSES DATABASE
// ============================================================
const moodResponses = {
  happy: {
    title: 'Ahh, seneng banget denger kamu happy hari ini! 🌟',
    text: 'Happy itu vibes terbaik, Dira. Nikmatin dulu perasaan ini — kamu berhak bahagia. Kalau mau channeling energinya, ini waktu yang bagus banget buat ngerjain hal-hal yang selama ini kamu tunda. Mood bagus kayak gini tuh menular, lho — jadi jangan sungkan buat nyebarin ke sekitar kamu juga ya!',
  },
  semangat: {
    title: 'Waaah, today is YOUR day, Dira! 🔥',
    text: 'Semangat kayak gini itu hadiah yang berharga banget — jangan disia-siain! Ini saatnya lakuin hal yang paling challenging dulu, karena otak kamu lagi di peak performance. Tapi sambil nge-gas, inget juga buat tetap minum dan makan ya. Semangat yang sustainable itu lebih powerful dari sprint sesaat.',
  },
  stressed: {
    title: "Hey, it's okay. Tarik napas dulu bareng aku ya... 🤍",
    text: "Stressed itu tanda kamu peduli — dan itu manusiawi banget. Kamu nggak harus beresin semuanya sekarang. Coba pilih satu hal yang paling kecil dan mulai dari sana. Kalau rasanya too much, boleh banget tulis apa yang ada di kepala kamu di bawah — nggak perlu rapih, nggak perlu logis. Kadang sekadar 'dikeluarin' udah bikin napas jadi lebih lega.",
  },
  tired: {
    title: 'Capek itu tanda kamu udah berjuang keras, Dira 💛',
    text: "Tubuhmu lagi ngomong 'tolong istirahat' — dan kamu harus dengerin itu. Capek bukan berarti kamu lemah, justru sebaliknya. Minum air putih dulu, stretching sebentar, atau kalau bisa ya tidur lebih awal. Istirahat itu bagian dari produktivitas, bukan kebalikannya. Besok kamu pasti lebih fresh!",
  },
  sad: {
    title: 'Aku di sini, kamu nggak sendirian kok 🫂',
    text: "Sedih itu valid, Dira. Nggak perlu paksa diri buat ngerasa 'baik-baik aja' kalau memang belum. Bolehin dirimu merasakan itu sepenuhnya. Kalau mau nulis apa yang kamu rasain di bawah, silakan — ini ruang amanmu dan nggak ada yang judging di sini. Curhat itu justru salah satu cara paling sehat buat olah emosi.",
  },
  mager: {
    title: 'Hehe, hari mager juga sah-sah aja kok! 😴',
    text: "Nggak selalu harus produktif itu justru sehat secara mental, Dira. Kalau emang butuh hari santai, ya nikmatin aja. Tapi kalau mau coba 'warming up', mulai dari yang paling gampang dulu — buka catatan, baca satu halaman, atau sekadar duduk di meja belajar. Seringkali itu cukup buat nyalain mood-nya pelan-pelan.",
  },
};

// ============================================================
// 3. UTILITY FUNCTIONS
// ============================================================
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

function saveToStorage(key, value) {
  try {
    localStorage.setItem('dira_' + key, JSON.stringify(value));
  } catch (e) {}
}

function loadFromStorage(key, fallback = null) {
  try {
    const v = localStorage.getItem('dira_' + key);
    return v !== null ? JSON.parse(v) : fallback;
  } catch (e) {
    return fallback;
  }
}

// ============================================================
// 4. FLOATING PARTICLES
// ============================================================
function initParticles() {
  const container = document.getElementById('particles');
  // Bootstrap Icons class names for floating particles
  const icons = ['bi-stars', 'bi-star-fill', 'bi-flower1', 'bi-flower2', 'bi-heart-fill', 'bi-moon-stars-fill', 'bi-gem', 'bi-sparkle', 'bi-star', 'bi-heart'];
  const count = 18;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('i');
    el.className = 'bi ' + icons[Math.floor(Math.random() * icons.length)] + ' particle';
    el.style.left = Math.random() * 100 + 'vw';
    el.style.fontSize = 0.65 + Math.random() * 0.8 + 'rem';
    el.style.animationDuration = 12 + Math.random() * 20 + 's';
    el.style.animationDelay = Math.random() * 15 + 's';
    el.style.opacity = '0';
    // Alternate particle colors
    const colors = ['var(--lavender)', 'var(--pink)', 'var(--mint)', '#c9b8e888'];
    el.style.color = colors[Math.floor(Math.random() * colors.length)];
    container.appendChild(el);
  }
}

// ============================================================
// 5. TYPING EFFECT — HERO
// ============================================================
function initTyping() {
  const phrases = ['Wanita Petarung😎', 'Future Psychologist 💼', 'Pemerhati Jiwa Manusia 🫶', 'Pembaca Emosi Terbaik 💜'];
  const el = document.getElementById('typingText');
  if (!el) return;

  let pIdx = 0,
    cIdx = 0,
    deleting = false;

  function type() {
    const current = phrases[pIdx];
    if (!deleting) {
      el.textContent = current.slice(0, ++cIdx);
      if (cIdx === current.length) {
        deleting = true;
        setTimeout(type, 2200);
        return;
      }
    } else {
      el.textContent = current.slice(0, --cIdx);
      if (cIdx === 0) {
        deleting = false;
        pIdx = (pIdx + 1) % phrases.length;
        setTimeout(type, 400);
        return;
      }
    }
    setTimeout(type, deleting ? 45 : 70);
  }
  type();
}

// ============================================================
// 6. QUOTES SYSTEM
// ============================================================
let currentQuoteIdx = 0;
let savedQuotes = loadFromStorage('savedQuotes', []);

function getRandomQuoteIdx() {
  let idx;
  do {
    idx = Math.floor(Math.random() * quotes.length);
  } while (idx === currentQuoteIdx && quotes.length > 1);
  return idx;
}

function displayQuote(idx, animate = false) {
  const inner = document.getElementById('quoteCardInner');
  const textEl = document.getElementById('quoteText');
  const authorEl = document.getElementById('quoteAuthor');

  if (animate) {
    inner.classList.add('flipping');
    setTimeout(() => {
      textEl.textContent = quotes[idx].text;
      authorEl.textContent = quotes[idx].author;
      inner.classList.remove('flipping');
    }, 320);
  } else {
    textEl.textContent = quotes[idx].text;
    authorEl.textContent = quotes[idx].author;
  }
  currentQuoteIdx = idx;

  // Reset copy button
  const btnCopy = document.getElementById('btnCopyQuote');
  btnCopy.classList.remove('copied');
  btnCopy.textContent = '📋 Copy';
}

function initQuotes() {
  // Show today's quote (deterministic by date)
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  currentQuoteIdx = dayOfYear % quotes.length;
  displayQuote(currentQuoteIdx);

  document.getElementById('btnNewQuote').addEventListener('click', () => {
    const nextIdx = getRandomQuoteIdx();
    displayQuote(nextIdx, true);
  });

  document.getElementById('btnCopyQuote').addEventListener('click', function () {
    const q = quotes[currentQuoteIdx];
    navigator.clipboard.writeText(`"${q.text}" ${q.author}`).then(() => {
      this.classList.add('copied');
      this.style.background = 'linear-gradient(135deg, #b8e8d4, #5bc49b)';
      this.style.color = '#0d2a1f';
      document.getElementById('copyIcon').className = 'bi bi-clipboard-check';
      document.getElementById('copyLabel').textContent = 'Tersalin!';
      showToast('Quote berhasil disalin!');
      setTimeout(() => {
        this.classList.remove('copied');
        this.style.background = '';
        this.style.color = '';
        document.getElementById('copyIcon').className = 'bi bi-clipboard';
        document.getElementById('copyLabel').textContent = 'Copy';
      }, 2000);
    });
  });

  document.getElementById('btnFavQuote').addEventListener('click', function () {
    const q = quotes[currentQuoteIdx];
    const exists = savedQuotes.some((s) => s.text === q.text);
    if (exists) {
      showToast('Quote ini sudah ada di favorit!');
      return;
    }
    savedQuotes.push(q);
    saveToStorage('savedQuotes', savedQuotes);
    document.getElementById('favIcon').className = 'bi bi-bookmark-heart-fill';
    document.getElementById('favLabel').textContent = 'Tersimpan!';
    showToast('Quote disimpan ke favorit!');
    renderSavedQuotes();
    setTimeout(() => {
      document.getElementById('favIcon').className = 'bi bi-bookmark-heart';
      document.getElementById('favLabel').textContent = 'Simpan';
    }, 2000);
  });

  renderSavedQuotes();
}

function renderSavedQuotes() {
  const area = document.getElementById('savedQuotesArea');
  const list = document.getElementById('savedQuotesList');
  if (savedQuotes.length === 0) {
    area.style.display = 'none';
    return;
  }
  area.style.display = 'block';
  list.innerHTML = savedQuotes
    .map(
      (q, i) => `
    <div style="
      background: rgba(201,184,232,0.07);
      border: 1px solid rgba(201,184,232,0.15);
      border-radius: 12px;
      padding: 14px 16px;
      margin-bottom: 10px;
      display: flex;
      gap: 12px;
      align-items: flex-start;
    ">
      <div style="flex:1;">
        <p style="font-size:0.9rem;color:var(--text-secondary);font-style:italic;line-height:1.5;margin-bottom:4px;">"${q.text}"</p>
        <p style="font-size:0.78rem;color:var(--lavender);font-weight:600;">${q.author}</p>
      </div>
      <button onclick="removeSavedQuote(${i})" style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:1.1rem;opacity:0.6;transition:opacity 0.2s;padding:0 4px;" title="Hapus" aria-label="Hapus quote dari favorit"><i class='bi bi-trash3'></i></button>
    </div>
  `,
    )
    .join('');
}

function removeSavedQuote(i) {
  savedQuotes.splice(i, 1);
  saveToStorage('savedQuotes', savedQuotes);
  renderSavedQuotes();
  showToast('Quote dihapus dari favorit.');
}

// ============================================================
// 7. MOOD CHECK-IN
// ============================================================
function initMood() {
  const btns = document.querySelectorAll('.mood-btn');
  const responseEl = document.getElementById('moodResponse');
  const titleEl = document.getElementById('moodResponseTitle');
  const textEl = document.getElementById('moodResponseText');

  // Restore saved mood for today
  const savedMood = loadFromStorage('todayMood', null);
  if (savedMood) activateMood(savedMood, btns, responseEl, titleEl, textEl);

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const mood = btn.dataset.mood;
      activateMood(mood, btns, responseEl, titleEl, textEl);
      saveToStorage('todayMood', mood);
    });
  });

  // Diary init
  initDiary();
}

function activateMood(mood, btns, responseEl, titleEl, textEl) {
  btns.forEach((b) => {
    b.classList.remove('active');
    b.setAttribute('aria-pressed', 'false');
  });
  const activeBtn = document.getElementById('mood-' + mood);
  if (activeBtn) {
    activeBtn.classList.add('active');
    activeBtn.setAttribute('aria-pressed', 'true');
  }

  const r = moodResponses[mood];
  if (r) {
    titleEl.textContent = r.title;
    textEl.textContent = r.text;
    responseEl.classList.add('show');
  }
}

// ============================================================
// 7b. DIARY SYSTEM
// ============================================================
const MOOD_ICONS = {
  happy: 'bi-emoji-smile-fill',
  semangat: 'bi-emoji-laughing-fill',
  stressed: 'bi-emoji-dizzy-fill',
  tired: 'bi-emoji-expressionless-fill',
  sad: 'bi-emoji-frown-fill',
  mager: 'bi-emoji-neutral-fill',
};

const MOOD_LABELS = {
  happy: 'Happy',
  semangat: 'Semangat',
  stressed: 'Stressed',
  tired: 'Capek',
  sad: 'Sedih',
  mager: 'Mager',
};

let diaryEntries = loadFromStorage('diaryEntries', []);

function initDiary() {
  renderDiaryEntries();

  document.getElementById('btnSaveJournal').addEventListener('click', () => {
    const textarea = document.getElementById('journalInput');
    const text = textarea.value.trim();
    if (!text) {
      showToast('Tulis dulu ceritamu ya~');
      return;
    }

    const currentMood = loadFromStorage('todayMood', null);
    const entry = {
      id: Date.now(),
      date: new Date().toISOString(),
      text: text,
      mood: currentMood,
    };

    diaryEntries.unshift(entry); // newest first
    saveToStorage('diaryEntries', diaryEntries);
    textarea.value = '';
    renderDiaryEntries();
    showToast('Catatan disimpan ke diary!');
  });
}

function renderDiaryEntries() {
  const area = document.getElementById('diaryHistoryArea');
  const list = document.getElementById('diaryList');
  const counter = document.getElementById('diaryCount');

  if (!area) return;

  if (diaryEntries.length === 0) {
    area.style.display = 'none';
    return;
  }

  area.style.display = 'block';
  counter.textContent = diaryEntries.length + ' catatan';

  list.innerHTML = diaryEntries
    .map((entry) => {
      const d = new Date(entry.date);
      const dateStr = d.toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
      const timeStr = d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

      const moodBadge = entry.mood
        ? `<span class="diary-mood-badge">
           <i class="bi ${MOOD_ICONS[entry.mood] || 'bi-emoji-smile'}"></i>
           ${MOOD_LABELS[entry.mood] || ''}
         </span>`
        : '';

      const escapedText = entry.text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');

      return `
      <div class="diary-entry" id="diary-${entry.id}">
        <div class="diary-entry-header">
          <div class="diary-entry-meta">
            <i class="bi bi-calendar3"></i>
            <span class="diary-date">${dateStr}</span>
            <span class="diary-time">${timeStr}</span>
            ${moodBadge}
          </div>
          <button
            class="diary-delete-btn"
            onclick="deleteDiaryEntry(${entry.id})"
            aria-label="Hapus catatan ini"
            title="Hapus"
          ><i class="bi bi-trash3"></i></button>
        </div>
        <p class="diary-entry-text">${escapedText}</p>
      </div>
    `;
    })
    .join('');
}

function deleteDiaryEntry(id) {
  if (!confirm('Hapus catatan ini?')) return;
  diaryEntries = diaryEntries.filter((e) => e.id !== id);
  saveToStorage('diaryEntries', diaryEntries);
  renderDiaryEntries();
  showToast('Catatan dihapus.');
}

// ============================================================
// 8. STUDY TRACKER — Today check-in + weekly view
// ============================================================
function initStudyTracker() {
  const studyData = loadFromStorage('studyDays', {});
  const today = new Date();
  const todayKey = today.toISOString().slice(0, 10);

  // Set today's date text
  const todayStr = today.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  document.getElementById('todayDateDisplay').textContent = todayStr;

  // Set initial button state
  updateTodayButton(!!studyData[todayKey]);

  // Today button toggle
  document.getElementById('btnTodayStudy').addEventListener('click', () => {
    studyData[todayKey] = !studyData[todayKey];
    if (!studyData[todayKey]) delete studyData[todayKey];
    saveToStorage('studyDays', studyData);
    updateTodayButton(!!studyData[todayKey]);
    renderWeekGrid(studyData);
    updateStreakDisplay(studyData);
    if (studyData[todayKey]) showToast('Mantap! Hari ini tercatat belajar!');
    else showToast('Oke, hapus catatan hari ini.');
  });

  renderWeekGrid(studyData);
  updateStreakDisplay(studyData);
}

function updateTodayButton(isDone) {
  const btn = document.getElementById('btnTodayStudy');
  const icon = document.getElementById('todayStudyIcon');
  const label = document.getElementById('todayStudyLabel');
  if (isDone) {
    btn.classList.add('done');
    btn.setAttribute('aria-pressed', 'true');
    icon.className = 'bi bi-check-circle-fill';
    label.textContent = 'Sudah belajar!';
  } else {
    btn.classList.remove('done');
    btn.setAttribute('aria-pressed', 'false');
    icon.className = 'bi bi-circle';
    label.textContent = 'Belum belajar';
  }
}

function renderWeekGrid(studyData) {
  const grid = document.getElementById('weekGrid');
  const today = new Date();
  const todayKey = today.toISOString().slice(0, 10);
  const dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

  // Find Monday of current week
  const weekStart = new Date(today);
  const dow = today.getDay(); // 0=Sun
  const daysFromMon = dow === 0 ? 6 : dow - 1;
  weekStart.setDate(weekStart.getDate() - daysFromMon);

  grid.innerHTML = '';
  for (let i = 0; i < 7; i++) {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);
    const key = d.toISOString().slice(0, 10);
    const isToday = key === todayKey;
    const isDone = !!studyData[key];

    const cell = document.createElement('div');
    cell.className = 'week-day' + (isDone ? ' done' : '') + (isToday ? ' today' : '');
    cell.setAttribute('role', 'gridcell');
    cell.setAttribute('aria-label', `${dayNames[d.getDay()]} ${d.getDate()}${isDone ? ' - belajar' : ''}${isToday ? ' (hari ini)' : ''}`);
    cell.innerHTML = `
      <span class="week-day-name">${dayNames[d.getDay()]}</span>
      <span class="week-day-num">${d.getDate()}</span>
      <span class="week-day-dot"></span>
    `;
    grid.appendChild(cell);
  }
}

function updateStreakDisplay(studyData) {
  let streak = 0,
    total = Object.keys(studyData).length;
  const today = new Date();
  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    if (studyData[key]) streak++;
    else break;
  }
  document.getElementById('streakCount').textContent = streak;
  document.getElementById('totalCount').textContent = total;
}

// ============================================================
// 9. TO-DO LIST
// ============================================================
let todos = loadFromStorage('todos', []);

function initTodo() {
  renderTodos();

  const input = document.getElementById('todoInput');
  document.getElementById('btnAddTodo').addEventListener('click', addTodo);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTodo();
  });
}

function addTodo() {
  const input = document.getElementById('todoInput');
  const text = input.value.trim();
  if (!text) {
    showToast('Tulis dulu tugasnya! ✏️');
    return;
  }
  todos.push({ text, done: false, id: Date.now() });
  saveToStorage('todos', todos);
  input.value = '';
  renderTodos();
}

function toggleTodo(id) {
  const t = todos.find((t) => t.id === id);
  if (t) t.done = !t.done;
  saveToStorage('todos', todos);
  renderTodos();
  if (t && t.done) showToast('Yeay, tugas selesai! 🎉');
}

function deleteTodo(id) {
  todos = todos.filter((t) => t.id !== id);
  saveToStorage('todos', todos);
  renderTodos();
}

function renderTodos() {
  const list = document.getElementById('todoList');
  const done = todos.filter((t) => t.done).length;
  const total = todos.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  document.getElementById('todoProgressBar').style.width = pct + '%';

  if (todos.length === 0) {
    list.innerHTML = `<li style="text-align:center;color:var(--text-muted);font-size:0.88rem;padding:16px;">Belum ada tugas. Yuk tambah!</li>`;
    return;
  }

  list.innerHTML = todos
    .map(
      (t) => `
    <li class="todo-item ${t.done ? 'done-item' : ''}" id="todo-${t.id}" role="listitem">
      <button
        class="todo-check"
        onclick="toggleTodo(${t.id})"
        aria-label="${t.done ? 'Tandai belum selesai' : 'Tandai selesai'}: ${t.text}"
        aria-pressed="${t.done}"
      ><i class="bi ${t.done ? 'bi-check-lg' : ''}"></i></button>
      <span class="todo-text">${t.text}</span>
      <button class="todo-delete" onclick="deleteTodo(${t.id})" aria-label="Hapus tugas: ${t.text}"><i class="bi bi-trash3"></i></button>
    </li>
  `,
    )
    .join('');
}

// ============================================================
// 10. POMODORO TIMER
// ============================================================
let pomoState = {
  minutes: 25,
  seconds: 0,
  total: 25 * 60,
  remaining: 25 * 60,
  running: false,
  interval: null,
  mode: 'Focus Time',
};

const pomoTips = {};

function getPomoCircumference() {
  return 2 * Math.PI * 80;
} // r=80

function updatePomoUI() {
  const mins = String(Math.floor(pomoState.remaining / 60)).padStart(2, '0');
  const secs = String(pomoState.remaining % 60).padStart(2, '0');
  document.getElementById('pomoTime').textContent = `${mins}:${secs}`;
  document.getElementById('pomoMode').textContent = pomoState.mode;

  const circ = getPomoCircumference();
  const progress = pomoState.remaining / pomoState.total;
  const offset = circ * (1 - progress);
  document.getElementById('pomoRing').style.strokeDashoffset = offset;
  document.getElementById('pomoRing').style.strokeDasharray = circ;
}

function pomoTick() {
  if (pomoState.remaining <= 0) {
    clearInterval(pomoState.interval);
    pomoState.running = false;
    const startBtn = document.getElementById('btnPomoStart');
    document.getElementById('pomoPlayIcon').className = 'bi bi-play-fill';
    document.getElementById('pomoStartLabel').textContent = 'Mulai';
    showToast(pomoState.mode === 'Focus Time' ? 'Sesi fokus selesai! Waktunya istirahat~' : 'Istirahat selesai! Siap fokus lagi?');
    if (Notification && Notification.permission === 'granted') {
      new Notification("Dira's Timer", {
        body: pomoState.mode === 'Focus Time' ? 'Sesi fokus selesai! Istirahat dulu ya.' : 'Yuk fokus lagi!',
        icon: 'immmg/dirr.jpeg',
      });
    }
    return;
  }
  pomoState.remaining--;
  updatePomoUI();
}

function initPomodoro() {
  updatePomoUI();

  document.getElementById('btnPomoStart').addEventListener('click', function () {
    if (pomoState.running) {
      clearInterval(pomoState.interval);
      pomoState.running = false;
      document.getElementById('pomoPlayIcon').className = 'bi bi-play-fill';
      document.getElementById('pomoStartLabel').textContent = 'Lanjut';
    } else {
      pomoState.interval = setInterval(pomoTick, 1000);
      pomoState.running = true;
      document.getElementById('pomoPlayIcon').className = 'bi bi-pause-fill';
      document.getElementById('pomoStartLabel').textContent = 'Pause';
      if (Notification && Notification.permission === 'default') {
        Notification.requestPermission();
      }
    }
  });

  document.getElementById('btnPomoReset').addEventListener('click', function () {
    clearInterval(pomoState.interval);
    pomoState.running = false;
    pomoState.remaining = pomoState.total;
    document.getElementById('pomoPlayIcon').className = 'bi bi-play-fill';
    document.getElementById('pomoStartLabel').textContent = 'Mulai';
    updatePomoUI();
  });

  // Mode tabs
  document.querySelectorAll('.pomo-tab').forEach((tab) => {
    tab.addEventListener('click', function () {
      clearInterval(pomoState.interval);
      pomoState.running = false;
      document.getElementById('btnPomoStart').textContent = '▶ Mulai';

      document.querySelectorAll('.pomo-tab').forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');

      const mins = parseInt(this.dataset.minutes);
      pomoState.mode = this.dataset.mode;
      pomoState.total = mins * 60;
      pomoState.remaining = pomoState.total;
      updatePomoUI();
    });
  });
}

// ============================================================
// 11. SMOOTH NAV ACTIVE STATE
// ============================================================
function initNavHighlight() {
  const sections = ['hero', 'quotes', 'mood', 'study', 'pomodoro'];
  const links = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove('active'));
          const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    },
    { threshold: 0.4, rootMargin: '-80px 0px 0px 0px' },
  );

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

// ============================================================
// 12. SCROLL REVEAL
// ============================================================
function initScrollReveal() {
  const cards = document.querySelectorAll('.section.glass-card');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeSlideUp 0.6s ease both';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  cards.forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    observer.observe(card);
  });
}

// ============================================================
// 14. FLOATING MUSIC PLAYER — Dira's Vibes
// ============================================================
const mpPlaylist = [
  {
    title: '1000x',
    artist: 'Ghea Indrawari',
    file: 'sound/1000X.mp4',
    gradient: 'linear-gradient(135deg,#667eea,#764ba2)',
  },
  {
    title: 'Klebus',
    artist: 'Guyon Waton',
    file: 'sound/KLEBUS.mp4',
    gradient: 'linear-gradient(135deg,#f093fb,#f5576c)',
  },
  {
    title: 'Slipping Through My Fingers',
    artist: 'ABBA',
    file: 'sound/Slipping Through My Fingers.mp4',
    gradient: 'linear-gradient(135deg,#43c6ac,#191654)',
  },
  {
    title: 'Smaragita',
    artist: 'Silvy Kumalasari ft Sadewok',
    file: 'sound/Smaragita.mp3',
    gradient: 'linear-gradient(135deg,#11998e,#38ef7d)',
  },
  {
    title: 'The Cure',
    artist: 'Lady Gaga',
    file: 'sound/the cure.mp3',
    gradient: 'linear-gradient(135deg,#fa709a,#fee140)',
  },
];

const mpState = {
  currentIdx: 0,
  isPlaying: false,
  isShuffle: false,
  repeatMode: 0, // 0=off  1=repeat-all  2=repeat-one
  isMuted: false,
  prevVol: 0.8,
  likedTracks: loadFromStorage('mpLiked', {}),
};

function initMusicPlayer() {
  const audio = document.getElementById('mpAudio');

  mpRenderPlaylist();
  mpLoadTrack(0, false);
  audio.volume = 0.8;

  // Play / Pause
  document.getElementById('mpPlayBtn').addEventListener('click', mpTogglePlay);
  document.getElementById('mpPillPlay').addEventListener('click', mpTogglePlay);

  // Prev / Next
  document.getElementById('mpPrev').addEventListener('click', mpPrev);
  document.getElementById('mpNext').addEventListener('click', mpNext);

  // Shuffle
  document.getElementById('mpShuffle').addEventListener('click', mpToggleShuffle);

  // Repeat
  document.getElementById('mpRepeat').addEventListener('click', mpCycleRepeat);

  // Mute
  document.getElementById('mpMute').addEventListener('click', mpToggleMute);

  // Volume slider
  document.getElementById('mpVolume').addEventListener('input', (e) => {
    audio.volume = e.target.value / 100;
    mpState.prevVol = audio.volume;
    mpState.isMuted = audio.volume === 0;
    mpUpdateMuteIcon();
  });

  // Heart (main player)
  document.getElementById('mpHeart').addEventListener('click', () => mpToggleLike(mpState.currentIdx));

  // Progress bar — click & drag seek
  const track = document.getElementById('mpProgressTrack');
  let seeking = false;
  const seekTo = (e) => {
    const rect = track.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    if (audio.duration) audio.currentTime = pct * audio.duration;
  };
  track.addEventListener('mousedown', (e) => {
    seeking = true;
    seekTo(e);
  });
  document.addEventListener('mousemove', (e) => {
    if (seeking) seekTo(e);
  });
  document.addEventListener('mouseup', () => {
    seeking = false;
  });

  // Audio events
  audio.addEventListener('timeupdate', mpUpdateProgress);
  audio.addEventListener('loadedmetadata', () => {
    document.getElementById('mpDuration').textContent = mpFmtTime(audio.duration);
  });
  audio.addEventListener('ended', mpOnEnded);
  audio.addEventListener('error', () => {
    showToast('⚠️ File lagu tidak dapat diputar.');
    mpSetPlayingState(false);
  });

  // Minimize / Expand
  document.getElementById('mpMinimize').addEventListener('click', mpMinimize);
  document.getElementById('mpPillExpand').addEventListener('click', mpExpand);

  // Tracklist toggle
  document.getElementById('mpPlaylistToggle').addEventListener('click', mpToggleTracklist);
}

/* ---- Track loading ---- */
function mpLoadTrack(idx, autoPlay = true) {
  const audio = document.getElementById('mpAudio');
  const t = mpPlaylist[idx];
  mpState.currentIdx = idx;

  audio.src = t.file;
  audio.load();

  // Main player UI
  document.getElementById('mpTitle').textContent = t.title;
  document.getElementById('mpArtist').textContent = t.artist;
  document.getElementById('mpCoverArt').style.background = t.gradient;
  document.getElementById('mpProgressFill').style.width = '0%';
  document.getElementById('mpProgressThumb').style.left = '0%';
  document.getElementById('mpCurrentTime').textContent = '0:00';
  document.getElementById('mpDuration').textContent = '0:00';
  document.getElementById('mpProgressTrack').setAttribute('aria-valuenow', 0);

  // Pill UI
  document.getElementById('mpPillTitle').textContent = t.title;
  document.getElementById('mpPillArtist').textContent = t.artist;
  document.getElementById('mpPillCover').style.background = t.gradient;

  mpUpdateHeartUI(idx);

  // Highlight active track in list
  document.querySelectorAll('.mp-playlist-item').forEach((el, i) => {
    el.classList.toggle('active', i === idx);
  });

  if (autoPlay) {
    audio
      .play()
      .then(() => mpSetPlayingState(true))
      .catch(() => {});
  } else {
    mpSetPlayingState(false);
  }
}

/* ---- Play / Pause ---- */
function mpTogglePlay() {
  const audio = document.getElementById('mpAudio');
  if (audio.paused) {
    audio
      .play()
      .then(() => mpSetPlayingState(true))
      .catch(() => {});
  } else {
    audio.pause();
    mpSetPlayingState(false);
  }
}

function mpSetPlayingState(playing) {
  mpState.isPlaying = playing;
  const icon = playing ? 'bi-pause-fill' : 'bi-play-fill';
  document.getElementById('mpPlayIcon').className = `bi ${icon}`;
  document.getElementById('mpPillPlayIcon').className = `bi ${icon}`;
  document.getElementById('mpWave').classList.toggle('playing', playing);
  document.getElementById('musicPlayer').classList.toggle('playing-glow', playing);
}

/* ---- Prev / Next ---- */
function mpPrev() {
  const audio = document.getElementById('mpAudio');
  // If more than 3s played, restart instead of going back
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }
  const idx = (mpState.currentIdx - 1 + mpPlaylist.length) % mpPlaylist.length;
  mpLoadTrack(idx, mpState.isPlaying);
}

function mpNext() {
  let idx;
  if (mpState.isShuffle) {
    do {
      idx = Math.floor(Math.random() * mpPlaylist.length);
    } while (idx === mpState.currentIdx && mpPlaylist.length > 1);
  } else {
    idx = (mpState.currentIdx + 1) % mpPlaylist.length;
  }
  mpLoadTrack(idx, mpState.isPlaying);
}

/* ---- Track ended ---- */
function mpOnEnded() {
  if (mpState.repeatMode === 2) {
    // Repeat one
    const audio = document.getElementById('mpAudio');
    audio.currentTime = 0;
    audio
      .play()
      .then(() => mpSetPlayingState(true))
      .catch(() => {});
  } else if (mpState.repeatMode === 1 || mpState.currentIdx < mpPlaylist.length - 1) {
    // Repeat all OR not last track
    mpNext();
    setTimeout(() => {
      document
        .getElementById('mpAudio')
        .play()
        .then(() => mpSetPlayingState(true))
        .catch(() => {});
    }, 80);
  } else {
    mpSetPlayingState(false);
  }
}

/* ---- Shuffle ---- */
function mpToggleShuffle() {
  mpState.isShuffle = !mpState.isShuffle;
  document.getElementById('mpShuffle').classList.toggle('active', mpState.isShuffle);
  showToast(mpState.isShuffle ? 'Shuffle aktif 🔀' : 'Shuffle nonaktif');
}

/* ---- Repeat cycle ---- */
function mpCycleRepeat() {
  mpState.repeatMode = (mpState.repeatMode + 1) % 3;
  const icon = document.getElementById('mpRepeatIcon');
  const btn = document.getElementById('mpRepeat');
  const msgs = ['Repeat nonaktif', 'Repeat all 🔁', 'Repeat one 🔂'];
  icon.className = mpState.repeatMode === 2 ? 'bi bi-repeat-1' : 'bi bi-repeat';
  btn.classList.toggle('active', mpState.repeatMode > 0);
  showToast(msgs[mpState.repeatMode]);
}

/* ---- Mute ---- */
function mpToggleMute() {
  const audio = document.getElementById('mpAudio');
  mpState.isMuted = !mpState.isMuted;
  audio.muted = mpState.isMuted;
  if (!mpState.isMuted) {
    audio.volume = mpState.prevVol || 0.8;
    document.getElementById('mpVolume').value = Math.round((mpState.prevVol || 0.8) * 100);
  }
  mpUpdateMuteIcon();
}

function mpUpdateMuteIcon() {
  const icon = document.getElementById('mpMuteIcon');
  if (mpState.isMuted) {
    icon.className = 'bi bi-volume-mute-fill';
  } else {
    icon.className = document.getElementById('mpAudio').volume > 0.5 ? 'bi bi-volume-up-fill' : 'bi bi-volume-down-fill';
  }
}

/* ---- Like / Heart ---- */
function mpToggleLike(idx) {
  mpState.likedTracks[idx] = !mpState.likedTracks[idx];
  saveToStorage('mpLiked', mpState.likedTracks);
  mpUpdateHeartUI(idx);
  mpRenderPlaylist();
  showToast(mpState.likedTracks[idx] ? '❤️ Ditambahkan ke favorit!' : '💔 Dihapus dari suka');
}

function mpUpdateHeartUI(idx) {
  const liked = !!mpState.likedTracks[idx];
  document.getElementById('mpHeart').classList.toggle('liked', liked);
  document.getElementById('mpHeartIcon').className = liked ? 'bi bi-heart-fill' : 'bi bi-heart';
}

/* ---- Progress update ---- */
function mpUpdateProgress() {
  const audio = document.getElementById('mpAudio');
  if (!audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  document.getElementById('mpProgressFill').style.width = pct + '%';
  document.getElementById('mpProgressThumb').style.left = pct + '%';
  document.getElementById('mpProgressTrack').setAttribute('aria-valuenow', Math.round(pct));
  document.getElementById('mpCurrentTime').textContent = mpFmtTime(audio.currentTime);
}

function mpFmtTime(s) {
  if (!s || isNaN(s)) return '0:00';
  const m = Math.floor(s / 60);
  const ss = String(Math.floor(s % 60)).padStart(2, '0');
  return `${m}:${ss}`;
}

/* ---- Minimize / Expand ---- */
function mpMinimize() {
  const player = document.getElementById('musicPlayer');
  const pill = document.getElementById('mpPill');
  player.classList.add('slide-out');
  setTimeout(() => {
    player.style.display = 'none';
    player.classList.remove('slide-out');
    pill.style.display = 'flex';
  }, 380);
}

function mpExpand() {
  const player = document.getElementById('musicPlayer');
  const pill = document.getElementById('mpPill');
  pill.style.display = 'none';
  player.style.display = 'flex';
  player.style.opacity = '0';
  player.style.transform = 'translateY(14px) scale(0.96)';
  requestAnimationFrame(() => {
    player.style.transition = 'transform 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.38s ease';
    player.style.opacity = '1';
    player.style.transform = '';
  });
}

/* ---- Tracklist toggle ---- */
function mpToggleTracklist() {
  const wrap = document.getElementById('mpPlaylistWrap');
  const open = wrap.classList.toggle('open');
  document.getElementById('mpPlaylistToggle').classList.toggle('active', open);
}

/* ---- Render tracklist ---- */
function mpRenderPlaylist() {
  const el = document.getElementById('mpPlaylistEl');
  if (!el) return;
  el.innerHTML = mpPlaylist
    .map(
      (t, i) => `
    <li class="mp-playlist-item${i === mpState.currentIdx ? ' active' : ''}"
        id="mpItem${i}"
        onclick="mpLoadTrack(${i}, true)"
        tabindex="0"
        onkeydown="if(event.key==='Enter')mpLoadTrack(${i},true)"
        role="listitem"
        aria-label="${t.title} oleh ${t.artist}">
      <span class="mp-item-num">${i + 1}</span>
      <i class="bi bi-soundwave mp-item-wave"></i>
      <div class="mp-item-cover" style="background:${t.gradient};"></div>
      <div class="mp-item-info">
        <div class="mp-item-title">${t.title}</div>
        <div class="mp-item-artist">${t.artist}</div>
      </div>
      <button
        class="mp-item-heart${mpState.likedTracks[i] ? ' liked' : ''}"
        onclick="event.stopPropagation();mpToggleLike(${i})"
        aria-label="${mpState.likedTracks[i] ? 'Unlike' : 'Like'} ${t.title}"
      ><i class="bi ${mpState.likedTracks[i] ? 'bi-heart-fill' : 'bi-heart'}"></i></button>
    </li>
  `,
    )
    .join('');
}

// ============================================================
// 15. BOOT — Initialize Everything
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initTyping();
  initQuotes();
  initMood();
  initStudyTracker();
  initTodo();
  initPomodoro();
  initMusicPlayer();
  initNavHighlight();
  initScrollReveal();

  // Welcome toast after short delay
  setTimeout(() => showToast('Haii Dira! Selamat datang di ruangmu~'), 1200);
});
