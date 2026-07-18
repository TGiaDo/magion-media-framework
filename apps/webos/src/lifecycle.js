export class AppLifecycle {

  constructor() {
    this.state = "created";
  }


  ready() {
    this.state = "ready";
  }


  start() {
    this.state = "running";
  }


  stop() {
    this.state = "stopped";
  }

}
