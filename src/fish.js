const XOFFSET = 50;
const YOFFSET = 150;
const STEPS = 7;
const STEPTIME = 6000;

function createFish(username, isXmas) {
  let randomId = Math.round(Math.random() * 1000);

  let fishwrapperEl = document.createElement('div');
  fishwrapperEl.classList.add('fishwrapper');
  fishwrapperEl.setAttribute('id', 'fish_' + randomId);

  let usernameWrapperEl = document.createElement('div');
  usernameWrapperEl.classList.add('fish_usernameWrapper');

  let usernameEl = document.createElement('div');
  usernameEl.classList.add('fish_username');

  usernameEl.innerText = username;
  usernameWrapperEl.appendChild(usernameEl);

  fishwrapperEl.appendChild(usernameWrapperEl);
  let imgWrapperEl = document.createElement('div');
  imgWrapperEl.classList.add('fish_imgWrapper');
  fishwrapperEl.appendChild(imgWrapperEl);
  let imgEl = document.createElement('img');
  imgEl.classList.add('fish');
  imgEl.setAttribute(
    'src',
    location.origin + location.pathname + '/assets/fish.png'
  );
  imgWrapperEl.appendChild(imgEl);

  if (isXmas) {
    let hatEl = document.createElement('img');
    hatEl.classList.add('hat', 'hatR');
    hatEl.setAttribute(
      'src',
      location.origin + location.pathname + '/assets/hatR.png'
    );

    if (Math.round(Math.random())) {
      hatEl.classList.add('mirror');
    }
    imgWrapperEl.appendChild(hatEl);
  }

  if (Math.round(Math.random())) {
    imgEl.classList.add('mirror');
    if (isXmas) {
      hatEl.classList.remove('hatR');
      hatEl.classList.add('hatL');
    }
  }
  document.querySelector('body').appendChild(fishwrapperEl);
  anime({
    targets: document.querySelector('#fish_' + randomId),
    keyframes: genKeyframes(STEPS),
    duration: 3000,
    easing: 'easeInOutSine',
    complete: function () {
      document.querySelector('#fish_' + randomId).remove();
    },
  });
}

function genKeyframes(steps) {
  let keyframes = [];
  for (let i = 0; i < steps; i++) {
    keyframes.push({
      opacity: 1,
      translateY: anime.random(0, 1080 - YOFFSET),
      translateX: anime.random(XOFFSET, 1920 - XOFFSET),
      duration: STEPTIME,
    });
  }
  keyframes.push({
    translateY: -300,
    duration: STEPTIME,
  });
  return keyframes;
}

module.exports = createFish;
