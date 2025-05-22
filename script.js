window.onload = () => {
  const el = document.querySelector('.typing-effect.rainbow-text');
  const text = el.textContent;
  el.textContent = '';

  // style gradasi
  el.style.background = 'linear-gradient(90deg, #0000FF, #1E90FF, #4682B4, #4169E1, #007BFF, #0056B3, #003F88)';
  el.style.webkitBackgroundClip = 'text';
  el.style.webkitTextFillColor = 'transparent';
  el.style.display = 'inline-block';

  // Efek ketik huruf satu per satu
  let i = 0;
  const typingInterval = setInterval(() => {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval);
    }
  }, 100);
};
