import { EventBus } from "./event-bus.js";
import { PluginSystem } from "./plugin-system.js";
import { MagionConfig } from "./config.js";
import { ProviderRegistry } from "./provider/provider-registry.js";

export class MagionRuntime {

  constructor(options = {}) {
    this.config = new MagionConfig(options);
    this.events = new EventBus();
    this.plugins = new PluginSystem();
    this.providers = new ProviderRegistry();
  }

  registerProvider(provider) {
    return this.providers.register(provider);
  }

  getProvider(id) {
    return this.providers.get(id);
  }

  getProviders() {
    return this.providers.getAll();
  }

  getActiveProvider() {
    return this.providers.getActive();
  }

  setActiveProvider(id) {
    return this.providers.setActive(id);
  }

  start() {
    this.events.emit(
      "runtime:start",
      this.config
    );
  }

}
