import assert from "node:assert/strict";

import {
  MagionRuntime
} from "@magion/core";

import {
  DemoAddon
} from "../../src/index.js";

const runtime = new MagionRuntime();

const addon = new DemoAddon();

assert.equal(
  runtime.getAddons().length,
  0
);

await runtime.installAddon(addon);

assert.equal(
  runtime.getAddons().length,
  1
);

assert.equal(
  runtime.getProviders().length,
  1
);

assert.equal(
  runtime.getCatalogs().length,
  1
);

assert.equal(
  runtime.getResolvers().length,
  1
);

console.log(
  "✓ Addon Installation Flow OK"
);
