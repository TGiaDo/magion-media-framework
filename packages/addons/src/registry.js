export class AddonRegistry {

  constructor() {
    this.addons = new Map();
    this.providers = new Map();
  }


  registerAddon(id, addon) {
    this.addons.set(id, addon);
  }


  registerProvider(id, provider) {
    this.providers.set(id, provider);
  }


  getAddon(id) {
    return this.addons.get(id);
  }


  getProvider(id) {
    return this.providers.get(id);
  }


  listAddons() {
    return [
      ...this.addons.keys()
    ];
  }

}
