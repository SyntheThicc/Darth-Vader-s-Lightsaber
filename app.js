const lightsaber = document.querySelector('.lightsaber');
const igniteBtn = document.querySelector('.btn__ignite');
const lightsaberSound = document.querySelector('audio');
const colorBtns = document.querySelector('.color__btns');
let bladeColor;

colorBtns.addEventListener('click', function (e) {
  bladeColor = e.target.dataset.color;
  lightsaber.style.setProperty('--blade-color', bladeColor);
  igniteBtn.style.setProperty('--blade-color', bladeColor);
  console.log(bladeColor);
});

function igniteBlade() {
  if (!bladeColor) {
  } else {
    lightsaber.classList.add('saber__ignite');
    lightsaberSound.play();
    let playTime = (lightsaberSound.duration - 1) * 1000;
    console.log(playTime);
    setTimeout(() => {
      lightsaber.classList.remove('saber__ignite');
    }, playTime);
  }
}

igniteBtn.addEventListener('click', igniteBlade);
