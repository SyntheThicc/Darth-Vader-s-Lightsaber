const lightsaber = document.querySelector('.lightsaber');
const igniteBtn = document.querySelector('.btn__ignite');
const lightsaberSound = document.querySelector('audio');





function igniteBlade() {
    lightsaber.classList.add('saber__ignite');
    lightsaberSound.play();
    let playTime = (lightsaberSound.duration - 1) * 1000;
    console.log(playTime);
    setTimeout(() => {
        lightsaber.classList.remove('saber__ignite');
    }, playTime);
}



igniteBtn.addEventListener('click', igniteBlade);