export class ResolverRegistry {

  constructor() {

    this.resolvers = new Map();

    this.active = null;

  }


  register(resolver) {

    const name =
      resolver.constructor.name;

    this.resolvers.set(
      name,
      resolver
    );

    if (!this.active) {
      this.active = name;
    }

    return resolver;

  }


  get(name) {

    return this.resolvers.get(name);

  }


  getAll() {

    return [
      ...this.resolvers.values()
    ];

  }


  getActive() {

    return this.resolvers.get(
      this.active
    );

  }


  setActive(name) {

    if (!this.resolvers.has(name)) {
      throw new Error(
        `Resolver not found: ${name}`
      );
    }

    this.active = name;

    return this.getActive();

  }

}
