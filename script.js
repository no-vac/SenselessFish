let body = document
  .querySelector('body')
  .addEventListener('click', () => createFish(Math.random()));
let fishies = [];

function createFish(name) {
  let id = Math.round(Math.random() * 1000);
  console.log('creating fish ', id);
  let fishwrapperEl = document.createElement('div');
  fishwrapperEl.classList.add('fishwrapper');
  fishwrapperEl.setAttribute('id', 'f' + id);

  let usernameEl = document.createElement('div');
  usernameEl.classList.add('username');

  usernameEl.innerText = id;
  fishwrapperEl.appendChild(usernameEl);

  let imgEl = document.createElement('img');
  imgEl.setAttribute('src', 'fish.png');
  imgEl.setAttribute('width', '100');
  fishwrapperEl.appendChild(imgEl);

  document.querySelector('body').appendChild(fishwrapperEl);
  let fish = anime({
    targets: document.querySelector('#f' + id),

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
      document.querySelector('#f' + id).remove();
    },
  }).play();
  fishies.push(fish);
}
