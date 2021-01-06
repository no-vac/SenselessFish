const config = require('./config.json');
const DURATION = config.secondary.animationDuration;
const XOFFSET = 100;
const YOFFSET = 80;
const STEP = 100;
const ALTRANGE = 100;
const types = ['snowflake', 'bubble'];

function createParticle(username, type) {
  if (!types.includes(type)) return; //prevent unknown types
  const randomId = Math.round(Math.random() * 1000);
  const startX = getRandomX();
  let startY;
  if (type === 'snowflake') startY = -YOFFSET;
  if (type === 'bubble') startY = 1080;

  let endY;
  if (type === 'snowflake') endY = 1500;
  if (type === 'bubble') endY = -YOFFSET;

  //paricle wrapper
  let flakewrapperEl = document.createElement('div');
  flakewrapperEl.classList.add(`${type}wrapper`);
  flakewrapperEl.setAttribute('id', 'p_' + randomId);
  flakewrapperEl.style.position = 'absolute';
  flakewrapperEl.style.top = startY + 'px';

  //username wrapper
  let usernameWrapperEl = document.createElement('div');
  usernameWrapperEl.classList.add(`${type}_usernameWrapper`);
  flakewrapperEl.appendChild(usernameWrapperEl);

  //username element
  let usernameEl = document.createElement('div');
  usernameEl.classList.add(`${type}_username`);
  usernameEl.innerText = username;
  usernameWrapperEl.appendChild(usernameEl);

  //image wrapper
  let imgWrapperEl = document.createElement('div');
  imgWrapperEl.classList.add(`${type}_imgWrapper`);
  flakewrapperEl.appendChild(imgWrapperEl);

  //image source
  imgEl = document.createElement('img');
  imgEl.classList.add(`${type}`);
  if (type === 'snowflake') {
    let imgId = Math.round(Math.random() * 4) + 1;
    imgEl.setAttribute('src', `./assets/flake${imgId}.png`);
  }
  if (type === 'bubble') imgEl.setAttribute('src', `./assets/bubble.png`);
  imgWrapperEl.appendChild(imgEl);

  document.querySelector('body').appendChild(flakewrapperEl);

  anime({
    targets: document.querySelector('#p_' + randomId),
    duration: DURATION,
    keyframes: genKeyframes(startX, startY, endY, STEP),
    easing: 'cubicBezier(0.505, 0.005, 0.500, 1.000)',
    complete: function () {
      document.querySelector('#p_' + randomId).remove();
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

module.exports = createParticle;
