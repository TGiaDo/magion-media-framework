import {
  CatalogService
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

    const keyword =
      String(query).toLowerCase();


    return demoCatalog.filter(
      item =>
        item.title
          .toLowerCase()
          .includes(keyword)
    );

  }

}
