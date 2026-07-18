export class CatalogQuery {

  constructor({
    query = "",
    type = null,
    limit = null,
    offset = 0,
    filters = {}
  } = {}) {

    this.query = query;
    this.type = type;
    this.limit = limit;
    this.offset = offset;
    this.filters = filters;

  }

}
