import {
  MagionAddon,
  AddonManifest
} from "@magion/sdk";

import {
  DemoProvider
} from "../provider.js";

import {
  DemoCatalogService
} from "../catalog-service.js";

import {
  DemoResolver
} from "../resolver/demo-resolver.js";


export class DemoAddon
  extends MagionAddon {

  constructor() {

    super(
      new AddonManifest({
        id: "demo",
        name: "Demo Addon",
        version: "0.1.0"
      })
    );

  }


  getProviders() {

    return [
      new DemoProvider()
    ];

  }


  getCatalogs() {

    return [
      new DemoCatalogService()
    ];

  }


  getResolvers() {

    return [
      new DemoResolver()
    ];

  }

}
