import { MediaStream } from "./stream.js";
import { MediaMetadata } from "./metadata.js";

export class MediaEngine {

  constructor() {
    this.stream = null;
    this.metadata = null;
    this.state = "idle";
  }


  load(options = {}) {
    this.stream = new MediaStream(
      options.stream
    );

    this.metadata = new MediaMetadata(
      options.metadata
    );

    this.state = "loaded";
  }


  play() {
    if (!this.stream) {
      throw new Error(
        "No media loaded"
      );
    }

    this.state = "playing";
  }


  stop() {
    this.state = "stopped";
  }

}
