export class MediaProvider {

  getManifest() {
    throw new Error(
      "MediaProvider.getManifest() must be implemented."
    );
  }

  getMovies() {
    throw new Error(
      "MediaProvider.getMovies() must be implemented."
    );
  }

}
