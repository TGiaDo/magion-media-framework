import {
  MediaResolver,
  ResolverResult
} from "@magion/sdk";

import {
  PlaybackSource
} from "@magion/engine";


export class DemoResolver
  extends MediaResolver {


  constructor(catalog) {

    super();

    this.catalog = catalog;

  }


  async resolve(id) {

    const item =
      await this.catalog.getItem(id);


    if (!item) {

      return new ResolverResult({
        source: null
      });

    }


    const source =
      new PlaybackSource({

        id: item.id,

        url: null,

        mimeType: "video/mp4"

      });


    return new ResolverResult({

      source

    });

  }

}
