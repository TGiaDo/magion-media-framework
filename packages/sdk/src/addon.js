export class MagionAddon {

  constructor(manifest = {}) {
    this.manifest = manifest;
  }

  initialize() {
    return true;
  }

  getManifest() {
    return this.manifest;
  }
}
