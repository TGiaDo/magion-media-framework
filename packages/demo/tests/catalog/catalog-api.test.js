import {
  MagionRuntime
} from "@magion/core";

import {
  DemoCatalogService
} from "../../src/catalog-service.js";


const runtime =
  new MagionRuntime();


runtime.registerCatalog(
  new DemoCatalogService()
);


const items =
  await runtime.searchCatalog(
    "bunny"
  );


console.assert(
  items.length === 1,
  "Search failed"
);


console.assert(
  items[0].title === "Big Buck Bunny",
  "Wrong item"
);


console.log(
  "✓ Catalog Runtime API OK"
);
