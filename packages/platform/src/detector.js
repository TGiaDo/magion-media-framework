export function detectPlatform() {

  if (typeof window !== "undefined") {

    if (window.PalmSystem) {
      return "webos";
    }

    return "web";
  }


  return "desktop";
}
