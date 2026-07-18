export class ProviderManifest {

  constructor({
    id,
    name,
    version,
    description = "",
    capabilities = []
  }) {

    this.id = id;
    this.name = name;
    this.version = version;
    this.description = description;
    this.capabilities = Object.freeze([
      ...capabilities
    ]);

    Object.freeze(this);

  }

}
