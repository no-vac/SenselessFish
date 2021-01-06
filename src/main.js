anime.suspendWhenDocumentHidden = false;
const ComfyJS = require('comfy.js');
const createFish = require('./fish');
const createFlake = require('./flakes');

const {
  streamID,
  RewardID,
  secondary: { spawnChance },
} = require('./config.json');
const STREAM = 'senselesssamie';
const REWARDID = '7b60210b-4a9a-46de-8593-9d189b02c912';
const FLAKECHANCE = 0.25;

document.querySelector('body').addEventListener('click', () => {
  // createFish('asdasdasdasdadasdss');
  createFlake('novac4');
});
let lastUser = '';
ComfyJS.onChat = (user, message, flags, self, extra) => {
  const chance = Math.random();
  if ((lastUser == '' || lastUser !== user) && chance <= spawnChance)
    createFlake(user);
  if (extra.customRewardId === RewardID) {
    createFish(user);
  }
  lastUser = user;
};
ComfyJS.Init(streamID);
