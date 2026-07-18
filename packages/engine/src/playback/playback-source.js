export class PlaybackSource {

  constructor({
    id,
    url,
    mimeType,
    quality = null,
    subtitles = [],
    audioTracks = []
  }) {

    this.id = id;
    this.url = url;
    this.mimeType = mimeType;
    this.quality = quality;
    this.subtitles = subtitles;
    this.audioTracks = audioTracks;

  }

}
