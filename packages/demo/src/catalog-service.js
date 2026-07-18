import {
  CatalogService,
  CatalogQuery
} from "@magion/sdk";


import {
  demoCatalog
} from "./catalog.js";


export class DemoCatalogService
  extends CatalogService {


  async getCatalog() {

    return demoCatalog;

  }


  async getItem(id) {

    return demoCatalog.find(
      item => item.id === id
    ) || null;

  }


  async search(query) {


    const catalogQuery =
      query instanceof CatalogQuery
        ? query
        : new CatalogQuery({
            query
          });


    let results =
      demoCatalog;


    if (
      catalogQuery.query
    ) {

      const keyword =
        catalogQuery.query
          .toLowerCase();


      results =
        results.filter(
          item =>
            item.title
              .toLowerCase()
              .includes(keyword)
        );

    }


    if (
      catalogQuery.type
    ) {

      results =
        results.filter(
          item =>
            item.type === catalogQuery.type
        );

    }


    if (
      catalogQuery.offset
    ) {

      results =
        results.slice(
          catalogQuery.offset
        );

    }


    if (
      catalogQuery.limit
    ) {

      results =
        results.slice(
          0,
          catalogQuery.limit
        );

    }


    return results;

  }

}
