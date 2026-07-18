export class PluginSystem {
  constructor() {
    this.plugins = [];
  }

  register(plugin) {
    this.plugins.push(plugin);
  }

  list() {
    return this.plugins;
  }
}
