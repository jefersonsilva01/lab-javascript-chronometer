class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.milliseconds = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) callback();
    }, 1000);

    this.millisecondsId = setInterval(() => {
      this.milliseconds++;
      if (callback) callback();
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getMilliseconds() {
    return this.milliseconds % 100;
  }

  computeTwoDigitNumber(value) {
    return value.toString().length === 1 ? '0' + value.toString() : value.toString();
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.millisecondsId);
  }

  reset() {
    this.currentTime = 0;
    this.numbers = Array.from(document.getElementsByClassName('number'));

    this.numbers.forEach(element => element.innerHTML = '0');
  }

  split() {
    this.minutes = this.getMinutes();
    this.seconds = this.getSeconds();
    this.milliseconds = this.getMilliseconds();

    this.minutes = this.computeTwoDigitNumber(this.minutes);
    this.seconds = this.computeTwoDigitNumber(this.seconds);
    this.milliseconds = this.computeTwoDigitNumber(this.milliseconds);

    return this.minutes + ':' + this.seconds;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

