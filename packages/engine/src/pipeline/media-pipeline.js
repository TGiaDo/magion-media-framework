import {
  PipelineState
} from "./pipeline-state.js";


export class MediaPipeline {

  constructor() {

    this.state =
      PipelineState.IDLE;

    this.source = null;

  }


  load(source) {

    this.state =
      PipelineState.LOADING;

    this.source =
      source;

    this.state =
      PipelineState.READY;

  }


  play() {

    if (
      !this.source
    ) {
      throw new Error(
        "No media loaded"
      );
    }


    this.state =
      PipelineState.PLAYING;

  }


  pause() {

    this.state =
      PipelineState.PAUSED;

  }


  stop() {

    this.state =
      PipelineState.STOPPED;

  }


  getState() {

    return this.state;

  }

}
