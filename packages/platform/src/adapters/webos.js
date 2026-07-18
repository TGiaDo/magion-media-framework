export class WebOSAdapter {

  initialize() {
    console.log(
      "Initializing webOS platform"
    );
  }


  getInfo() {
    return {
      name: "webOS",
      vendor: "LG"
    };
  }

}
