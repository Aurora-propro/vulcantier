// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Add stagger animation to cards on page load
window.addEventListener('load', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${0.1 + index * 0.02}s`;
  });
});

// Add interactivity to cards
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function () {
    this.style.transform = 'scale(1.1)';
    setTimeout(() => {
      this.style.transform = '';
    }, 200);
  });

  card.addEventListener('mouseenter', function () {
    this.style.zIndex = '10';
  });

  card.addEventListener('mouseleave', function () {
    this.style.zIndex = 'auto';
  });
});

// Intersection Observer for lazy animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.tier-row').forEach(row => {
  row.style.opacity = '0';
  row.style.transform = 'translateY(20px)';
  row.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(row);
});

// Add active state to nav links
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Add hover effect to tier rows
document.querySelectorAll('.tier-row').forEach(row => {
  row.addEventListener('mouseenter', function () {
    const cards = this.querySelectorAll('.card');
    cards.forEach((card, index) => {
      card.style.transition = 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)';
      setTimeout(() => {
        card.style.transform = 'translateY(-2px)';
      }, index * 30);
    });
  });

  row.addEventListener('mouseleave', function () {
    const cards = this.querySelectorAll('.card');
    cards.forEach(card => {
      card.style.transform = 'translateY(0)';
    });
  });
});

console.log('✨ Minecraft SMP Tier List loaded! Built with ❤️ by neelpropro1');
