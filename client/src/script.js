let body = document
  .querySelector('body')
  .addEventListener('click', () => createFish());
let fishies = [];

let ComfyJS = require('comfy.js');
ComfyJS.onChat = (user, message, flags, self, extra) => {
  console.log(`${user}: ${message}`);
  console.log('flags: ', flags);
  console.log('self: ', self);
  console.log('extra: ', extra);
};
ComfyJS.Init('taerss');

function createFish(username) {
  let randomId = Math.round(Math.random() * 1000);
  username = randomId;
  console.log('creating fish ', randomId);

  let fishwrapperEl = document.createElement('div');
  fishwrapperEl.classList.add('fishwrapper');
  fishwrapperEl.setAttribute('id', 'f' + randomId);

  let usernameEl = document.createElement('div');
  usernameEl.classList.add('username');

  usernameEl.innerText = username;
  fishwrapperEl.appendChild(usernameEl);

  let imgEl = document.createElement('img');
  imgEl.setAttribute('src', './assets/fish.png');
  imgEl.setAttribute('width', '100');
  fishwrapperEl.appendChild(imgEl);

  document.querySelector('body').appendChild(fishwrapperEl);
  let fish = anime({
    targets: document.querySelector('#f' + randomId),

    keyframes: [
      // {
      //   translateX: 200,
      //   translateY: 200,
      //   duration: 3000,
      //   opacity: 1,
      // },

      {
        translateY: anime.random(200, 1080 - 200),
        translateX: anime.random(100, 1920 - 100),
        duration: anime.random(1000, 3000),
        opacity: 1,
      },
      {
        translateY: anime.random(200, 1080 - 200),
        translateX: anime.random(100, 1920 - 100),
        duration: anime.random(1000, 3000),
      },
      {
        translateY: anime.random(200, 1080 - 200),
        translateX: anime.random(100, 1920 - 100),
        duration: anime.random(1000, 3000),
      },
      {
        translateY: anime.random(200, 1080 - 200),
        translateX: anime.random(100, 1920 - 100),
        duration: anime.random(1000, 3000),
      },
      {
        translateY: anime.random(200, 1080 - 200),
        translateX: anime.random(100, 1920 - 100),
        duration: anime.random(1000, 3000),
      },
      {
        translateY: anime.random(200, 1080 - 200),
        translateX: anime.random(100, 1920 - 100),
        duration: anime.random(1000, 3000),
      },
      {
        translateY: anime.random(200, 1080 - 200),
        translateX: anime.random(100, 1920 - 100),
        duration: anime.random(1000, 3000),
      },
      {
        translateY: anime.random(200, 1080 - 200),
        translateX: anime.random(100, 1920 - 100),
        duration: anime.random(1000, 3000),
      },
      {
        translateY: anime.random(200, 1080 - 200),
        translateX: anime.random(100, 1920 - 100),
        duration: anime.random(1000, 3000),
      },
      {
        translateY: -300,
        duration: 5000,
      },
    ],
    duration: 3000,
    easing: 'easeInOutSine',
    complete: function () {
      document.querySelector('#f' + randomId).remove();
    },
  }).play();
  fishies.push(fish);
}
