export class AddonLoader {

  constructor(registry) {
    this.registry = registry;
  }


  load(addon) {

    const id =
      addon.manifest?.id ||
      addon.id;


    if (!id) {
      throw new Error(
        "Addon must have an id"
      );
    }


    this.registry.registerAddon(
      id,
      addon
    );


    return addon;
  }

}
