export class MagionAddon {

  constructor(manifest) {

    this.manifest = manifest;

  }


  getManifest() {

    return this.manifest;

  }


  async initialize() {

    return true;

  }


  async destroy() {

    return true;

  }


  getProviders() {

    return [];

  }


  getCatalogs() {

    return [];

  }


  getResolvers() {

    return [];

  }

}
