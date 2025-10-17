// js/app.js
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('cta');
  if (btn){
    btn.addEventListener('click', () => {
      document.body.classList.toggle('tema-claro');
      console.log('Tema alternado:', document.body.classList.contains('tema-claro') ? 'claro' : 'oscuro');
    });
  }
});
