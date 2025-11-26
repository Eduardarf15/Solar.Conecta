function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');

    screens.forEach(screen => {
        screen.classList.remove('active');
    });

    const target = document.getElementById(screenId);
    target.classList.add('active');
    target.scrollTop = 0;
}

window.showScreen = showScreen;

document.addEventListener('DOMContentLoaded', () => {
    showScreen('home');
});
