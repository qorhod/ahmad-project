document.addEventListener('DOMContentLoaded', function () {
  const themeToggleButtons = document.querySelectorAll('.btn-toggle');
  const whiteLogo = document.querySelector('.sidebar-logo');
  
  themeToggleButtons.forEach(button => {
      button.addEventListener('click', () => {
          const theme = button.getAttribute('data-bs-theme-value');
          document.documentElement.setAttribute('data-bs-theme', theme);
          localStorage.setItem('theme', theme);

          if (theme === 'dark') {
              whiteLogo.src = '/admin/public/img/whitedark.png'; // تغيير الصورة للوضع الداكن
          } else {
              whiteLogo.src = '/admin/public/img/white.png'; // تغيير الصورة للوضع النهاري
          }
      });
  });

  const preferredTheme = localStorage.getItem('theme') || 'auto';
  document.documentElement.setAttribute('data-bs-theme', preferredTheme);
  if (preferredTheme === 'dark') {
      whiteLogo.src = '/admin/public/img/whitedark.png'; // تغيير الصورة للوضع الداكن
  } else {
      whiteLogo.src = '/admin/public/img/white.png'; // تغيير الصورة للوضع النهاري
  }
});