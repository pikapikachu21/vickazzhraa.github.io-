/* ============================================
   VICKA AZZAHRA — PORTFOLIO JAVASCRIPT
   ============================================ */

// ── HERO 2-SLIDE ──
let hCur = 0, hTimer;
function goHero(n) {
  document.querySelectorAll('.hero-slide').forEach((s,i) => s.classList.toggle('active', i===n));
  document.querySelectorAll('.hero-slide-dot').forEach((d,i) => d.classList.toggle('active', i===n));
  hCur = n;
}
function hNext() { goHero((hCur+1)%2); }
hTimer = setInterval(hNext, 5500);
document.querySelectorAll('.hero-slide-dot').forEach((d,i) => {
  d.addEventListener('click', () => { goHero(i); clearInterval(hTimer); hTimer = setInterval(hNext, 5500); });
});

// ── MAGANG 4-SLIDE ──
let mCur = 0, mTimer;
function goMagang(n) {
  document.querySelectorAll('.magang-slide').forEach((s,i) => s.classList.toggle('active', i===n));
  document.querySelectorAll('.magang-dot').forEach((d,i) => d.classList.toggle('active', i===n));
  document.querySelectorAll('.magang-cap').forEach((c,i) => c.classList.toggle('active', i===n));
  document.getElementById('magang-ctr').textContent = String(n+1).padStart(2,'0') + ' / 04';
  mCur = n;
}
mTimer = setInterval(() => goMagang((mCur+1)%4), 4500);
document.querySelectorAll('.magang-dot').forEach((d,i) => {
  d.addEventListener('click', () => { goMagang(i); clearInterval(mTimer); mTimer = setInterval(() => goMagang((mCur+1)%4), 4500); });
});

// ── LIGHTBOX ──
function openLB(src) {
  document.getElementById('lb-img').src = src;
  document.getElementById('lb').classList.add('open');
}
function closeLB() {
  document.getElementById('lb').classList.remove('open');
  document.getElementById('lb-img').src = '';
}
function lbBg(e) { if (e.target.id === 'lb') closeLB(); }

// ── MOBILE NAV ──
function toggleMenu() {
  document.getElementById('mobMenu').classList.toggle('open');
  document.body.classList.toggle('mob-open');
}
function closeMob() {
  document.getElementById('mobMenu').classList.remove('open');
  document.body.classList.remove('mob-open');
}

// ── SCROLL REVEAL ──
const ro = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('vis'), i * 60);
      ro.unobserve(e.target);
    }
  });
}, { threshold: 0.07 });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

// ── ACTIVE NAV HIGHLIGHT ──
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  document.querySelectorAll('section[id]').forEach(s => {
    const a = document.querySelector(`.nav-links a[href="#${s.id}"]`);
    if (a) a.style.color = y >= s.offsetTop - 100 && y < s.offsetTop + s.offsetHeight - 100
      ? 'var(--steel)' : '';
  });
});
