document.addEventListener('DOMContentLoaded', () => {
    const letterContainer = document.getElementById('letterContainer');
    let isOpened = false;

    // Create sparkle effect
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1000);
    }

    // Add periodic sparkles
    setInterval(createSparkle, 500);

    // Add music control
    const music = document.getElementById('backgroundMusic');
    const musicToggle = document.getElementById('musicToggle');
    let isMusicPlaying = true;

    // Auto-play music when page loads
    music.play();
    musicToggle.classList.add('playing');

    musicToggle.addEventListener('click', () => {
        if (!isMusicPlaying) {
            music.play();
            musicToggle.classList.add('playing');
            isMusicPlaying = true;
        } else {
            music.pause();
            musicToggle.classList.remove('playing');
            isMusicPlaying = false;
        }
    });

    letterContainer.addEventListener('click', () => {
        if (!isOpened) {
            letterContainer.classList.add('opened');
            isOpened = true;
            
            setTimeout(() => {
                createFloatingHearts();
            }, 1000);
        }
    });

    function createFloatingHearts() {
        const container = document.querySelector('.container');
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = ['❤️', '💖', '💝', '💕', '✨'][Math.floor(Math.random() * 5)];
                heart.className = 'floating-heart';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.animationDelay = Math.random() * 2 + 's';
                container.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 3000);
            }, i * 200);
        }
    }
}); 