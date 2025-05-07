// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.querySelector('#voice-select');
  const textBox = document.querySelector('#text-to-speak');
  const speakButton = document.querySelector('button');
  const faceImage = document.querySelector('#explore img');

  let voices = [];

  //This function loads voices into the dropdown
  function populateVoices() {
    voices = window.speechSynthesis.getVoices();
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  } else {
    populateVoices();
  }

  speakButton.addEventListener('click', () => {
    const utterThis = new SpeechSynthesisUtterance(textBox.value);
    const selectedIndex = voiceSelect.value;

    if (selectedIndex !== "select" && voices[selectedIndex]) {
      utterThis.voice = voices[selectedIndex];
    }

    //Change face to open mouth while speaking
    utterThis.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };

    //Change back when done
    utterThis.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };

    window.speechSynthesis.speak(utterThis);
  });
}