export class MediaMetadata {

  constructor(options = {}) {
    this.title = options.title || "";
    this.description = options.description || "";
    this.duration = options.duration || 0;
    this.poster = options.poster || null;
  }

}
