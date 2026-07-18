export class MagionPlayer {

  constructor() {
    this.state = "idle";
    this.source = null;
  }


  load(source) {
    this.source = source;
    this.state = "loaded";
  }


  play() {
    if (!this.source) {
      throw new Error(
        "No source loaded"
      );
    }

    this.state = "playing";
  }


  pause() {
    this.state = "paused";
  }


  stop() {
    this.state = "stopped";
  }

}
