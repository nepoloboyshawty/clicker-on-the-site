let count = 0;
const audio = document.getElementById('audio-player');

document.querySelectorAll('.click-button').forEach(button => {
    button.addEventListener('click', function() {
        const increment = parseInt(this.getAttribute('data-increment'));
        count += increment;
        document.getElementById('counter-id').textContent = count;

        audio.currentTime = 0;
        audio.play().catch(e => console.log("Playback error: ", e));
    });
});
