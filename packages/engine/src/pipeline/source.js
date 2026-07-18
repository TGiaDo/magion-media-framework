export class MediaSource {

  constructor({
    title,
    url,
    type,
    metadata = {}
  }) {

    this.title = title;
    this.url = url;
    this.type = type;
    this.metadata = metadata;

  }

}
