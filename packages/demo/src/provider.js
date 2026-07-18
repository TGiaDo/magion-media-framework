import { PlaybackSource } from "@magion/engine";

import { demoManifest } from "./manifest.js";
import { DemoCatalogService } from "./catalog-service.js";


export class DemoProvider {

  constructor() {

    this.manifest = demoManifest;

    this.catalog =
      new DemoCatalogService();

  }


  getManifest() {

    return this.manifest;

  }


  getName() {

    return this.manifest.name;

  }


  async initialize() {

    return true;

  }


  async destroy() {

    return true;

  }


  async home() {

    return [
      {
        id: "movies",
        title: "Movies",
        items:
          await this.catalog.getCatalog()
      }
    ];

  }


  async search(query) {

    return this.catalog.search(query);

  }


  async resolve(id) {

    const media =
      await this.catalog.getItem(id);


    if (!media) {

      return null;

    }


    return new PlaybackSource({

      id: media.id,

      url: null,

      mimeType: "video/mp4"

    });

  }


  /*
   * ------------------------------------------------------------------
   * Legacy API (temporary)
   * Remove after Milestone 1.
   * ------------------------------------------------------------------
   */


  async getMovies() {

    return this.catalog.getCatalog();

  }

}
