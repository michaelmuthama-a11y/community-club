// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');
const yearEl = document.getElementById('year');

if (navToggle){
  navToggle.setAttribute('aria-controls', 'site-nav');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(!!isOpen));
  });
}

if (yearEl){ yearEl.textContent = new Date().getFullYear(); }

// Simple contact form validation (if present)
document.addEventListener('submit', (e) => {
  const form = e.target;
  if (form && form.matches('.contact-form')){
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    if (!name || !email || !email.includes('@')){
      alert('Please provide a valid name and email.');
      return;
    }
    alert('Thanks! Your message was received (demo).');
    form.reset();
  }
});

/* Site-wide data utilities and rendering (stores in localStorage so data appears across pages) */
const SITE_DATA_KEY = 'club_site_data_v1';
const DEFAULT_SITE_DATA = {
  events: [
    { title: 'Monthly Meetup', desc: 'Every first Saturday — talks, networking, and refreshments.' },
    { title: 'Workshop: Web Basics', desc: 'Hands-on workshop for beginners. Bring a laptop.' },
    { title: 'Community Project Day', desc: 'Volunteer-powered projects helping local causes.' }
  ]
};

function getSiteData(){
  try{
    const raw = localStorage.getItem(SITE_DATA_KEY);
    return raw ? JSON.parse(raw) : DEFAULT_SITE_DATA;
  }catch(e){
    return DEFAULT_SITE_DATA;
  }
}

function saveSiteData(data){
  try{ localStorage.setItem(SITE_DATA_KEY, JSON.stringify(data)); }catch(e){ /* ignore */ }
}

function renderEvents(){
  const grid = document.querySelector('.event-grid');
  if (!grid) return;
  const data = getSiteData();
  grid.innerHTML = '';
  data.events.forEach(ev => {
    const item = document.createElement('div');
    item.className = 'event';
    const h3 = document.createElement('h3'); h3.textContent = ev.title;
    const p = document.createElement('p'); p.textContent = ev.desc;
    item.appendChild(h3); item.appendChild(p);
    grid.appendChild(item);
  });
}

// Public API to update site data from any page
window.updateSiteData = function(updater){
  const data = getSiteData();
  updater(data);
  saveSiteData(data);
  renderEvents();
};

// Convenience: add an event
window.addSiteEvent = function(title, desc){
  if (!title) return;
  updateSiteData(d => d.events.unshift({ title, desc: desc || '' }));
};

// If there's a form with class `add-event-form`, wire it to add events
document.addEventListener('DOMContentLoaded', () => {
  renderEvents();
  const addForm = document.querySelector('.add-event-form');
  if (addForm){
    addForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const t = addForm.querySelector('[name="title"]');
      const d = addForm.querySelector('[name="desc"]');
      if (t && t.value.trim()){
        addSiteEvent(t.value.trim(), d ? d.value.trim() : '');
        addForm.reset();
        alert('Event saved (local demo)');
      }
    });
  }
});
