export class MagionPlatform {

  constructor(adapter = null) {
    this.adapter = adapter;
    this.initialized = false;
  }


  initialize() {
    if (this.adapter?.initialize) {
      this.adapter.initialize();
    }

    this.initialized = true;
  }


  getInfo() {
    if (this.adapter?.getInfo) {
      return this.adapter.getInfo();
    }

    return {
      name: "unknown"
    };
  }

}
