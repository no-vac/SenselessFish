const { ipcRenderer } = require('electron');
const fs = require('fs');
const { updateConfig } = require('./util/config');
const config = require('./public/config.json');

let serverIsRunning;
ipcRenderer.on('serverStarted', (e, arg) => {
  console.log('server Started');
});
ipcRenderer.on('serverStopped', (e, arg) => {
  console.log('server stopped');
});
// ipcRenderer.send('async-msg', 'ping');
document.addEventListener('DOMContentLoaded', () => {
  formInit();
  ipcRenderer.invoke('getServerStatus').then((status) => {
    console.log(status);
    serverIsRunning = status;
    let startServerButton = document.querySelector('button');
    startServerButton.addEventListener('click', handleLocalServer);
    startServerButton = serverIsRunning
      ? changeButtonSop(startServerButton)
      : changeButtonStart(startServerButton);
  });
});

function formInit() {
  document.querySelector('#fish_numberOfSteps').value =
    config.fish.numberOfSteps;
  document.querySelector('#fish_stepDuration').value = config.fish.stepDuration;
  document.querySelector('#snowflake').checked = true;
  document.querySelector('#animationDuration').value =
    config.secondary.animationDuration;
}

function changeButtonStart(button) {
  button.innerText = 'Start';
  button.classList.remove('btn-danger');
  button.classList.add('btn-success');
  return button;
}
function changeButtonStop(button) {
  button.innerText = 'Stop';
  button.classList.remove('btn-success');
  button.classList.add('btn-danger');
  return button;
}

function handleLocalServer() {
  if (!serverIsRunning) {
    ipcRenderer.send('startServer');
    serverIsRunning = true;

    let button = document.querySelector('button');
    button = changeButtonStop(button);
  } else {
    ipcRenderer.send('stopServer');
    serverIsRunning = false;
    let button = document.querySelector('button');
    button = changeButtonStart(button);
  }
}
