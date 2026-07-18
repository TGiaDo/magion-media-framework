import { MagionPlayer } from "./player.js";


export class VideoPlayer extends MagionPlayer {

  constructor() {
    super();

    this.resolution = null;
    this.fullscreen = false;
    this.subtitles = null;
  }


  setResolution(value) {
    this.resolution = value;
  }


  enableFullscreen() {
    this.fullscreen = true;
  }


  setSubtitles(track) {
    this.subtitles = track;
  }

}
