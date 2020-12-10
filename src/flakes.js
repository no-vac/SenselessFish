const DURATION = 1000 * 10;
const XOFFSET = 100;
const YOFFSET = 150;
const ROTATION = 360 * 6;

function createFlake(username) {
  let randomId = Math.round(Math.random() * 1000);
  let flakewrapperEl = document.createElement('div');
  flakewrapperEl.classList.add('flakewrapper');
  flakewrapperEl.setAttribute('id', 'flake_' + randomId);
  flakewrapperEl.style.position = 'absolute';
  flakewrapperEl.style.left = getRandomX() + 'px';
  flakewrapperEl.style.top = -YOFFSET + 'px';
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
    translateY: 1080,
    duration: DURATION,
    easing: 'linear',
    complete: function () {
      document.querySelector('#flake_' + randomId).remove();
    },
  });
}

function getRandomX() {
  return Math.round(Math.random() * 1920 - XOFFSET);
}

module.exports = createFlake;
