import { MagionRuntime } from "@magion/core";
import { DemoCatalogService } from "../../src/catalog-service.js";


const runtime = new MagionRuntime();


runtime.registerCatalog(
  new DemoCatalogService()
);


console.assert(
  runtime.getCatalogs().length === 1,
  "Catalog registration failed"
);


console.assert(
  runtime.getActiveCatalog()
    .constructor.name === "DemoCatalogService",
  "Active catalog failed"
);


console.log(
  "✓ Catalog Runtime Flow OK"
);
