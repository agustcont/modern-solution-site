// Handle dropdown navigation
function handleNavChange(select) {
    const url = select.value;
    if (url) window.location.href = url;
  }
  
  // Scroll animation effect using IntersectionObserver
  const animatedItems = document.querySelectorAll('.item, .hero');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.1
    }
  );
  
  animatedItems.forEach(item => observer.observe(item));
  
  // Dark mode toggle (optional: place a toggle button in HTML to use this)
  function toggleDarkMode() {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  }
  
  // Auto load theme from localStorage
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
  
  // Button ripple effect
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = `${e.offsetX}px`;
      ripple.style.top = `${e.offsetY}px`;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
  