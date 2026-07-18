export class MediaStream {

  constructor(options = {}) {
    this.url = options.url || null;
    this.type = options.type || "unknown";
    this.quality = options.quality || null;
    this.headers = options.headers || {};
  }

}
