import { AppLifecycle } from "./lifecycle.js";


export class MagionApp {

  constructor() {
    this.lifecycle =
      new AppLifecycle();
  }


  initialize() {
    this.lifecycle.ready();
  }


  start() {
    this.lifecycle.start();
  }


  stop() {
    this.lifecycle.stop();
  }


  getState() {
    return this.lifecycle.state;
  }

}
