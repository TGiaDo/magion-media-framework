export class CatalogRegistry {

  constructor() {

    this.catalogs = new Map();

    this.active = null;

  }


  register(service) {

    const name =
      service.constructor.name;

    this.catalogs.set(
      name,
      service
    );

    if (!this.active) {
      this.active = name;
    }

    return service;

  }


  get(name) {

    return this.catalogs.get(name);

  }


  getAll() {

    return [
      ...this.catalogs.values()
    ];

  }


  getActive() {

    return this.catalogs.get(
      this.active
    );

  }


  setActive(name) {

    if (!this.catalogs.has(name)) {
      throw new Error(
        `Catalog not found: ${name}`
      );
    }

    this.active = name;

    return this.getActive();

  }

}
