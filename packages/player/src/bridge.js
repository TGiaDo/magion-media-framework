export class PlayerBridge {

  constructor(engine) {

    this.engine = engine;

  }


  load(source) {

    return this.engine.load(source);

  }


  play() {

    return this.engine.play();

  }


  pause() {

    return this.engine.pause();

  }


  stop() {

    return this.engine.stop();

  }

}
