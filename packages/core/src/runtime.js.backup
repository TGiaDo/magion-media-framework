import { EventBus } from "./event-bus.js";
import { PluginSystem } from "./plugin-system.js";
import { MagionConfig } from "./config.js";
import { ProviderRegistry } from "./provider/provider-registry.js";
import { CatalogRegistry } from "./catalog/catalog-registry.js";

export class MagionRuntime {

  constructor(options = {}) {
    this.config = new MagionConfig(options);
    this.events = new EventBus();
    this.plugins = new PluginSystem();
    this.providers = new ProviderRegistry();
    this.catalogs = new CatalogRegistry();
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



  registerCatalog(service) {
    return this.catalogs.register(service);
  }


  getCatalogs() {
    return this.catalogs.getAll();
  }


  getCatalog(name) {
    return this.catalogs.get(name);
  }


  getActiveCatalog() {
    return this.catalogs.getActive();
  }


  setActiveCatalog(name) {
    return this.catalogs.setActive(name);
  }

  start() {
    this.events.emit(
      "runtime:start",
      this.config
    );
  }

}
