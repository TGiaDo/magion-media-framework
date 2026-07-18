import { MagionRuntime } from "@magion/core";
import { DemoProvider } from "../src/provider.js";

const runtime = new MagionRuntime();

const provider = new DemoProvider();

runtime.registerProvider(provider);

console.assert(
  runtime.getProviders().length === 1,
  "Provider registration failed"
);

console.assert(
  runtime.getActiveProvider().getName()
    === "Magion Demo Provider",
  "Active provider failed"
);

const home = await runtime
  .getActiveProvider()
  .home();

console.assert(
  home.length > 0,
  "Provider home failed"
);

console.log(
  "✓ Provider Runtime Flow OK"
);
