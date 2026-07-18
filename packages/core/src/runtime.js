import { EventBus } from "./event-bus.js";
import { PluginSystem } from "./plugin-system.js";
import { MagionConfig } from "./config.js";

export class MagionRuntime {

  constructor(options = {}) {
    this.config = new MagionConfig(options);
    this.events = new EventBus();
    this.plugins = new PluginSystem();
  }

  start() {
    this.events.emit(
      "runtime:start",
      this.config
    );
  }
}
