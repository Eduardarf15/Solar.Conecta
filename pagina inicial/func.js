document.addEventListener('DOMContentLoaded', () => {
    
    const videoBtn = document.querySelector('.video-overlay');
    if (videoBtn) {
        videoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Abrir o vídeo "SOL PARA TODOS"!');
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});