export const PlaybackState = {

  CREATED: "created",

  LOADING: "loading",

  PLAYING: "playing",

  PAUSED: "paused",

  STOPPED: "stopped"

};


export class PlaybackSession {

  constructor() {

    this.state =
      PlaybackState.CREATED;

    this.media = null;

  }


  load(media) {

    this.media = media;

    this.state =
      PlaybackState.LOADING;

  }


  play() {

    this.state =
      PlaybackState.PLAYING;

  }


  pause() {

    this.state =
      PlaybackState.PAUSED;

  }


  stop() {

    this.state =
      PlaybackState.STOPPED;

  }


  getState() {

    return this.state;

  }

}
