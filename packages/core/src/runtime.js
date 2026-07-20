import { EventBus } from "./event-bus.js";
import { PluginSystem } from "./plugin-system.js";
import { MagionConfig } from "./config.js";
import { ProviderRegistry } from "./provider/provider-registry.js";
import { CatalogRegistry } from "./catalog/catalog-registry.js";
import { AddonRegistry } from "./addon/index.js";
import { ResolverRegistry } from "./resolver/resolver-registry.js";

export class MagionRuntime {

  constructor(options = {}) {
    this.config = new MagionConfig(options);
    this.events = new EventBus();
    this.plugins = new PluginSystem();
    this.providers = new ProviderRegistry();
    this.catalogs = new CatalogRegistry();
    this.addons = new AddonRegistry();
    this.resolvers = new ResolverRegistry();
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


  getCatalog(name) {
    return this.catalogs.get(name);
  }


  getCatalogs() {
    return this.catalogs.getAll();
  }


  getActiveCatalog() {
    return this.catalogs.getActive();
  }


  setActiveCatalog(name) {
    return this.catalogs.setActive(name);
  }



  async getCatalogItems() {

    const catalog =
      this.getActiveCatalog();

    if (!catalog) {
      throw new Error(
        "No active catalog"
      );
    }

    return catalog.getCatalog();

  }


  async searchCatalog(query) {

    const catalog =
      this.getActiveCatalog();

    if (!catalog) {
      throw new Error(
        "No active catalog"
      );
    }

    return catalog.search(query);

  }


  async getCatalogItem(id) {

    const catalog =
      this.getActiveCatalog();

    if (!catalog) {
      throw new Error(
        "No active catalog"
      );
    }

    return catalog.getItem(id);

  }


  registerResolver(resolver) {

    return this.resolvers.register(
      resolver
    );

  }


  getResolver(name) {

    return this.resolvers.get(
      name
    );

  }


  getResolvers() {

    return this.resolvers.getAll();

  }


  getActiveResolver() {

    return this.resolvers.getActive();

  }


  setActiveResolver(name) {

    return this.resolvers.setActive(
      name
    );

  }


  async resolveMedia(id) {

    const resolver =
      this.getActiveResolver();

    if (!resolver) {
      throw new Error(
        "No active resolver"
      );
    }

    return resolver.resolve(id);

  }


  registerAddon(addon) {
    return this.addons.register(addon);
  }


  getAddon(id) {
    return this.addons.get(id);
  }


  getAddons() {
    return this.addons.getAll();
  }


  getActiveAddon() {
    return this.addons.getActive();
  }


  setActiveAddon(id) {
    return this.addons.setActive(id);
  }



  start() {
    this.events.emit(
      "runtime:start",
      this.config
    );
  }

}
