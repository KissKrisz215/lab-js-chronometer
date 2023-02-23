class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
     this.currentTime++;
     if(typeof printTimeCallback === 'function'){
      printTimeCallback();
     }
    }, 10)
  }

  getMinutes() {
    if(this.currentTime === 0){
      return 0;
    }else{
      return Math.floor(this.currentTime / 6000);
    }
  }

  getSeconds() {
    // ... your code goes here
  }

  getCentiseconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
