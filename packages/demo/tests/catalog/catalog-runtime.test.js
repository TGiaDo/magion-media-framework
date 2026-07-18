import { MagionRuntime } from "@magion/core";
import { DemoCatalogService } from "../../src/catalog-service.js";


const runtime = new MagionRuntime();


const catalog =
  new DemoCatalogService();


runtime.registerCatalog(
  catalog
);


console.assert(
  runtime.getCatalogs().length === 1,
  "Catalog registration failed"
);


console.assert(
  runtime.getActiveCatalog()
    instanceof DemoCatalogService,
  "Active catalog failed"
);


const results =
  await runtime
    .getActiveCatalog()
    .search("bunny");


console.assert(
  results.length === 1,
  "Catalog search failed"
);


console.log(
  "✓ Catalog Runtime Flow OK"
);
