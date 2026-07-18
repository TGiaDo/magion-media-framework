import { Screen } from "./screen.js";


export class PlayerView extends Screen {

  constructor() {
    super("player");

    this.media = null;
  }


  load(media) {
    this.media = media;
  }


  render() {
    return {
      screen: this.name,
      media: this.media
    };
  }

}
