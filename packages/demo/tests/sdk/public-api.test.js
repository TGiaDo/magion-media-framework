import * as SDK from "@magion/sdk";


const requiredExports = [

  // Provider API
  "MediaProvider",
  "ProviderManifest",
  "ProviderCapabilities",


  // Catalog API
  "CatalogService",
  "MediaItem",
  "CatalogQuery",
  "CatalogResult",


  // Addon API
  "MagionAddon"

];


for (const api of requiredExports) {

  console.assert(
    api in SDK,
    `Missing SDK export: ${api}`
  );

}


console.log(
  "✓ SDK Public API Export OK"
);
