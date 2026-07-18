import {
  RuntimeContainer
} from "./container.js";


export function createServices() {

  const container =
    new RuntimeContainer();


  container.register(
    "app",
    {
      name: "Magion WebOS App"
    }
  );


  container.register(
    "ui",
    {
      name: "Media Center UI"
    }
  );


  container.register(
    "player",
    {
      name: "Magion Player"
    }
  );


  container.register(
    "engine",
    {
      name: "Magion Engine"
    }
  );


  return container;
}
