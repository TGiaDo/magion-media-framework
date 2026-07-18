export class CatalogResult {

  constructor({
    items = [],
    total = 0,
    offset = 0,
    limit = null
  } = {}) {

    this.items = items;
    this.total = total;
    this.offset = offset;
    this.limit = limit;

  }

}
