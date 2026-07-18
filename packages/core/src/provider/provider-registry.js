export class ProviderRegistry {

  constructor() {
    this.providers = new Map();
    this.activeProvider = null;
  }

  register(provider) {
    const manifest = provider.getManifest();

    this.providers.set(
      manifest.id,
      provider
    );

    if (!this.activeProvider) {
      this.activeProvider = provider;
    }

    return provider;
  }

  get(id) {
    return this.providers.get(id);
  }

  getAll() {
    return [...this.providers.values()];
  }

  getActive() {
    return this.activeProvider;
  }

  setActive(id) {
    const provider = this.get(id);

    if (!provider) {
      throw new Error(
        `Provider "${id}" not found.`
      );
    }

    this.activeProvider = provider;

    return provider;
  }

}
