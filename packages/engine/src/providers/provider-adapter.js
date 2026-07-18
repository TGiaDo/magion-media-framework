export class ProviderAdapter {

  constructor(provider) {

    this.provider = provider;

  }


  search(query) {

    return this.provider.search(query);

  }


  getCatalog() {

    return this.provider.catalog();

  }


  getStreams(mediaId) {

    return this.provider.streams(mediaId);

  }


  getMetadata(mediaId) {

    return this.provider.metadata(mediaId);

  }

}
