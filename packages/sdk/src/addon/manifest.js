export class AddonManifest {

  constructor({
    id,
    name,
    version,
    description = ""
  }) {

    this.id = id;
    this.name = name;
    this.version = version;
    this.description = description;

  }

}
