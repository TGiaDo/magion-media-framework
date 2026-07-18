export class AddonManager {

  constructor(loader) {
    this.loader = loader;
    this.enabled = new Set();
  }


  install(addon) {
    return this.loader.load(addon);
  }


  enable(id) {
    this.enabled.add(id);
  }


  disable(id) {
    this.enabled.delete(id);
  }


  isEnabled(id) {
    return this.enabled.has(id);
  }

}
