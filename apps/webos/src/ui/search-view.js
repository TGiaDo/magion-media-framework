import { Screen } from "./screen.js";


export class SearchView extends Screen {

  constructor() {
    super("search");

    this.query = "";
  }


  setQuery(value) {
    this.query = value;
  }


  render() {
    return {
      screen: this.name,
      query: this.query
    };
  }

}
