export class EventBus {
  constructor() {
    this.events = new Map();
  }

  on(event, callback) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }

    this.events.get(event).push(callback);
  }

  emit(event, data) {
    const listeners = this.events.get(event) || [];

    for (const callback of listeners) {
      callback(data);
    }
  }
}
