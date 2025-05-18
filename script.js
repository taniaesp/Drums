document.addEventListener('keydown', function(event) {
    const keyCode = event.keyCode || event.which;

    // Reproduce el sonido
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }

    // Agrega efecto visual
    const keyElement = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (keyElement) {
      keyElement.classList.add('active');
    }
  });

  document.addEventListener('keyup', function(event) {
    const keyCode = event.keyCode || event.which;

    // Quita el efecto visual
    const keyElement = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (keyElement) {
      keyElement.classList.remove('active');
    }
  });