export class AddonRegistry {

  constructor() {

    this.addons = new Map();

    this.active = null;

  }


  register(addon) {

    const id =
      addon.getManifest().id;

    this.addons.set(
      id,
      addon
    );

    if (!this.active) {
      this.active = id;
    }

    return addon;

  }


  get(id) {

    return this.addons.get(id);

  }


  getAll() {

    return [
      ...this.addons.values()
    ];

  }


  getActive() {

    return this.addons.get(
      this.active
    );

  }


  setActive(id) {

    if (!this.addons.has(id)) {
      throw new Error(
        `Addon not found: ${id}`
      );
    }

    this.active = id;

    return this.getActive();

  }

}
