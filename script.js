/* ============================================================
   script.js — Boda Sofía & Alejandro
   ============================================================ */

/* ============================================================
   🌸 EDITA LA FECHA Y HORA DE LA BODA
   Formato: 'AÑO-MES-DÍATHORA:MIN:SEG'
   Ejemplo: 14 junio 2025 a las 4:00 PM → '2025-06-14T16:00:00'
   ============================================================ */
const FECHA_BODA = new Date('2025-06-14T16:00:00');

/* ── Countdown ── */
function tick() {
  const diff = FECHA_BODA - new Date();

  if (diff <= 0) {
    ['days', 'hours', 'minutes', 'seconds'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '00';
    });
    return;
  }

  const dias    = Math.floor(diff / 86400000);
  const horas   = Math.floor((diff % 86400000) / 3600000);
  const minutos = Math.floor((diff % 3600000) / 60000);
  const segs    = Math.floor((diff % 60000) / 1000);

  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(val).padStart(2, '0');
  };

  set('days',    dias);
  set('hours',   horas);
  set('minutes', minutos);
  set('seconds', segs);
}

tick();
setInterval(tick, 1000);

/* ── Lightbox galería ── */
function abrirFoto(el) {
  const src = el.querySelector('img').src;
  const lb  = document.getElementById('lb');
  const img = document.getElementById('lb-img');
  if (!lb || !img) return;
  img.src = src;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function cerrarFoto() {
  const lb = document.getElementById('lb');
  if (!lb) return;
  lb.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') cerrarFoto();
});

/* ── Scroll reveal ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: .1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
