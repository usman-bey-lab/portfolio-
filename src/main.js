import './style.css'
// ScrollReveal loaded via CDN in index.html
// To use npm instead: npm install scrollreveal then import ScrollReveal from 'scrollreveal'

/* ===== Navbar scroll ===== */
const navbar = document.querySelector('.navbar')
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40)
})

/* =====Adding new line ===== */
/* ── Typewriter ── */
const typeText = 'Usman Amjad'
let typeIdx = 0

function typeWriter() {
  const el = document.getElementById('typewriter')
  if (!el) return
  if (typeIdx < typeText.length) {
    el.textContent += typeText[typeIdx++]
    setTimeout(typeWriter, 110)
  } else {
    setTimeout(() => {
      el.textContent = ''
      typeIdx = 0
      typeWriter()
    }, 2500)
  }
}

document.addEventListener('DOMContentLoaded', typeWriter)


/* ===== Active nav link ===== */
const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('.nav-links a')

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((a) => a.classList.remove('active'))
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`)
        if (active) active.classList.add('active')
      }
    })
  },
  { threshold: 0.4 }
)
sections.forEach((s) => sectionObserver.observe(s))

/* ===== Skill bar animation ===== */
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-fill[data-w]').forEach((bar) => {
          setTimeout(() => {
            bar.style.width = bar.dataset.w + '%'
          }, 100)
        })
      }
    })
  },
  { threshold: 0.2 }
)
document.querySelectorAll('.skill-card').forEach((c) => skillObserver.observe(c))

/* ===== Spotlight on skill cards ===== */
document.querySelectorAll('.skill-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect()
    card.style.setProperty('--mx', e.clientX - r.left + 'px')
    card.style.setProperty('--my', e.clientY - r.top + 'px')
  })
})

/* ===== Tab switching ===== */
document.querySelectorAll('.tab-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const group = btn.closest('[data-tabs]')
    const target = btn.dataset.target

    group.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'))
    group.querySelectorAll('.timeline-section').forEach((s) => {
      s.classList.remove('active')
      s.style.display = 'none'
    })

    btn.classList.add('active')
    const el = document.getElementById(target)
    if (el) {
      el.style.display = 'block'
      requestAnimationFrame(() => el.classList.add('active'))
    }
  })
})

/* ===== Show more projects ===== */
const showMoreBtn = document.getElementById('show-more-btn')
const hiddenProjects = document.querySelectorAll('.hidden-project')
let expanded = false

if (showMoreBtn) {
  showMoreBtn.addEventListener('click', () => {
    expanded = !expanded
    if (expanded) {
      hiddenProjects.forEach((p, i) => {
        setTimeout(() => p.classList.add('show'), i * 120)
      })
      showMoreBtn.innerHTML = '<i class="fas fa-chevron-up"></i> Show Less'
    } else {
      hiddenProjects.forEach((p) => p.classList.remove('show'))
      showMoreBtn.innerHTML = '<i class="fas fa-chevron-down"></i> Show More Projects'
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
    }
  })
}

/* ===== ScrollReveal ===== */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof ScrollReveal === 'undefined') return

  const sr = ScrollReveal({
    distance: '30px',
    duration: 700,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    reset: false,
    mobile: true,
  })

  sr.reveal('.hero-badge',   { origin: 'bottom', delay: 100 })
  sr.reveal('.hero-name',    { origin: 'bottom', delay: 200 })
  sr.reveal('.hero-title',   { origin: 'bottom', delay: 300 })
  sr.reveal('.hero-desc',    { origin: 'bottom', delay: 400 })
  sr.reveal('.hero-actions', { origin: 'bottom', delay: 500 })
  sr.reveal('.hero-stats',   { origin: 'bottom', delay: 650, distance: '20px' })

  sr.reveal('.section-label', { origin: 'left', delay: 100 })
  sr.reveal('.section-title', { origin: 'bottom', delay: 200 })

  sr.reveal('.about-card', { origin: 'left', delay: 300 })
  sr.reveal('.about-text', { origin: 'right', delay: 400 })

  sr.reveal('.skill-card', { origin: 'bottom', interval: 150 })
  sr.reveal('.tech-tag', { origin: 'bottom', interval: 40, delay: 200 })

  sr.reveal('.project-card', { origin: 'bottom', interval: 100 })

  sr.reveal('.cert-card', { origin: 'bottom', interval: 80 })

  sr.reveal('.contact-link-item', { origin: 'left', interval: 100 })
  sr.reveal('.contact-cta', { origin: 'right', delay: 300 })
})

/* ===== Remove loading class after boot ===== */
window.addEventListener('load', () => {
  setTimeout(() => document.body.classList.remove('loading'), 3800)
})
