const DURATION = 1000 * 20;
const XOFFSET = 100;
const YOFFSET = 80;
const STEP = 100;
const ALTRANGE = 100;

function createFlake(username) {
  let randomId = Math.round(Math.random() * 1000);
  let startX = getRandomX();
  let startY = -YOFFSET;

  let flakewrapperEl = document.createElement('div');
  flakewrapperEl.classList.add('flakewrapper');
  flakewrapperEl.setAttribute('id', 'flake_' + randomId);
  flakewrapperEl.style.position = 'absolute';
  flakewrapperEl.style.top = startY + 'px';
  console.log(flakewrapperEl);

  let usernameWrapperEl = document.createElement('div');
  usernameWrapperEl.classList.add('flake_usernameWrapper');
  flakewrapperEl.appendChild(usernameWrapperEl);

  let usernameEl = document.createElement('div');
  usernameEl.classList.add('flake_username');
  usernameEl.innerText = username;
  usernameWrapperEl.appendChild(usernameEl);

  let imgWrapperEl = document.createElement('div');
  imgWrapperEl.classList.add('flake_imgWrapper');
  flakewrapperEl.appendChild(imgWrapperEl);

  imgEl = document.createElement('img');
  imgEl.classList.add('flake');
  let imgId = Math.round(Math.random() * 4) + 1;
  imgEl.setAttribute('src', `/assets/flake${imgId}.png`);
  imgWrapperEl.appendChild(imgEl);

  document.querySelector('body').appendChild(flakewrapperEl);

  anime({
    targets: document.querySelector('#flake_' + randomId),
    duration: DURATION,
    keyframes: genKeyframes(startX, startY, 1080 + YOFFSET, STEP),
    easing: 'cubicBezier(0.505, 0.005, 0.500, 1.000)',
    complete: function () {
      document.querySelector('#flake_' + randomId).remove();
    },
  });
}

//generate random X coordnate on screen
function getRandomX() {
  return Math.round(Math.random() * 1920 - XOFFSET);
}

//generate keyframes for the snowflake.
function genKeyframes(startX, startY, endY, stepY) {
  let keyframes = [];
  let sign = true;
  for (let i = startY; i < endY; i += stepY) {
    sign = !sign;
    keyframes.push({
      translateX: getRandomXinRange(startX, ALTRANGE, sign),
      translateY: i,
    });
  }
  console.log(keyframes);
  return keyframes;
}

function getRandomXinRange(x, range, sign) {
  let delta = Math.round(Math.random() * range);
  return sign ? x + delta : x - delta;
}

module.exports = createFlake;
