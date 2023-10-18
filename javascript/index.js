const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  let minutesArr = chronometer.computeTwoDigitNumber(minutes).split('');

  minDecElement.innerHTML = minutesArr[0];
  minUniElement.innerHTML = minutesArr[1];
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  let secondsArr = chronometer.computeTwoDigitNumber(seconds).split('');

  secDecElement.innerHTML = secondsArr[0];
  secUniElement.innerHTML = secondsArr[1];
}

// ==> BONUS
function printMilliseconds() {
  let milliseconds = chronometer.getMilliseconds();
  let millisecondsArr = chronometer.computeTwoDigitNumber(milliseconds).split('');

  milDecElement.innerHTML = millisecondsArr[0];
  milUniElement.innerHTML = millisecondsArr[1];
}

function printSplit() {
  let splits = document.querySelector('#splits');
  let li = document.createElement('li');
  let splitTime = chronometer.split();

  li.innerHTML = splitTime + ':' + chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());

  splits.appendChild(li);
}

function clearSplits() {
  chronometer.reset();

  milDecElement.innerHTML = '0';
  milUniElement.innerHTML = '0';

  let splits = document.querySelector('#splits');
  splits.innerHTML = null

}

function setStopBtn() {
  let btn = document.querySelector('.start');
  btn.classList.replace('start', 'stop');
  document.querySelector('.stop').innerHTML = 'STOP'
}

function setSplitBtn() {
  let btn = document.querySelector('.reset');
  btn.classList.replace('reset', 'split');
  document.querySelector('.split').innerHTML = 'SPLIT'
}

function setStartBtn() {
  let btn = document.querySelector('.stop');
  btn.classList.replace('stop', 'start');
  document.querySelector('.start').innerHTML = 'START';
}

function setResetBtn() {
  let btn = document.querySelector('.split');
  btn.classList.replace('split', 'reset');
  document.querySelector('.reset').innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  let statusChronometer = document.querySelector('.start');

  if (statusChronometer) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  let statusChronometer = document.querySelector('.split');

  if (statusChronometer) {
    printSplit();
  } else {
    clearSplits();
  }
});
