import { DemoProvider } from "../src/provider.js";
import { MediaPipeline } from "@magion/engine";

const provider = new DemoProvider();

const source =
  await provider.resolve("bbb");

console.assert(
  source.constructor.name === "PlaybackSource",
  "Invalid playback source"
);

const pipeline =
  new MediaPipeline();

pipeline.loadPlaybackSource(source);

console.assert(
  pipeline.getState() === "ready",
  "Pipeline is not ready"
);

console.assert(
  pipeline.source.type === "video/mp4",
  "Invalid media type"
);

console.log(
  "✓ Playback Pipeline Flow OK"
);
