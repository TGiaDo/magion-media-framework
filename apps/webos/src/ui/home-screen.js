import { Screen } from "./screen.js";


export class HomeScreen extends Screen {

  constructor() {
    super("home");

    this.sections = [
      "Movies",
      "Series",
      "Library",
      "Addons",
      "Settings"
    ];
  }


  render() {
    return {
      screen: this.name,
      sections: this.sections
    };
  }

}
