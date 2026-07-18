import { Screen } from "./screen.js";


export class LibraryView extends Screen {

  constructor() {
    super("library");

    this.items = [];
  }


  add(item) {
    this.items.push(item);
  }


  render() {
    return {
      screen: this.name,
      items: this.items
    };
  }

}
