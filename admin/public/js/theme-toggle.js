document.addEventListener('DOMContentLoaded', function () {
    const themeButtons = document.querySelectorAll('.btn-toggle');

    const setTheme = (theme) => {
        console.log(`Setting theme to ${theme}`);
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
    };

    themeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const theme = button.getAttribute('data-bs-theme-value');
            console.log(`Button clicked: setting theme to ${theme}`);
            setTheme(theme);
        });
    });

    const preferredTheme = localStorage.getItem('theme') || 'light';
    console.log(`Preferred theme: ${preferredTheme}`);
    setTheme(preferredTheme);
});
