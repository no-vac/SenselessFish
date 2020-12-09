anime.suspendWhenDocumentHidden = false;
const ComfyJS = require('comfy.js');

let fishies = [];

const XOFFSET = 50;
const YOFFSET = 150;
const STEPS = 7;
const STEPTIME = 6000;
const STREAM = 'senselesssamie';
const REWARDID = '7b60210b-4a9a-46de-8593-9d189b02c912';

document
  .querySelector('body')
  .addEventListener('click', () => createFish('novac4'));

ComfyJS.onChat = (user, message, flags, self, extra) => {
  if (extra.customRewardId === REWARDID) {
    createFish(user);
  }
};
ComfyJS.Init(STREAM);

function createFish(username) {
  let randomId = Math.round(Math.random() * 1000);

  let fishwrapperEl = document.createElement('div');
  fishwrapperEl.classList.add('fishwrapper');
  fishwrapperEl.setAttribute('id', 'f' + randomId);

  let usernameWrapperEl = document.createElement('div');
  usernameWrapperEl.classList.add('usernameWrapper');

  let usernameEl = document.createElement('div');
  usernameEl.classList.add('username');

  usernameEl.innerText = username;
  usernameWrapperEl.appendChild(usernameEl);

  fishwrapperEl.appendChild(usernameWrapperEl);
  let imgWrapperEl = document.createElement('div');
  imgWrapperEl.classList.add('imgWrapper');
  fishwrapperEl.appendChild(imgWrapperEl);
  let imgEl = document.createElement('img');
  imgEl.classList.add('fish');
  imgEl.setAttribute(
    'src',
    location.origin + location.pathname + '/assets/fish.png'
  );
  imgWrapperEl.appendChild(imgEl);

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

  if (Math.round(Math.random())) {
    imgEl.classList.add('mirror');
    hatEl.classList.remove('hatR');
    hatEl.classList.add('hatL');
  }
  document.querySelector('body').appendChild(fishwrapperEl);
  let fish = anime({
    targets: document.querySelector('#f' + randomId),
    keyframes: genKeyframes(STEPS),
    duration: 3000,
    easing: 'easeInOutSine',
    complete: function () {
      document.querySelector('#f' + randomId).remove();
    },
  });
  fishies.push(fish);
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
