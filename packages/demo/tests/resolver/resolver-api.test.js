import {
  MagionRuntime
} from "@magion/core";

import {
  DemoCatalogService,
  DemoResolver
} from "../../src/index.js";


const runtime =
  new MagionRuntime();


const catalog =
  new DemoCatalogService();


const resolver =
  new DemoResolver(
    catalog
  );


runtime.registerCatalog(
  catalog
);


runtime.registerResolver(
  resolver
);


const result =
  await runtime.resolveMedia(
    "bbb"
  );


console.assert(
  result.source.id === "bbb",
  "Wrong resolved media"
);


console.assert(
  result.source.constructor.name
    === "PlaybackSource",
  "Expected PlaybackSource"
);


console.log(
  "✓ Resolver Runtime API OK"
);
