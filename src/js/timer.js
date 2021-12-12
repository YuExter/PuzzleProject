export class Timer {
  constructor() {
    this.ticker = null;
    this.timeInSecs = 0;
    this.callback = undefined;
    this.countdownendEvent = new CustomEvent('countdownend');
  }

  start(secs, callback) {
    this.callback = callback;
    this.timeInSecs = parseInt(secs);
    this.ticker = setInterval(() => this.tick(), 1000);
  }

  tick() {
    let secs = this.timeInSecs;

    if (secs > 0) {
      this.timeInSecs--;
    } else {
      document.dispatchEvent(this.countdownendEvent);
      this.stop();
    }

    const mins = Math.floor(secs / 60);
    secs %= 60;
    const pretty = ((mins < 10) ? '0' : '') + mins + ':' + ((secs < 10) ? '0' : '') + secs;

    if (this.callback) {
      this.callback(pretty);
    }
  }

  stop() {
    clearInterval(this.ticker);
  }
}

