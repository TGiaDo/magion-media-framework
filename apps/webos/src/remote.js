export class RemoteController {

  constructor() {
    this.listeners = {};
  }


  on(event, callback) {

    this.listeners[event] =
      callback;

  }


  emit(event, data) {

    if (this.listeners[event]) {
      this.listeners[event](data);
    }

  }

}
