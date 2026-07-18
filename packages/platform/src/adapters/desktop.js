export class DesktopAdapter {

  initialize() {
    console.log(
      "Initializing Desktop platform"
    );
  }


  getInfo() {
    return {
      name: "Desktop"
    };
  }

}
