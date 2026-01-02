# ⚔️ Minecraft SMP Tier List

A beautiful, animated tier list for Minecraft SMP rankings with smooth animations, modern design, and interactive features.

## Features

✨ **Smooth Animations**
- Page load fade-in animations with staggered timing
- Hover effects on tier rows and player cards
- Intersection Observer for lazy animations as you scroll
- Smooth scroll behavior for anchor links

🔇 **Interactive Design**
- Clickable player cards with scale animations
- Gradient tier labels (Gold, Purple, Blue, Orange, Green)
- Responsive grid layout that adapts to all screen sizes
- Active navigation indicator based on scroll position

🏜️ **Modern Aesthetic**
- Dark Minecraft-themed background with gradients
- Glassmorphism effects with backdrop blur
- Glowing hover states and transitions
- Professional typography with Poppins font

## File Structure

```
index.html   - HTML structure with tier data
style.css    - All styling and animations
script.js    - Interactive features and event listeners
```

## How to Use

1. Open `index.html` in your browser
2. Use the navigation menu to jump to different sections
3. Hover over player cards to see animations
4. Click cards for interactive feedback
5. Scroll to see lazy-loaded animations

## Customization

### Add New Tiers
In `index.html`, add a new tier row:

```html
<div class="tier-row tier-a">
  <h2 class="tier-label">YOUR_TIER_NAME</h2>
  <div class="tier-cards">
    <div class="card">Player Name</div>
    <!-- more cards -->
  </div>
</div>
```

### Change Colors
Tier colors are defined in `style.css`. Modify the `.tier-a`, `.tier-b`, etc. classes:

```css
.tier-a .tier-label {
  background: linear-gradient(135deg, #f7b733, #ffd700);
  /* your colors here */
}
```

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients, animations, and media queries
- **Vanilla JavaScript** - No dependencies, pure interactivity

## Credits

**Tier List Concept & Data:** [neelpropro1](https://github.com/Aurora-propro)

**Design & Development:** Built with care using modern web technologies

**Inspired by:** [Subtiers Ranking System](https://subtiers.net/ranking/overall)

## Learn Web Development

Interested in building interactive websites like this? Check out [Aurora Propro's Web Development Guide](https://aurora-propro.github.io/Aurora-propro.com/)

## License

Free to use and modify for personal projects.

---

**Made with ❤️ for the Minecraft SMP Community**
