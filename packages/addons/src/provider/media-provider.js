export class MediaProvider {

  constructor({
    id,
    name
  }) {

    this.id = id;
    this.name = name;

  }


  search(query) {

    return [];

  }


  catalog() {

    return [];

  }


  streams(mediaId) {

    return [];

  }


  metadata(mediaId) {

    return null;

  }

}
