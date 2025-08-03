// 🌌 script.js

// Wait for DOM load
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Galactic Interface Initialized');

  // Typing animation effect (Hero)
  const typewriter = document.querySelector('.typewriter');
  if (typewriter) {
    const text = typewriter.textContent;
    typewriter.textContent = '';
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        typewriter.textContent += text[i];
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);
  }

  // Scroll animations
  const animatedSections = document.querySelectorAll('.section');
  const scrollTrigger = () => {
    const triggerPoint = window.innerHeight * 0.85;
    animatedSections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < triggerPoint) section.classList.add('visible');
    });
  };
  scrollTrigger();
  window.addEventListener('scroll', scrollTrigger);

  // Back to Top button
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
  }

  // Scroll progress bar
  const scrollBar = document.getElementById('scrollProgressBar');
  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const height = document.body.scrollHeight - window.innerHeight;
    const scrolled = (scroll / height) * 100;
    if (scrollBar) scrollBar.style.width = `${scrolled}%`;
  });

  // Easter egg trigger
  const egg = document.getElementById('easterTrigger');
  const eggBox = document.getElementById('easterEgg');
  if (egg && eggBox) {
    egg.addEventListener('click', () => {
      eggBox.style.display = 'block';
    });
  }

  // Audio control toggles
  const music = document.getElementById('backgroundMusic');
  const toggleMusic = document.getElementById('toggleMusic');
  if (toggleMusic && music) {
    toggleMusic.addEventListener('change', e => {
      music.muted = !e.target.checked;
    });
  }

  // Modal logic
  const modal = document.getElementById('projectModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');

  window.openModal = function(title, desc, imgSrc) {
    if (!modal) return;
    modal.classList.add('active');
    modalTitle.textContent = title;
    modalDescription.textContent = desc;
    modalImage.src = imgSrc;
  };

  window.closeModal = function() {
    if (modal) modal.classList.remove('active');
  };

  // Back to top click
  window.scrollToTop = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
});
// 🚀 Animated Counters
const counters = {
  projectsCounter: 24,
  linesCodeCounter: 98765,
  coffeeCounter: 204,
  aliensServed: 7
};

function animateCounters() {
  Object.entries(counters).forEach(([id, target]) => {
    const el = document.getElementById(id);
    if (!el) return;
    let count = 0;
    const speed = target / 100;
    const interval = setInterval(() => {
      count += speed;
      if (count >= target) {
        el.textContent = target;
        clearInterval(interval);
      } else {
        el.textContent = Math.floor(count);
      }
    }, 30);
  });
}

// Call after DOM load and scroll-in
setTimeout(animateCounters, 1500);

// 🎮 Asteroid Click Game
let asteroidScore = 0;
function spawnAsteroid() {
  const zone = document.getElementById('asteroidZone');
  if (!zone) return;

  const rock = document.createElement('div');
  rock.style.position = 'absolute';
  rock.style.width = '30px';
  rock.style.height = '30px';
  rock.style.borderRadius = '50%';
  rock.style.background = '#0ff';
  rock.style.top = `${Math.random() * 200}px`;
  rock.style.left = `${Math.random() * 300}px`;
  rock.style.cursor = 'pointer';
  rock.style.boxShadow = '0 0 10px #0ff';
  rock.addEventListener('click', () => {
    asteroidScore++;
    document.getElementById('asteroidScore').textContent = asteroidScore;
    zone.removeChild(rock);
  });

  zone.appendChild(rock);
  setTimeout(() => {
    if (zone.contains(rock)) zone.removeChild(rock);
  }, 3000);
}

// 💡 Random Quotes
const quotes = [
  "“The cosmos is within us.” — Carl Sagan",
  "“HTML is the language of the stars.” — Anonymous",
  "“JavaScript is like dark matter. Mysterious, everywhere.”",
  "“The universe is made of protons, neutrons, and... code.”",
  "“Space is the limit.”"
];

function newQuote() {
  const box = document.getElementById('randomQuote');
  if (box) {
    const index = Math.floor(Math.random() * quotes.length);
    box.textContent = quotes[index];
  }
}

// 🧪 Theme Switcher
function setTheme(mode) {
  const body = document.body;
  if (mode === 'dark') {
    body.style.background = '#000';
    body.style.color = '#fff';
  } else if (mode === 'light') {
    body.style.background = '#fff';
    body.style.color = '#111';
  } else if (mode === 'galaxy') {
    body.style.background = 'radial-gradient(circle, #020024, #090979, #000)';
    body.style.color = '#0ff';
  }
}

// 🛸 Background FX Switch
function setBackground(type) {
  const bg = document.body.style;
  if (type === 'stars') {
    bg.backgroundImage = 'url("stars.png")';
  } else if (type === 'nebula') {
    bg.backgroundImage = 'url("nebula.jpg")';
  } else {
    bg.backgroundImage = '';
  }
}

// 🎤 Voice Activation (placeholder)
function activateVoice() {
  const status = document.getElementById('voiceStatus');
  if (status) {
    status.textContent = 'Listening... (simulated)';
    setTimeout(() => status.textContent = 'Offline', 5000);
  }
}
// 🧬 Dev Terminal Input Handler
function handleTerminal(event) {
  if (event.key === 'Enter') {
    const input = event.target.value.trim();
    const output = document.getElementById('terminalOutput');
    if (!input || !output) return;

    const p = document.createElement('p');
    p.innerHTML = `<span class="prompt">guest@galaxy:</span> ${input}`;
    output.appendChild(p);

    // Simple fake responses
    const response = document.createElement('p');
    switch (input.toLowerCase()) {
      case 'help':
        response.textContent = 'Available commands: help, ping, about, exit';
        break;
      case 'ping':
        response.textContent = 'Ping successful: 127.0.0.1 light-years';
        break;
      case 'about':
        response.textContent = 'This terminal simulates intergalactic dev environments.';
        break;
      case 'exit':
        response.textContent = 'Goodbye, Earthling!';
        break;
      default:
        response.textContent = 'Command not recognized. Try "help".';
    }
    output.appendChild(response);
    event.target.value = '';
    output.scrollTop = output.scrollHeight;
  }
}

// 📂 Scroll Teleport
function teleportTo(id) {
  const section = document.getElementById(id);
  if (!section) return;
  section.scrollIntoView({ behavior: 'smooth' });
}

// 🛑 Shutdown Protocol
function shutdownSequence() {
  const curtain = document.getElementById('powerCurtain');
  if (curtain) {
    curtain.style.display = 'flex';
    curtain.style.opacity = '0';
    setTimeout(() => {
      curtain.style.opacity = '1';
    }, 10);
  }
  setTimeout(() => {
    document.body.innerHTML = '<h1 style="text-align:center; margin-top:20%">💤 System Offline</h1>';
  }, 3000);
}

// 🎇 Dev Banner Toggle
const debugToggle = document.getElementById('debugToggle');
if (debugToggle) {
  debugToggle.addEventListener('change', () => {
    const banner = document.getElementById('devBanner');
    if (banner) {
      banner.style.display = debugToggle.checked ? 'block' : 'none';
    }
  });
}

// 📋 Feedback Form Submission (fake)
const feedbackForm = document.getElementById('feedbackForm');
if (feedbackForm) {
  feedbackForm.addEventListener('submit', e => {
    e.preventDefault();
    const response = document.getElementById('feedbackResponse');
    if (response) {
      response.textContent = '✅ Feedback received! Thanks, Earthling!';
    }
  });
}

// 🎇 Easter Egg Close
function closeEasterEgg() {
  const egg = document.getElementById('easterEgg');
  if (egg) egg.style.display = 'none';
}

// 💬 Alert Close
function closeAlert() {
  const alert = document.getElementById('globalAlert');
  if (alert) alert.style.display = 'none';
}
// 🌠 Warp Transition Curtain
function triggerWarp() {
  const curtain = document.getElementById('transitionCurtain');
  if (!curtain) return;
  curtain.classList.add('active');
  setTimeout(() => {
    curtain.classList.remove('active');
  }, 1500);
}

// ⭐ Star Rating Logic
function rateSite(stars) {
  const msg = document.getElementById('ratingMessage');
  if (!msg) return;
  const text = [
    '☄️ Meh...',
    '🚀 Getting there!',
    '🌌 Pretty cool!',
    '🛸 Impressive frontend!',
    '👨‍🚀 This site bends space & time!'
  ];
  msg.textContent = text[stars - 1];
}

// 📖 Story Mode Engine
const storyLines = [
  "In the year 2147, a developer found the last HTML tag...",
  "CSS was once forbidden on Mars, but not anymore...",
  "JavaScript came alive and began animating thoughts...",
  "Aliens used `<div>` tags to build real spaceships.",
  "The dev reached line 2000 and... ascended!"
];
let storyIndex = 0;

function nextStory() {
  const story = document.getElementById('storyText');
  if (!story) return;
  story.textContent = storyLines[storyIndex];
  storyIndex = (storyIndex + 1) % storyLines.length;
}

// 🧠 Simple System Scanner
function scanSystem() {
  const browser = navigator.userAgent;
  let name = 'Unknown';
  if (browser.includes("Chrome")) name = 'Chrome';
  else if (browser.includes("Firefox")) name = 'Firefox';
  else if (browser.includes("Safari")) name = 'Safari';
  else if (browser.includes("Edge")) name = 'Edge';

  const os = navigator.platform;
  const type = /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';

  document.getElementById('browserName').textContent = name;
  document.getElementById('osName').textContent = os;
  document.getElementById('deviceType').textContent = type;
}

scanSystem(); // Call once on load

// 🧬 Secret Dev Unlock (Konami Code)
let konamiCode = [];
const secretSequence = [38,38,40,40,37,39,37,39,66,65]; // ↑ ↑ ↓ ↓ ← → ← → B A
document.addEventListener('keydown', (e) => {
  konamiCode.push(e.keyCode);
  if (konamiCode.length > 10) konamiCode.shift();
  if (konamiCode.toString() === secretSequence.toString()) {
    const banner = document.getElementById('devBanner');
    if (banner) banner.style.display = 'block';
    const alert = document.getElementById('globalAlert');
    if (alert) {
      document.getElementById('alertMessage').textContent = "🔓 Dev Mode Activated!";
      alert.style.display = 'block';
    }
  }
});

// 🌈 Aurora Light Toggle
const toggleAurora = () => {
  document.querySelectorAll('.aurora-beam').forEach(b => {
    b.style.display = b.style.display === 'none' ? 'block' : 'none';
  });
};
// 🔊 Music Visualizer
const audio = document.getElementById('backgroundMusic');
const canvas = document.getElementById('audioCanvas');
if (canvas && audio) {
  const ctx = canvas.getContext('2d');
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const analyser = audioCtx.createAnalyser();
  const source = audioCtx.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(audioCtx.destination);
  analyser.fftSize = 64;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  function draw() {
    requestAnimationFrame(draw);
    analyser.getByteFrequencyData(dataArray);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const barWidth = (canvas.width / bufferLength) * 2.5;
    let x = 0;
    for (let i = 0; i < bufferLength; i++) {
      const barHeight = dataArray[i] / 2;
      ctx.fillStyle = '#0ff';
      ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
      x += barWidth + 1;
    }
  }

  audio.addEventListener('play', () => {
    audioCtx.resume().then(() => draw());
  });
}

// 🧲 Magnetic Button Effect
const magBtn = document.getElementById('magBtn');
if (magBtn) {
  magBtn.addEventListener('mousemove', e => {
    const rect = magBtn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    magBtn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });
  magBtn.addEventListener('mouseleave', () => {
    magBtn.style.transform = 'translate(0, 0)';
  });
}

// 🌌 Constellation Canvas (basic stars + lines)
const constellationCanvas = document.getElementById('constellationCanvas');
if (constellationCanvas) {
  const ctx = constellationCanvas.getContext('2d');
  constellationCanvas.width = window.innerWidth;
  constellationCanvas.height = 300;
  let stars = Array.from({ length: 50 }, () => ({
    x: Math.random() * constellationCanvas.width,
    y: Math.random() * constellationCanvas.height,
    radius: Math.random() * 2 + 1
  }));

  function drawConstellations() {
    ctx.clearRect(0, 0, constellationCanvas.width, constellationCanvas.height);
    stars.forEach(s => {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#0ff';
      ctx.fill();
    });

    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const dx = stars[i].x - stars[j].x;
        const dy = stars[i].y - stars[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.strokeStyle = '#0ff2';
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(stars[j].x, stars[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(drawConstellations);
  }
  drawConstellations();
}

// 💥 Glitch FX Trigger
function triggerGlitchText(element) {
  const original = element.dataset.text;
  let frame = 0;
  const glitchInterval = setInterval(() => {
    element.textContent = original
      .split('')
      .map(c => (Math.random() > 0.8 ? String.fromCharCode(33 + Math.random() * 94) : c))
      .join('');
    frame++;
    if (frame > 10) {
      clearInterval(glitchInterval);
      element.textContent = original;
    }
  }, 50);
}

// ✨ Final FX: Supernova + Outro
function fireSupernova() {
  const flash = document.getElementById('supernovaFlash');
  if (flash) {
    flash.style.opacity = 1;
    setTimeout(() => {
      flash.style.opacity = 0;
    }, 1000);
  }
}
// 🧼 Form Validation + Feedback Animation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    contactForm.querySelectorAll('input, textarea').forEach(field => {
      if (!field.value.trim()) {
        field.classList.add('error');
        valid = false;
      } else {
        field.classList.remove('error');
      }
    });
    if (valid) {
      document.getElementById('feedbackResponse').textContent = '🛰️ Message Sent!';
    }
  });
}

// ✅ Success Pulse Trigger
function showThankYouPopup() {
  const popup = document.getElementById('thankYouPopup');
  if (popup) {
    popup.style.display = 'block';
    popup.classList.add('success');
  }
}
function closeThankYou() {
  const popup = document.getElementById('thankYouPopup');
  if (popup) {
    popup.style.display = 'none';
    popup.classList.remove('success');
  }
}

// 💬 Open Credits Overlay
function closeCredits() {
  const overlay = document.getElementById('creditsOverlay');
  if (overlay) overlay.style.display = 'none';
}
function showCredits() {
  const overlay = document.getElementById('creditsOverlay');
  if (overlay) overlay.style.display = 'block';
}

// 🌀 Memory Cleaner UI
function cleanMemory() {
  const cleaner = document.querySelector('.memory-cleaner .buffer-bar');
  if (!cleaner) return;
  cleaner.style.width = '0%';
  let width = 0;
  const interval = setInterval(() => {
    width += 2;
    cleaner.style.width = width + '%';
    if (width >= 100) {
      clearInterval(interval);
    }
  }, 50);
}

// 🧠 Restore Loader Trigger
function triggerRestore() {
  const restore = document.getElementById('systemRestore');
  if (restore) {
    restore.style.display = 'block';
    setTimeout(() => {
      restore.style.display = 'none';
    }, 4000);
  }
}

// 🌀 Outro Glow Stars Blinker
function blinkOutroStars() {
  const stars = document.querySelectorAll('.outro-star');
  stars.forEach((star, i) => {
    star.style.animationDelay = `${i * 0.3}s`;
  });
}

// 📋 Keyboard Debug Toggle (press `d`)
document.addEventListener('keydown', e => {
  if (e.key === 'd') {
    const banner = document.getElementById('devBanner');
    if (banner) banner.style.display = banner.style.display === 'none' ? 'block' : 'none';
  }
});

// 🧬 Init Final FX
setTimeout(() => {
  blinkOutroStars();
  fireSupernova();
  cleanMemory();
}, 4000);

// 🎇 Final Log
console.log('%cMission Accomplished!', 'color: #0ff; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px #0ff;');
