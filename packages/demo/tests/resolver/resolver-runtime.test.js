import {
  DemoCatalogService,
  DemoResolver
} from "../../src/index.js";


const catalog =
  new DemoCatalogService();


const resolver =
  new DemoResolver(
    catalog
  );


const result =
  await resolver.resolve("bbb");


console.assert(
  result.source !== null,
  "Resolver did not return source"
);


console.assert(
  result.source.id === "bbb",
  "Wrong source id"
);


console.assert(
  result.source.constructor.name
    === "PlaybackSource",
  "Expected PlaybackSource"
);


console.log(
  "✓ Resolver Runtime Flow OK"
);
