export class MediaProvider {

  constructor(name) {
    this.name = name;
  }

  async search(query) {
    throw new Error(
      `${this.name} provider does not implement search()`
    );
  }

  async getContent(id) {
    throw new Error(
      `${this.name} provider does not implement getContent()`
    );
  }
}
