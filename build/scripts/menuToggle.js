window.addEventListener('load', () => {
  const btn = document.querySelector('.menu_btn');
  const menu = document.querySelector('.menu');
  btn.addEventListener('click', () => {
    if (!menu.style.display || menu.style.display === 'none') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  });
});
