export class Screen {

  constructor(name) {
    this.name = name;
    this.visible = false;
  }


  show() {
    this.visible = true;
  }


  hide() {
    this.visible = false;
  }


  render() {
    return {
      screen: this.name
    };
  }

}
