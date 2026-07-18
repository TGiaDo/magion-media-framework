import {
  MagionRuntime
} from "@magion/core";

import {
  MediaEngine
} from "@magion/engine";

import {
  MagionPlayer
} from "@magion/player";

import {
  AddonManager,
  AddonLoader
} from "@magion/addons";

import {
  MagionPlatform
} from "@magion/platform";


export function createServices() {

  const core =
    new MagionRuntime();


  const engine =
    new MediaEngine();


  const player =
    new MagionPlayer();


  const addonLoader =
    new AddonLoader();


  const addons =
    new AddonManager(addonLoader);


  const platform =
    new MagionPlatform();


  return {

    core,

    engine,

    player,

    addons,

    platform

  };

}
