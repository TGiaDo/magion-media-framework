import {
  ProviderManifest,
  ProviderCapabilities
} from "@magion/sdk";

export const demoManifest = new ProviderManifest({

  id: "demo",

  name: "Magion Demo Provider",

  version: "0.1.0",

  description: "Built-in demo provider",

  capabilities: [
    ProviderCapabilities.MOVIES
  ]

});
