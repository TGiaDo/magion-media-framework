import { demoManifest } from "./manifest.js";
import { demoCatalog } from "./catalog.js";

export class DemoProvider {

  constructor() {
    this.manifest = demoManifest;
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
        items: demoCatalog
      }
    ];
  }

  async search(query) {
    const keyword = String(query).toLowerCase();

    return demoCatalog.filter(item =>
      item.title.toLowerCase().includes(keyword)
    );
  }

  async resolve(id) {
    const media = demoCatalog.find(item => item.id === id);

    if (!media) {
      return null;
    }

    return {
      id: media.id,
      type: "video/mp4",
      url: null
    };
  }

  /*
   * ------------------------------------------------------------------
   * Legacy API (temporary)
   * Remove after Milestone 1.
   * ------------------------------------------------------------------
   */

  getMovies() {
    return demoCatalog;
  }

}
