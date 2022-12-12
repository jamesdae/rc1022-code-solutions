/* exported Stopwatch */

class Stopwatch {
  constructor(startTimeInSeconds) {
    this.elapsedSeconds = startTimeInSeconds;
  }

  tick() {
    return this.elapsedSeconds++;
  }

  getTime() {
    const secondsPerHour = 3600;
    const secondsPerMinute = 60;
    let seconds = this.elapsedSeconds;
    let hours = Math.floor(seconds / secondsPerHour);
    seconds -= (secondsPerHour * hours);
    let minutes = Math.floor(seconds / secondsPerMinute);
    seconds -= (secondsPerMinute * minutes);
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  reset() {
    this.elapsedSeconds = 0;
  }
}
