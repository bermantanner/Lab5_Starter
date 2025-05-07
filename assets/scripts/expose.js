// expose.js

const jsConfetti = new JSConfetti();

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelector = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const hornSound = document.querySelector('#expose audio');

  const playSoundButton = document.querySelector('#expose button');
  
  const volumeInput = document.querySelector('#volume-controls input');
  const volumeIcon = document.querySelector('#volume-controls img');

  hornSelector.addEventListener('change', () => {
    const hornOption = hornSelector.value;

    switch (hornOption) {
      case 'air-horn':
        hornImage.src = 'assets/images/air-horn.svg';
        hornImage.alt = 'Air Horn Image';
        hornSound.src = 'assets/audio/air-horn.mp3';
        break;
      case 'car-horn':
        hornImage.src = 'assets/images/car-horn.svg';
        hornImage.alt = 'Car Horn Image';
        hornSound.src = 'assets/audio/car-horn.mp3';
        break;
      case 'party-horn':
        hornImage.src = 'assets/images/party-horn.svg';
        hornImage.alt = 'Party Horn Image';
        hornSound.src = 'assets/audio/party-horn.mp3';
        break;
    }
 });

 playSoundButton.addEventListener('click', () => {
  
  hornSound.play();

  if (hornSelector.value == 'party-horn') {
    jsConfetti.addConfetti();
  }
 });

 volumeInput.addEventListener('input', () => {
  const volume = volumeInput.value;
  hornSound.volume = volume / 100;

  if (volume > 0 && volume < 33) {
    volumeIcon.src = 'assets/icons/volume-level-1.svg';
  }
  else if (volume >= 33 && volume < 67) {
    volumeIcon.src = 'assets/icons/volume-level-2.svg';
  }
  else if (volume >= 67) {
    volumeIcon.src = 'assets/icons/volume-level-3.svg';
  }
  else if (volume == 0) {
    volumeIcon.src = 'assets/icons/volume-level-0.svg';
  }
 });


}