export class RuntimeContainer {

  constructor() {
    this.services = new Map();
  }


  register(name, service) {
    this.services.set(
      name,
      service
    );
  }


  get(name) {
    return this.services.get(name);
  }


  has(name) {
    return this.services.has(name);
  }

}
