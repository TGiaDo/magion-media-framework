import { MagionPlayer } from "./player.js";


export class AudioPlayer extends MagionPlayer {

  constructor() {
    super();

    this.volume = 100;
    this.track = null;
  }


  setVolume(value) {
    this.volume = value;
  }


  setTrack(track) {
    this.track = track;
  }

}
