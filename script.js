// Tab switching functionality
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tierName = btn.getAttribute('data-tier');
    
    // Remove active from all tabs and contents
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tier-content').forEach(c => c.classList.remove('active'));
    
    // Add active to clicked tab and matching content
    btn.classList.add('active');
    document.querySelector(`[data-tier="${tierName}"]`).classList.add('active');
  });
});

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

// Add animation to cards on page load
window.addEventListener('load', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${0.1 + index * 0.02}s`;
  });
});

// Add interactivity to cards
document.addEventListener('click', () => {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () {
      this.style.transform = 'scale(1.1)';
      setTimeout(() => {
        this.style.transform = '';
      }, 200);
    });
  });
});

console.log('✨ Minecraft SMP Tier List - Tabbed Edition loaded!');
