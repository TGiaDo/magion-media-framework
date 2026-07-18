export class ProviderRegistry {

  constructor() {

    this.providers = new Map();

  }


  register(provider) {

    this.providers.set(
      provider.id,
      provider
    );

  }


  get(id) {

    return this.providers.get(id);

  }


  list() {

    return Array.from(
      this.providers.values()
    );

  }

}
