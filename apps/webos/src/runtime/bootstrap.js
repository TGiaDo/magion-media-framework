import {
  createServices
} from "./services.js";


export function bootstrap() {

  const runtime =
    createServices();


  return runtime;

}
