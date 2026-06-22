function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

function handleSignup(e) {
  e.preventDefault();
  document.getElementById('signupSuccess').style.display = 'block';
  e.target.reset();
}

// Replace broken images with styled placeholders
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function () {
      const w = this.width || this.offsetWidth || 300;
      const h = this.height || this.offsetHeight || 200;
      const label = this.alt || 'Image';
      this.style.display = 'none';
      const div = document.createElement('div');
      div.className = 'img-placeholder';
      div.style.width = (w || 300) + 'px';
      div.style.height = (h || 200) + 'px';
      div.textContent = label;
      this.parentNode.insertBefore(div, this);
    });
  });
});
