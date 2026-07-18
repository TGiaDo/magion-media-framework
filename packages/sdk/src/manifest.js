export class AddonManifest {

  constructor(options = {}) {
    this.id = options.id || "unknown";
    this.name = options.name || "Unnamed Addon";
    this.version = options.version || "0.1.0";
  }
}
