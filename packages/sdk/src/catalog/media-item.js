export class MediaItem {

  constructor({
    id,
    title,
    type,
    year = null,
    poster = null,
    metadata = {}
  }) {

    this.id = id;
    this.title = title;
    this.type = type;
    this.year = year;
    this.poster = poster;
    this.metadata = metadata;

  }

}
