const VARIANT = 4;
const REVIEWS_URL = `https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`;
const STORAGE_KEY = 'systemInfo';
const THEME_KEY = 'theme';
const MODAL_DELAY = 60000;

function collectSystemInfo() {
  return {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    languages: Array.isArray(navigator.languages)
      ? navigator.languages.join(', ')
      : navigator.language,
    online: navigator.onLine,
    cookiesEnabled: navigator.cookieEnabled,
    screen: `${window.screen.width} × ${window.screen.height}`,
    viewport: `${window.innerWidth} × ${window.innerHeight}`,
    pixelRatio: window.devicePixelRatio,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
}

function renderSystemInfo() {
  const list = document.getElementById('system-info-list');
  if (!list) return;

  let info = {};
  try {
    info = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch (error) {
    console.error('Cannot parse system info:', error);
  }

  list.innerHTML = '';
  Object.entries(info).forEach(([key, value]) => {
    const row = document.createElement('div');
    row.className = 'system-info-item';

    const term = document.createElement('dt');
    term.textContent = key;

    const description = document.createElement('dd');
    description.textContent = String(value);

    row.append(term, description);
    list.append(row);
  });
}

function initSystemInfo() {
  try {
    const info = collectSystemInfo();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(info));
  } catch (error) {
    console.error('Cannot save system info:', error);
  }
  renderSystemInfo();
}

async function initReviews() {
  const container = document.getElementById('reviews-container');
  if (!container) return;

  try {
    const response = await fetch(REVIEWS_URL);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const comments = await response.json();
    container.innerHTML = '';

    comments.forEach((comment) => {
      const card = document.createElement('article');
      card.className = 'review-card';

      const name = document.createElement('h3');
      name.textContent = comment.name;

      const email = document.createElement('span');
      email.className = 'review-email';
      email.textContent = comment.email;

      const body = document.createElement('p');
      body.textContent = comment.body;

      card.append(name, email, body);
      container.append(card);
    });
  } catch (error) {
    container.innerHTML = '';
    const message = document.createElement('p');
    message.className = 'reviews-status reviews-status--error';
    message.textContent = `Не вдалося завантажити відгуки: ${error.message}`;
    container.append(message);
  }
}

function initModal() {
  const modal = document.getElementById('contact-modal');
  if (!modal) return;

  const closeButton = document.getElementById('modal-close');
  const backdrop = modal.querySelector('[data-close-modal]');

  const closeModal = () => {
    modal.hidden = true;
  };

  setTimeout(() => {
    modal.hidden = false;
  }, MODAL_DELAY);

  if (closeButton) closeButton.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) closeModal();
  });
}

function getAutoTheme() {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 21 ? 'light' : 'dark';
}

function initTheme() {
  const toggle = document.getElementById('theme-toggle');
  let manualTheme = localStorage.getItem(THEME_KEY);

  const applyTheme = (theme) => {
    const isDark = theme === 'dark';
    document.body.classList.toggle('dark', isDark);
    if (toggle) {
      toggle.textContent = isDark ? 'Денний режим' : 'Нічний режим';
      toggle.setAttribute('aria-pressed', String(isDark));
    }
  };

  applyTheme(manualTheme || getAutoTheme());

  if (toggle) {
    toggle.addEventListener('click', () => {
      manualTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
      localStorage.setItem(THEME_KEY, manualTheme);
      applyTheme(manualTheme);
    });
  }

  setInterval(() => {
    if (!manualTheme) applyTheme(getAutoTheme());
  }, 60000);
}

initSystemInfo();
initReviews();
initModal();
initTheme();
